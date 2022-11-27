/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IRenderer } from "../IRenderer";

export class IRenderer__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRenderer {
    return new Contract(address, _abi, signerOrProvider) as IRenderer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
