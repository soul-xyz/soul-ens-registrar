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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PermissionContractInterface extends ethers.utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "cancelOwnershipTransfer()": FunctionFragment;
    "commissionBips()": FunctionFragment;
    "ensRegistrar()": FunctionFragment;
    "feeConfigs(bytes32)": FunctionFragment;
    "getMerkleRoot(bytes32)": FunctionFragment;
    "isNextOwner()": FunctionFragment;
    "isOwner()": FunctionFragment;
    "isRootProvider()": FunctionFragment;
    "merkleRoots(bytes32)": FunctionFragment;
    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])": FunctionFragment;
    "registerWithProof(address,bytes32,string,bytes32,bytes32[])": FunctionFragment;
    "registrable()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setCommissionBips(uint256)": FunctionFragment;
    "setENSRegistrar(address)": FunctionFragment;
    "setMerkleRoot(bytes32,bytes32)": FunctionFragment;
    "setRegistrable(bool)": FunctionFragment;
    "setRegistrationFee(bytes32,tuple)": FunctionFragment;
    "transferFunds(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cancelOwnershipTransfer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commissionBips",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ensRegistrar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeConfigs",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMerkleRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isNextOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "isOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isRootProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoots",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWithNFTOwnership",
    values: [string, BigNumberish, BytesLike, string, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registerWithProof",
    values: [string, BytesLike, string, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "registrable",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCommissionBips",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setENSRegistrar",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setMerkleRoot",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegistrable",
    values: [boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegistrationFee",
    values: [BytesLike, { recipient: string; fee: BigNumberish }]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFunds",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelOwnershipTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "commissionBips",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeConfigs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isNextOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isRootProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "merkleRoots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWithNFTOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerWithProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registrable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCommissionBips",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setENSRegistrar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMerkleRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistrable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegistrationFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFunds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "CommissionBipsUpdated(uint256)": EventFragment;
    "FeeUpdated(bytes32,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Registered(string,address)": EventFragment;
    "RootUpdated(bytes32,bytes32,bytes32)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CommissionBipsUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class PermissionContract extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PermissionContractInterface;

  functions: {
    acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    cancelOwnershipTransfer(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancelOwnershipTransfer()"(
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    commissionBips(overrides?: CallOverrides): Promise<[BigNumber]>;

    "commissionBips()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    ensRegistrar(overrides?: CallOverrides): Promise<[string]>;

    "ensRegistrar()"(overrides?: CallOverrides): Promise<[string]>;

    feeConfigs(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

    "feeConfigs(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

    getMerkleRoot(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getMerkleRoot(bytes32)"(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isNextOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isNextOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    "isOwner()"(overrides?: CallOverrides): Promise<[boolean]>;

    isRootProvider(overrides?: CallOverrides): Promise<[boolean]>;

    "isRootProvider()"(overrides?: CallOverrides): Promise<[boolean]>;

    merkleRoots(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "merkleRoots(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    registerWithNFTOwnership(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    registerWithProof(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "registerWithProof(address,bytes32,string,bytes32,bytes32[])"(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    registrable(overrides?: CallOverrides): Promise<[boolean]>;

    "registrable()"(overrides?: CallOverrides): Promise<[boolean]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setCommissionBips(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setCommissionBips(uint256)"(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setENSRegistrar(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setENSRegistrar(address)"(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setMerkleRoot(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setMerkleRoot(bytes32,bytes32)"(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRegistrable(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRegistrable(bool)"(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRegistrationFee(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setRegistrationFee(bytes32,(address,uint256))"(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferFunds(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferFunds(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "acceptOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  cancelOwnershipTransfer(overrides?: Overrides): Promise<ContractTransaction>;

  "cancelOwnershipTransfer()"(
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  commissionBips(overrides?: CallOverrides): Promise<BigNumber>;

  "commissionBips()"(overrides?: CallOverrides): Promise<BigNumber>;

  ensRegistrar(overrides?: CallOverrides): Promise<string>;

  "ensRegistrar()"(overrides?: CallOverrides): Promise<string>;

  feeConfigs(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

  "feeConfigs(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

  getMerkleRoot(shard: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getMerkleRoot(bytes32)"(
    shard: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  isNextOwner(overrides?: CallOverrides): Promise<boolean>;

  "isNextOwner()"(overrides?: CallOverrides): Promise<boolean>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

  isRootProvider(overrides?: CallOverrides): Promise<boolean>;

  "isRootProvider()"(overrides?: CallOverrides): Promise<boolean>;

  merkleRoots(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "merkleRoots(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  registerWithNFTOwnership(
    nftContract_: string,
    tokenId: BigNumberish,
    rootNode_: BytesLike,
    label_: string,
    rootShard_: BytesLike,
    merkleProof_: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
    nftContract_: string,
    tokenId: BigNumberish,
    rootNode_: BytesLike,
    label_: string,
    rootShard_: BytesLike,
    merkleProof_: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  registerWithProof(
    owner_: string,
    rootNode_: BytesLike,
    label_: string,
    rootShard_: BytesLike,
    merkleProof_: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "registerWithProof(address,bytes32,string,bytes32,bytes32[])"(
    owner_: string,
    rootNode_: BytesLike,
    label_: string,
    rootShard_: BytesLike,
    merkleProof_: BytesLike[],
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  registrable(overrides?: CallOverrides): Promise<boolean>;

  "registrable()"(overrides?: CallOverrides): Promise<boolean>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setCommissionBips(
    newBips: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setCommissionBips(uint256)"(
    newBips: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setENSRegistrar(
    ensRegistrar_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setENSRegistrar(address)"(
    ensRegistrar_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setMerkleRoot(
    rootShard: BytesLike,
    merkleRoot_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setMerkleRoot(bytes32,bytes32)"(
    rootShard: BytesLike,
    merkleRoot_: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRegistrable(
    registrable_: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRegistrable(bool)"(
    registrable_: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRegistrationFee(
    rootNode: BytesLike,
    feeConfig: { recipient: string; fee: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setRegistrationFee(bytes32,(address,uint256))"(
    rootNode: BytesLike,
    feeConfig: { recipient: string; fee: BigNumberish },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferFunds(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferFunds(address,uint256)"(
    to: string,
    value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    nextOwner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    nextOwner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    "acceptOwnership()"(overrides?: CallOverrides): Promise<void>;

    cancelOwnershipTransfer(overrides?: CallOverrides): Promise<void>;

    "cancelOwnershipTransfer()"(overrides?: CallOverrides): Promise<void>;

    commissionBips(overrides?: CallOverrides): Promise<BigNumber>;

    "commissionBips()"(overrides?: CallOverrides): Promise<BigNumber>;

    ensRegistrar(overrides?: CallOverrides): Promise<string>;

    "ensRegistrar()"(overrides?: CallOverrides): Promise<string>;

    feeConfigs(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

    "feeConfigs(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { recipient: string; fee: BigNumber }>;

    getMerkleRoot(shard: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getMerkleRoot(bytes32)"(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    isNextOwner(overrides?: CallOverrides): Promise<boolean>;

    "isNextOwner()"(overrides?: CallOverrides): Promise<boolean>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    "isOwner()"(overrides?: CallOverrides): Promise<boolean>;

    isRootProvider(overrides?: CallOverrides): Promise<boolean>;

    "isRootProvider()"(overrides?: CallOverrides): Promise<boolean>;

    merkleRoots(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "merkleRoots(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    registerWithNFTOwnership(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    registerWithProof(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "registerWithProof(address,bytes32,string,bytes32,bytes32[])"(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    registrable(overrides?: CallOverrides): Promise<boolean>;

    "registrable()"(overrides?: CallOverrides): Promise<boolean>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setCommissionBips(
      newBips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setCommissionBips(uint256)"(
      newBips: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setENSRegistrar(
      ensRegistrar_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setENSRegistrar(address)"(
      ensRegistrar_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setMerkleRoot(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "setMerkleRoot(bytes32,bytes32)"(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistrable(
      registrable_: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setRegistrable(bool)"(
      registrable_: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setRegistrationFee(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    "setRegistrationFee(bytes32,(address,uint256))"(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: CallOverrides
    ): Promise<void>;

    transferFunds(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferFunds(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      nextOwner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      nextOwner_: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    CommissionBipsUpdated(newBips: null): EventFilter;

    FeeUpdated(rootNode: null, newFee: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Registered(label: null, owner: null): EventFilter;

    RootUpdated(rootShard: null, oldRoot: null, newRoot: null): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimateGas: {
    acceptOwnership(overrides?: Overrides): Promise<BigNumber>;

    "acceptOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    cancelOwnershipTransfer(overrides?: Overrides): Promise<BigNumber>;

    "cancelOwnershipTransfer()"(overrides?: Overrides): Promise<BigNumber>;

    commissionBips(overrides?: CallOverrides): Promise<BigNumber>;

    "commissionBips()"(overrides?: CallOverrides): Promise<BigNumber>;

    ensRegistrar(overrides?: CallOverrides): Promise<BigNumber>;

    "ensRegistrar()"(overrides?: CallOverrides): Promise<BigNumber>;

    feeConfigs(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "feeConfigs(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getMerkleRoot(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getMerkleRoot(bytes32)"(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isNextOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isNextOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "isOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    isRootProvider(overrides?: CallOverrides): Promise<BigNumber>;

    "isRootProvider()"(overrides?: CallOverrides): Promise<BigNumber>;

    merkleRoots(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoots(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    registerWithNFTOwnership(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    registerWithProof(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "registerWithProof(address,bytes32,string,bytes32,bytes32[])"(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    registrable(overrides?: CallOverrides): Promise<BigNumber>;

    "registrable()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setCommissionBips(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setCommissionBips(uint256)"(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setENSRegistrar(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setENSRegistrar(address)"(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setMerkleRoot(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setMerkleRoot(bytes32,bytes32)"(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRegistrable(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRegistrable(bool)"(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRegistrationFee(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setRegistrationFee(bytes32,(address,uint256))"(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferFunds(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferFunds(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "acceptOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    cancelOwnershipTransfer(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancelOwnershipTransfer()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    commissionBips(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "commissionBips()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ensRegistrar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensRegistrar()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeConfigs(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "feeConfigs(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMerkleRoot(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getMerkleRoot(bytes32)"(
      shard: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isNextOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isNextOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isRootProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isRootProvider()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoots(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "merkleRoots(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerWithNFTOwnership(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "registerWithNFTOwnership(address,uint256,bytes32,string,bytes32,bytes32[])"(
      nftContract_: string,
      tokenId: BigNumberish,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    registerWithProof(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "registerWithProof(address,bytes32,string,bytes32,bytes32[])"(
      owner_: string,
      rootNode_: BytesLike,
      label_: string,
      rootShard_: BytesLike,
      merkleProof_: BytesLike[],
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    registrable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "registrable()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setCommissionBips(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setCommissionBips(uint256)"(
      newBips: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setENSRegistrar(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setENSRegistrar(address)"(
      ensRegistrar_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setMerkleRoot(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setMerkleRoot(bytes32,bytes32)"(
      rootShard: BytesLike,
      merkleRoot_: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRegistrable(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRegistrable(bool)"(
      registrable_: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRegistrationFee(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setRegistrationFee(bytes32,(address,uint256))"(
      rootNode: BytesLike,
      feeConfig: { recipient: string; fee: BigNumberish },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferFunds(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferFunds(address,uint256)"(
      to: string,
      value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      nextOwner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
