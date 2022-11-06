// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

interface ISoulRegistrar {
    function register(
        string memory rootName_,
        bytes32 rootNode_,
        string calldata label_,
        address owner_
    )
    external;

    function changePermissionContract(address _newPermissionContract) external;
}
