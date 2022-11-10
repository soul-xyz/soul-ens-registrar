/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface ISoulRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])": FunctionFragment;
    "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "registerWithNFTOwnership",
    values: [string, BigNumberish, BytesLike, string, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWithProof",
    values: [BytesLike, BytesLike, string[], string[], BytesLike[][]]
  ): string;

  decodeFunctionResult(
    functionFragment: "registerWithNFTOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWithProof",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISoulRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ISoulRegistrarInterface;

  functions: {
    registerWithNFTOwnership(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    registerWithProof(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])"(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;
  };

  registerWithNFTOwnership(
    nftContract: string,
    tokenId: BigNumberish,
    rootNode: BytesLike,
    label: string,
    rootShard: BytesLike,
    merkleProof: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
    nftContract: string,
    tokenId: BigNumberish,
    rootNode: BytesLike,
    label: string,
    rootShard: BytesLike,
    merkleProof: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  registerWithProof(
    rootNode: BytesLike,
    rootShard: BytesLike,
    receivers: string[],
    labels: string[],
    merkleProofs: BytesLike[][],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])"(
    rootNode: BytesLike,
    rootShard: BytesLike,
    receivers: string[],
    labels: string[],
    merkleProofs: BytesLike[][],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  callStatic: {
    registerWithNFTOwnership(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerWithProof(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])"(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    registerWithNFTOwnership(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    registerWithProof(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])"(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    registerWithNFTOwnership(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract: string,
      tokenId: BigNumberish,
      rootNode: BytesLike,
      label: string,
      rootShard: BytesLike,
      merkleProof: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    registerWithProof(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "registerWithProof(bytes32,bytes32,address[],string[],bytes32[][])"(
      rootNode: BytesLike,
      rootShard: BytesLike,
      receivers: string[],
      labels: string[],
      merkleProofs: BytesLike[][],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;
  };
}
