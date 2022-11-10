/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISoulRegistrar } from "../ISoulRegistrar";

export class ISoulRegistrar__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISoulRegistrar {
    return new Contract(address, _abi, signerOrProvider) as ISoulRegistrar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "registerWithNFTOwnership",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "labels",
        type: "string[]",
      },
      {
        internalType: "bytes32[][]",
        name: "merkleProofs",
        type: "bytes32[][]",
      },
    ],
    name: "registerWithProof",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];
