// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IENS} from "./interfaces/IENS.sol";
import {IENSResolver} from "./interfaces/IENSResolver.sol";
import {IENSRegistrar} from "./interfaces/IENSRegistrar.sol";

contract ENSRegistrar is IENSRegistrar, Ownable {
    // ============ Immutable Storage ============

    /**
     * The address of the public ENS registry.
     * @dev Dependency-injectable for testing purposes, but otherwise this is the
     * canonical ENS registry at 0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e.
     */
    IENS public immutable ensRegistry;

    /**
     * The address of the ENSResolver.
     */
    IENSResolver public immutable ensResolver;

    // ============ Mutable Storage ============

    /**
     * The address of the Permission Contract that gates access to this namespace.
     */
    address public permissionContract;

    mapping(bytes32 => address) public originalOwner;

    // ============ Events ============

    event PermissionContractChange(address permissionContract, address _newPermissionContract);
    event RootNodeOwnerChange(bytes32 indexed node, address indexed owner);
    event RegisteredENS(address indexed _owner, string _ens);
    event UpdatedENS(address indexed _owner, bytes32 indexed node);

    // ============ Modifiers ============

    /**
     * @dev Modifier to check whether the `msg.sender` is the Permission Contract.
     * If it is, it will run the function. Otherwise, it will revert.
     */
    modifier onlyPermissionContract() {
        require(
            msg.sender == permissionContract,
            "ENSRegistrar: caller is not the Permission Contract"
        );
        _;
    }

    // ============ Constructor ============

    /**
     * @notice Constructor that sets the ENS root name and root node to manage.
     * @param ensRegistry_ The address of the ENS registry
     * @param ensResolver_ The address of the ENS resolver
     * @param permissionContract_ The address of the Permission Contract
     */
    constructor(
        address ensRegistry_,
        address ensResolver_,
        address permissionContract_
    ) public {
        permissionContract = permissionContract_;

        // Registrations are cheaper if these are instantiated.
        ensRegistry = IENS(ensRegistry_);
        ensResolver = IENSResolver(ensResolver_);
    }

    // Stores the current owner of a node so that it can be restored later.
    // Allows retrieving ownership over the ENS domain after transfer.
    function storeCurrentOwner(bytes32 node) external {
        originalOwner[node] = ensRegistry.owner(node);
    }

    // Restores ownership to the original owner as specified by `storeCurrentOwner`.
    function restoreOwner(bytes32 node) external {
        require(msg.sender == originalOwner[node], "can only be called by original owner");
        ensRegistry.setOwner(node, originalOwner[node]);
    }

    // ============ Registration ============

    /**
     * @notice Assigns an ENS subdomain of the root node to a target address.
     * Registers both the forward. Can only be called by writeToken.
     * @param rootName_ The root name (e.g. 9dcc.eth).
     * @param rootNode_ The node of the root name (e.g. namehash(9dcc.eth)).
     * @param label_ The subdomain label.
     * @param owner_ The owner of the subdomain.
     */

    function register(
        string memory rootName_,
        bytes32 rootNode_,
        string calldata label_,
        address owner_
    )
        external
        override
        onlyPermissionContract
    {
        bytes32 labelNode = keccak256(abi.encodePacked(label_));
        bytes32 node = keccak256(abi.encodePacked(rootNode_, labelNode));

        require(
            ensRegistry.owner(node) == address(0),
            "ENSRegistrar: label is already owned"
        );

        // Forward ENS
        ensRegistry.setSubnodeRecord(
            rootNode_,
            labelNode,
            owner_,
            address(ensResolver),
            0
        );
        ensResolver.setAddr(node, owner_);

        emit RegisteredENS(owner_, label_);
    }

    // ============ ENS Management ============

    /**
     * @notice This function must be called when the ENSRegistrar contract is replaced
     * and the address of the new ENSRegistrar should be provided.
     * @param rootNode_ The node of the root name (e.g. namehash(9dcc.eth)).
     * @param _newOwner The address of the new ENS Registrar that will manage the root node.
     */
    function changeRootNodeOwner(bytes32 rootNode_, address _newOwner)
        external
        override
        onlyOwner
    {
        ensRegistry.setOwner(rootNode_, _newOwner);
        emit RootNodeOwnerChange(rootNode_, _newOwner);
    }

    function changePermissionContract(address _newPermissionContract)
    external
    override
    onlyOwner
    {
        emit PermissionContractChange(permissionContract, _newPermissionContract);
        permissionContract = _newPermissionContract;
    }

    // ============ ENS Subnode Management ============

    function labelOwner(bytes32 rootNode_, string calldata label)
        external
        view
        override
        returns (address)
    {
        bytes32 labelNode = keccak256(abi.encodePacked(label));
        bytes32 node = keccak256(abi.encodePacked(rootNode_, labelNode));

        return ensRegistry.owner(node);
    }

    function changeLabelOwner(bytes32 rootNode_, string calldata label_, address newOwner_)
        external
        override
    {
        bytes32 labelNode = keccak256(abi.encodePacked(label_));
        bytes32 node = keccak256(abi.encodePacked(rootNode_, labelNode));

        require(
            ensRegistry.owner(node) == msg.sender,
            "ENSRegistrar: sender does not own label"
        );

        // Forward ENS
        ensRegistry.setSubnodeRecord(
            rootNode_,
            labelNode,
            newOwner_,
            address(ensResolver),
            0
        );
        ensResolver.setAddr(node, newOwner_);

        emit UpdatedENS(
            newOwner_,
            rootNode_
        );
    }
}
