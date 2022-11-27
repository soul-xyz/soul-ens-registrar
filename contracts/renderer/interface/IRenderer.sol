// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

interface IRenderer {
    function tokenURI(uint256 tokenId, bytes32 node) external view returns (string calldata);
}
