// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {
    MerkleProof
} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {IENSRegistrar} from "./ens/interfaces/IENSRegistrar.sol";
import {IERC721} from "./lib/ERC721/interface/IERC721.sol";

/**
 * @title PermissionContract
 * @author Graeme (@strangechances)
 *
 *  An ERC20 that grants access to the ENS namespace through a
 *  burn-and-register model.
 */
contract PermissionContract {
    // ============ Mutable Ownership Configuration ============

    address private _owner;
    address private _rootProvider;
    /**
     * @dev Allows for two-step ownership transfer, whereby the next owner
     * needs to accept the ownership transfer explicitly.
     */
    address private _nextOwner;

    // ============ Mutable Registration Configuration ============

    bool public registrable = true;
    address public ensRegistrar;

    // ============ Merkle Root Configuration ============

    mapping(bytes32 => bytes32) public merkleRoots;
    // Root shard => id => True/False
    mapping(bytes32 => mapping(bytes32 => bool)) internal claimed;

    // ============ Fee Configuration ============

    // Root node => funding recipient => fee amount
    mapping(bytes32 => NodeFeeConfig) public feeConfigs;
    struct NodeFeeConfig {
        address payable recipient;
        uint256 fee;
    }

    // Soul commission charge bips
    uint256 public commissionBips = 0;

    // ============ Events ============

    event Registered(string label, address owner);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event RootUpdated(bytes32 rootShard, bytes32 oldRoot, bytes32 newRoot);
    event Transfer(address indexed from, address indexed to, uint256 value);
    event FeeUpdated(bytes32 rootNode, uint256 newFee);
    event CommissionBipsUpdated(uint256 newBips);

    // ============ Modifiers ============

    modifier canRegister() {
        require(registrable, "PermissionContract: registration is closed.");
        _;
    }

    modifier onlyOwner() {
        require(isOwner(), "PermissionContract: caller is not the owner.");
        _;
    }

    modifier onlyNextOwner() {
        require(
            isNextOwner(),
            "PermissionContract: current owner must set caller as next owner."
        );
        _;
    }

    modifier onlyRootProvider() {
        require(
            isRootProvider() || isOwner(),
            "PermissionContract: caller is not the root provider or owner."
        );
        _;
    }

    // ============ Constructor ============

    constructor() {
        _owner = tx.origin;
        emit OwnershipTransferred(address(0), _owner);
    }

    // ============ Registration ============

    /**
     * Burns the sender's invite tokens and registers an ENS given label to a given address.
     * @param rootName_ The name of the ens root
     * @param rootNode_ The hashed node for the ens root
     * @param rootShard_ The merkle proof shard
     * @param owners_ The list of addresses that should own the labels.
     * @param labels_ The list of ENS labels, e.g. "admin" for admin.soul.xyz.
     * @param merkleProofs_ The list of merkle proof
     */

    function registerWithProof(
        string memory rootName_,
        bytes32 rootNode_,
        bytes32 rootShard_,
        address[] calldata owners_,
        string[] calldata labels_,
        bytes32[][] calldata merkleProofs_
    )
        external
        payable
        canRegister
    {
        require(
            owners_.length == labels_.length && owners_.length == merkleProofs_.length,
            "PermissionContract: invalid params"
        );

        // Check the registration fee
        NodeFeeConfig memory feeConfig = feeConfigs[rootNode_];
        require(msg.value >= feeConfig.fee, "PermissionContract: registration fee required");

        uint256 payout = feeConfig.fee * (10000 - commissionBips) / 10000 * owners_.length;
        if (payout > 0) {
            _sendFunds(feeConfig.recipient, payout);
            emit Transfer(address(this), feeConfig.recipient, payout);
        }

        for (uint i = 0; i < owners_.length; i++) {
            _registerWithProof(
                rootName_,
                rootNode_,
                rootShard_,
                owners_[i],
                labels_[i],
                merkleProofs_[i]
            );
        }
    }

    function _registerWithProof (
        string memory rootName_,
        bytes32 rootNode_,
        bytes32 rootShard_,
        address owner_,
        string calldata label_,
        bytes32[] calldata merkleProof_
    )
        private
    {
        // Verify the merkle proof.
        require(
            MerkleProof.verify(
                merkleProof_,
                merkleRoots[rootShard_],
                keccak256(abi.encodePacked(owner_, rootNode_, label_))
            ),
            "PermissionContract: Invalid proof."
        );

        // We don't need to mark it as claimed, because the label is already scarce.

        // Register the node.
        IENSRegistrar(ensRegistrar).register(
            rootName_,
            rootNode_,
            label_,
            owner_
        );
        emit Registered(label_, owner_);
    }

    function registerWithNFTOwnership(
        address nftContract_,
        uint256 tokenId,
        string memory rootName_,
        bytes32 rootNode_,
        string calldata label_,
        bytes32 rootShard_,
        bytes32[] calldata merkleProof_
    )
        external
        payable
        canRegister
    {
        bytes32 claimId = keccak256(abi.encodePacked(tokenId, nftContract_));
        //  Make sure it's not already claimed.
        require(!claimed[rootShard_][claimId], "PermissionContract: already claimed.");
        // Mark it as claimed.
        claimed[rootShard_][claimId] = true;

        // NOTE: No registration fee for existing NFT holders.
        require((msg.sender == IERC721(nftContract_).ownerOf(tokenId)), "caller must be owner");

        // Verify the merkle proof that the NFT contract is in the merkle tree.
        require(
            MerkleProof.verify(
                merkleProof_,
                merkleRoots[rootShard_],
                // We use * as the label to allow any label to be registered within this ownership.
                keccak256(abi.encodePacked(nftContract_, rootNode_, "*"))
            ),
            "PermissionContract: Invalid proof."
        );

        // Register the node.
        IENSRegistrar(ensRegistrar).register(
            rootName_,
            rootNode_,
            label_,
            msg.sender
        );
        emit Registered(label_, msg.sender);
    }

    // ============ Ownership ============

    /**
     * @dev Returns true if the caller is the current owner.
     */
    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    /**
     * @dev Returns true if the caller is the current root provider.
     */
    function isRootProvider() public view returns (bool) {
        return msg.sender == _rootProvider;
    }

    /**
     * @dev Returns true if the caller is the next owner.
     */
    function isNextOwner() public view returns (bool) {
        return msg.sender == _nextOwner;
    }

    /**
     * @dev Allows a new account (`newOwner`) to accept ownership.
     * Can only be called by the current owner.
     */
    function transferOwnership(address nextOwner_) external onlyOwner {
        require(
            nextOwner_ != address(0),
            "PermissionContract: next owner is the zero address."
        );

        _nextOwner = nextOwner_;
    }

    /**
     * @dev Cancel a transfer of ownership to a new account.
     * Can only be called by the current owner.
     */
    function cancelOwnershipTransfer() external onlyOwner {
        delete _nextOwner;
    }

    /**
     * @dev Transfers ownership of the contract to the caller.
     * Can only be called by a new potential owner set by the current owner.
     */
    function acceptOwnership() external onlyNextOwner {
        delete _nextOwner;

        emit OwnershipTransferred(_owner, msg.sender);
        _owner = msg.sender;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    // ============ Configuration Management ============

    /**
     * Allows the owner to change the ENS Registrar address.
     */
    function setENSRegistrar(address ensRegistrar_) external onlyOwner {
        ensRegistrar = ensRegistrar_;
    }

    /**
     * Allows the owner to pause registration.
     */
    function setRegistrable(bool registrable_) external onlyOwner {
        registrable = registrable_;
    }

    /**
     * Allows the root provider to set/update registration fee recipient and amount
     */
    function setRegistrationFee(bytes32 rootNode, NodeFeeConfig memory feeConfig) external onlyRootProvider {
        feeConfigs[rootNode] = feeConfig;
        emit FeeUpdated(rootNode, feeConfig.fee);
    }

    /**
     * Allows the owner to set the commission bips
     */
    function setCommissionBips(uint256 newBips) external onlyOwner {
        require(newBips <= 10000, "PermissionContract: Invalid commission bips");
        commissionBips = newBips;
        emit CommissionBipsUpdated(newBips);
    }

    // ============ Merkle-Tree Token Claim ============

    function setMerkleRoot(bytes32 rootShard, bytes32 merkleRoot_) external onlyRootProvider {
        emit RootUpdated(rootShard, merkleRoots[rootShard], merkleRoot_);
        merkleRoots[rootShard] = merkleRoot_;
    }

    function getMerkleRoot(bytes32 shard) public view returns (bytes32) {
        return merkleRoots[shard];
    }

    function transferFunds(address payable to, uint256 value) external onlyOwner
    {
        _sendFunds(to, value);
        emit Transfer(address(this), to, value);
    }

    function _sendFunds(address payable recipient, uint256 amount) private {
        (bool success,) = recipient.call{value : amount}("");
        require(success, "Unable to send value: recipient may have reverted");
    }

    receive() external payable {}
}
