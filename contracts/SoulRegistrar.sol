// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {Base64} from "@openzeppelin/contracts/utils/Base64.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";
import {IENS} from "./ens/interfaces/IENS.sol";
import {IRenderer} from "./renderer/interface/IRenderer.sol";
import {IENSResolver} from "./ens/interfaces/IENSResolver.sol";
import {IENSRegistrar} from "./ens/interfaces/IENSRegistrar.sol";
import {ISoulRegistrar} from "./ens/interfaces/ISoulRegistrar.sol";
import {IERC721, IERC721Metadata, IERC721Events} from "./lib/ERC721/interface/IERC721.sol";
import {IERC165} from "./lib/ERC165/interface/IERC165.sol";

contract SoulRegistrar is
IERC165,
IERC721,
IERC721Metadata,
IERC721Events,
ISoulRegistrar,
Ownable2Step,
ReentrancyGuard
{

    // ======================== Immutable Storage ========================
    /**
     * The interface of the public ENS registry.
     * @dev Dependency-injectable for testing purposes, but otherwise this is the
     * canonical ENS registry at 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e.
     */
    IENS public immutable ensRegistry;

    /**
     * The interface of the ENSResolver.
     * The ENS public resolver at 0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41
     */
    IENSResolver public immutable ensResolver;

    // ================ Mutable Ownership Configuration ==================

    /**
     * The address of the contract's relayer.
     * Relayer has the permission to relay certain actions to this contract (i.e., set MerkleRoot)
     */
    address private _relayer;

    // ====================== Merkle Root Configuration ====================

    mapping(bytes32 => bytes32) public merkleRoots;

    // Root shard => id => True/False
    mapping(bytes32 => mapping(bytes32 => bool)) public claimed;

    // ================ Mutable Registration Configuration ==================

    bool public registrable;

    // Root node => funding recipient => fee amount
    mapping(bytes32 => NodeFeeConfig) public feeConfigs;

    struct NodeFeeConfig {
        address payable recipient;
        uint256 fee;
    }

    // Soul commission charge bips
    uint256 public commissionBips;

    // ============================ ERC721 ==============================

    string public constant baseURI = "https://soul.xyz/";
    uint256 public totalSupply;
    mapping(uint256 => bytes32) private _nodes;
    mapping(address => uint256) internal _balances;

    // ============================ ERC721 Metadata ==============================

    string public override name = "Soul V1 ENS Subdomains";
    string public override symbol = "SOUL_V1_ENS_SUBDOMAINS";

    // ============================ ERC721 Renderer ==============================

    address public renderer;

    // ================================ Events ==============================

    event RelayerUpdated(address newRelayer);
    event RegistrableUpdated(bool newRegistrable);
    event RegisteredSubdomain(bytes32 indexed rootNode, string label, address receiver);
    event MerkleRootUpdated(bytes32 indexed rootShard, bytes32 newMerkleRoot);
    event FeeUpdated(bytes32 indexed rootNode, uint256 newFee);
    event CommissionBipsUpdated(uint256 newBips);
    event FeePayout(address indexed from, address indexed to, uint256 value);
    event FeeWithdrawal(address indexed from, address indexed to, uint256 value);

    // ================================ Errors ==============================

    error Unauthorized();
    error RegistrationHasNotStarted();
    error InvalidParams();
    error InsufficientBalance();
    error AlreadyClaimed();
    error InvalidProof();
    error SubdomainAlreadyOwned();
    error UnsupportedAction();

    // ============================== Modifiers ==============================

    /**
     * @dev Modifier to check whether the `msg.sender` is the relayer.
     */
    modifier onlyRelayer() {
        if (msg.sender != relayer()) revert Unauthorized();
        _;
    }

    modifier canRegister() {
        if (!registrable) revert RegistrationHasNotStarted();
        _;
    }

    // ============================ Constructor ==============================

    /**
     * @notice Constructor that sets the ENS root name and root node to manage.
     * @param ensRegistry_ The address of the ENS registry
     * @param ensResolver_ The address of the ENS resolver
     */
    constructor(
        address ensRegistry_,
        address ensResolver_
    ) {
        ensRegistry = IENS(ensRegistry_);
        ensResolver = IENSResolver(ensResolver_);
        setRegistrable(true);
    }

    // ====================== Configuration Management ========================

    /**
     * Allows the owner to pause registration.
     */
    function setRegistrable(bool newRegistrable) public onlyOwner {
        registrable = newRegistrable;
        emit RegistrableUpdated(newRegistrable);
    }

    /**
     * Allows the owner to set a relayer address
     */
    function setRelayer(address newRelayer) public onlyOwner {
        _relayer = newRelayer;
        emit RelayerUpdated(newRelayer);
    }

    /**
     * Allows relayer to set/update registration fee recipient and amount
     */
    function setRegistrationFee(bytes32 rootNode, NodeFeeConfig memory feeConfig) external onlyRelayer {
        feeConfigs[rootNode] = feeConfig;
        emit FeeUpdated(rootNode, feeConfig.fee);
    }

    /**
     * Allows the owner to set the commission bips
     */
    function setCommissionBips(uint256 newBips) external onlyOwner {
        if (newBips > 10000) revert InvalidParams();

        commissionBips = newBips;
        emit CommissionBipsUpdated(newBips);
    }

    /**
     * Allows the Relayer to set the MerkleRoot
     */
    function setMerkleRoot(bytes32 rootShard, bytes32 newMerkleRoot) external onlyRelayer {
        merkleRoots[rootShard] = newMerkleRoot;
        emit MerkleRootUpdated(rootShard, newMerkleRoot);
    }

    // ================================ Getters ===============================

    function relayer() public view returns (address) {
        return _relayer == address(0) ? owner() : _relayer;
    }

    // ========================= Subdomain Registration ========================

    /**
     * This method registers an ENS given label to a given address, provided that there is a proof of its
     * inclusion (label and owner address) in the membership merkle tree.
     * Before calling this function, the root node owner should already called setApprovalForAll
     * on ENSRegistry to add this contract as the root node's authorised operator.
     * @param rootNode The hashed node for the ens root
     * @param rootShard The merkle proof shard
     * @param receivers The list of addresses that should own the labels.
     * @param labels The list of ENS labels
     * @param merkleProofs The list of merkle proof
     */
    function registerWithProof(
        bytes32 rootNode,
        bytes32 rootShard,
        address[] calldata receivers,
        string[] calldata labels,
        bytes32[][] calldata merkleProofs
    )
    external
    payable
    canRegister
    nonReentrant
    {
        if (receivers.length != labels.length || receivers.length != merkleProofs.length) revert InvalidParams();

        // registration fee
        NodeFeeConfig memory feeConfig = feeConfigs[rootNode];
        if (msg.value < feeConfig.fee) revert InsufficientBalance();

        uint256 payout = feeConfig.fee * (10000 - commissionBips) / 10000 * receivers.length;
        if (payout > 0) {
            Address.sendValue(feeConfig.recipient, payout);
            emit FeePayout(address(this), feeConfig.recipient, payout);
        }

        for (uint i = 0; i < receivers.length; i++) {
            bytes32 merkleLeaf = keccak256(abi.encodePacked(receivers[i], rootNode, labels[i]));
            _register(rootNode, rootShard, receivers[i], labels[i], merkleProofs[i], merkleLeaf);
        }
    }

    /**
     * @notice Allow membership NFT owner to claim ENS subdomain of the root node. Only one subdomain can be
     * claimed per NFT token ID.
     * Before calling this function, the root node owner should already called setApprovalForAll
     * on ENSRegistry to add this contract as the root node's authorised operator.
     * @param nftContract The contract address of the membership NFT
     * @param tokenId The token id of the membership NFT
     * @param rootNode The node of the root name
     * @param label The subdomain label
     * @param rootShard The merkle proof shard
     * @param merkleProof The list of merkle proof
     */
    function registerWithNFTOwnership(
        address nftContract,
        uint256 tokenId,
        bytes32 rootNode,
        string calldata label,
        bytes32 rootShard,
        bytes32[] calldata merkleProof
    )
    external
    canRegister
    {
        bytes32 claimId = keccak256(abi.encodePacked(tokenId, nftContract));
        //  Make sure it's not already claimed.
        if (claimed[rootShard][claimId]) revert AlreadyClaimed();
        // Mark it as claimed.
        claimed[rootShard][claimId] = true;

        // NOTE: No registration fee for existing NFT holders.
        if (msg.sender != IERC721(nftContract).ownerOf(tokenId)) revert Unauthorized();

        bytes32 merkleLeaf = keccak256(abi.encodePacked(nftContract, rootNode, "*"));
        _register(rootNode, rootShard, msg.sender, label, merkleProof, merkleLeaf);
    }

    /**
     * @notice Assigns an ENS subdomain of the root node to a target address.
     * Private function. Before calling this function,
     * the root node owner should already called setApprovalForAll on ENSRegistry,
     * to add this contract as the root node's authorised operator.
     * @param rootNode The node of the root name
     * @param rootShard The merkle proof shard
     * @param receiver The owner of the subdomain
     * @param label The subdomain label
     * @param merkleProof The list of merkle proof
     * @param merkleLeaf The leaf of merkle proof
     */
    function _register(
        bytes32 rootNode,
        bytes32 rootShard,
        address receiver,
        string memory label,
        bytes32[] memory merkleProof,
        bytes32 merkleLeaf
    )
    private
    {
        // Verify the merkle proof.
        if (!MerkleProof.verify(merkleProof, merkleRoots[rootShard], merkleLeaf)) revert InvalidProof();
        // We don't need to mark it as claimed, because the label is already scarce.

        // Register the node with ens
        bytes32 labelNode = keccak256(abi.encodePacked(label));
        bytes32 node = keccak256(abi.encodePacked(rootNode, labelNode));

        if (ensRegistry.owner(node) != address(0)) revert SubdomainAlreadyOwned();

        // mint the subdomain to this contract first
        ensRegistry.setSubnodeRecord(rootNode, labelNode, address(this), address(ensResolver), 0);

        // resolve the subdomain to receiver as owner
        ensResolver.setAddr(node, receiver);

        // transfer the subdomain to user
        ensRegistry.setSubnodeOwner(rootNode, labelNode, receiver);

        _mint(receiver, node);

        emit RegisteredSubdomain(rootNode, label, receiver);
    }

    // ========================== Admin Functions ==========================

    function withdrawFees(address payable to) external onlyOwner
    {
        uint256 balance = address(this).balance;
        Address.sendValue(to, balance);
        emit FeeWithdrawal(address(this), to, balance);
    }

    // ========================== ERC721 Functions ==========================

    function tokenURI(uint256 tokenId)
    external
    view
    override
    returns (string memory)
    {
        require(_exists(tokenId), "ERC721: query for nonexistent token");

        bytes32 node = _nodes[tokenId];

        if (renderer != address(0)) {
            return IRenderer(renderer).tokenURI(tokenId, node);
        }

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        name,
                        " ",
                        Strings.toString(tokenId),
                        node,
                        '", "image": "https://',
                        string(abi.encode(baseURI, "/", node)),
                        '", "attributes":[{ "trait_type": "Serial", "value": ',
                        Strings.toString(tokenId),
                        "}] }"
                    )
                )
            )
        );

        return string(abi.encodePacked("data:application/json;base64,", json));
    }

    function ownerOf(uint256 tokenId) external view virtual returns (address) {
        // Return the owner of the ENS node.
        // Get the node associated with the token.
        return ensRegistry.owner(_nodes[tokenId]);
    }

    function _mint(address to, bytes32 node) internal virtual {
        // Token ID maps to a node, so we can look up the owner.
        _nodes[++totalSupply] = node;
        // Increment the balance of the receiver.
        _balances[to] += 1;
        // Emit ERC721 Transfer event.
        emit Transfer(address(0), to, totalSupply);
    }

    function _exists(uint256 tokenId) internal view virtual returns (bool) {
        return tokenId <= totalSupply;
    }

    function supportsInterface(bytes4 interfaceId)
    public
    view
    virtual
    override
    returns (bool)
    {
        return interfaceId == type(IERC721).interfaceId ||
        interfaceId == type(IERC721Metadata).interfaceId ||
        interfaceId == type(IERC165).interfaceId;
    }

    function approve(address to, uint256 tokenId) external virtual override {
        revert UnsupportedAction();
    }

    function getApproved(uint256 tokenId)
    public
    view
    virtual
    override
    returns (address)
    {
        return address(0);
    }

    function setApprovalForAll(address operator, bool approved)
    external
    virtual
    override
    {
        revert UnsupportedAction();
    }

    function isApprovedForAll(address owner, address operator)
    public
    view
    virtual
    override
    returns (bool)
    {
        return false;
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external virtual override {
        revert UnsupportedAction();
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external virtual override {
        revert UnsupportedAction();
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes calldata data
    ) external virtual override {
        revert UnsupportedAction();
    }

    function balanceOf(address owner) external view returns (uint256 balance) {
        require(owner != address(0), "ERC721: address zero is not a valid owner");
        return _balances[owner];
    }
}


