// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {IENS} from "./ens/interfaces/IENS.sol";
import {IENSResolver} from "./ens/interfaces/IENSResolver.sol";
import {IENSRegistrar} from "./ens/interfaces/IENSRegistrar.sol";
import "./ens/interfaces/ISoulRegistrar.sol";

contract SoulRegistrar is ISoulRegistrar, Ownable {
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

    // ============ Events ============

    event PermissionContractChanged(address permissionContract, address _newPermissionContract);
    event RegisteredSubdomain(address indexed _owner, string _ens);

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
        ensRegistry = IENS(ensRegistry_);
        ensResolver = IENSResolver(ensResolver_);
    }

    // ============ Subdomain Management ============

    /**
     * @notice Assigns an ENS subdomain of the root node to a target address.
     * Can only be called by Permission Contract. Before calling this function,
     * the root node owner should already called setApprovalForAll on ENSRegistry,
     * to add this caller contract as the root node's authorised operator.
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
        onlyPermissionContract
    {
        bytes32 labelNode = keccak256(abi.encodePacked(label_));
        bytes32 node = keccak256(abi.encodePacked(rootNode_, labelNode));

        require(
            ensRegistry.owner(node) == address(0),
            "SoulRegistrar: label is already owned"
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

        emit RegisteredSubdomain(owner_, label_);
    }


    // ============ Admin Functions ============

    function changePermissionContract(address _newPermissionContract) external onlyOwner
    {
        permissionContract = _newPermissionContract;
        emit PermissionContractChanged(permissionContract, _newPermissionContract);
    }
}
