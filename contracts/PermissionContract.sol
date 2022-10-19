// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {
MerkleProof
} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {IENSRegistrar} from "./ens/interfaces/IENSRegistrar.sol";

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
    // Root shard => Node => True/False
    mapping(bytes32 => mapping(bytes32 => bool)) internal claimed;

    // Registration fee
    uint256 public registrationFee = 0.001 ether;

    // ============ Events ============

    event Registered(string label, address owner);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );
    event RootUpdated(bytes32 rootShard, bytes32 oldRoot, bytes32 newRoot);
    event Transfer(address indexed from, address indexed to, uint256 value);

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
        require(isRootProvider() || isOwner(), "PermissionContract: caller is not the root provider or owner.");
        _;
    }

    // ============ Constructor ============

    constructor() public {
        _owner = tx.origin;
        emit OwnershipTransferred(address(0), _owner);
    }

    // ============ Registration ============

    /**
     * Burns the sender's invite tokens and registers an ENS given label to a given address.
     * @param owner_ The address that should own the label.
     * @param rootName_ The name of the ens root
     * @param rootNode_ The hashed node for the ens root
     * @param label_ The user's ENS label, e.g. "admin" for admin.soul.xyz.
     * @param rootShard_ The merkle proof shard
     * @param merkleProof_ The merkle proof
     */
    function registerWithProof(
        address owner_,
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
//        require(msg.value >= registrationFee, "registration fee required");

        emit Registered(label_, owner_);
        // Generate the node for the merkle tree.
        bytes32 merkleNode = keccak256(abi.encodePacked(owner_, rootNode_, label_));
        // Make sure it's not already claimed.
        //        require(!claimed[rootShard_][rootNode_], "PermissionContract: already claimed.");
        // Verify the merkle proof.
        require(
            MerkleProof.verify(merkleProof_, merkleRoots[rootShard_], merkleNode),
            "PermissionContract: Invalid proof."
        );
        // Mark it claimed.
        //        claimed[rootShard_][merkleNode] = true;
        // Register the node.
        IENSRegistrar(ensRegistrar).register(
            rootName_,
            rootNode_,
            label_,
            owner_
        );
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

    // ============ Merkle-Tree Token Claim ============

    function setMerkleRoot(bytes32 rootShard, bytes32 merkleRoot_) external onlyRootProvider {
        emit RootUpdated(rootShard, merkleRoots[rootShard], merkleRoot_);
        merkleRoots[rootShard] = merkleRoot_;
    }

    function getMerkleRoot(bytes32 shard) public view returns (bytes32) {
        return merkleRoots[shard];
    }

    function isClaimed(bytes32 rootShard, bytes32 node) public view returns (bool) {
        return claimed[rootShard][node];
    }

    function transferFunds(address payable to, uint256 value) external onlyOwner
    {
        _sendFunds(to, value);
        emit Transfer(address(this), to, value);
    }

    function _sendFunds(address payable recipient, uint256 amount) private {
        require(
            address(this).balance >= amount,
            "Insufficient balance for send"
        );

        (bool success,) = recipient.call{value : amount}("");
        require(success, "Unable to send value: recipient may have reverted");
    }

    receive() external payable {}
}
