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
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SoulRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "changePermissionContract(address)": FunctionFragment;
    "ensRegistry()": FunctionFragment;
    "ensResolver()": FunctionFragment;
    "owner()": FunctionFragment;
    "permissionContract()": FunctionFragment;
    "register(string,bytes32,string,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changePermissionContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "ensRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ensResolver",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permissionContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "changePermissionContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensRegistry",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ensResolver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "permissionContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PermissionContractChanged(address,address)": EventFragment;
    "RegisteredSubdomain(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionContractChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisteredSubdomain"): EventFragment;
}

export class SoulRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SoulRegistrarInterface;

  functions: {
    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ensRegistry(overrides?: CallOverrides): Promise<[string]>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    ensResolver(overrides?: CallOverrides): Promise<[string]>;

    "ensResolver()"(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    permissionContract(overrides?: CallOverrides): Promise<[string]>;

    "permissionContract()"(overrides?: CallOverrides): Promise<[string]>;

    register(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(string,bytes32,string,address)"(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  changePermissionContract(
    _newPermissionContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changePermissionContract(address)"(
    _newPermissionContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ensRegistry(overrides?: CallOverrides): Promise<string>;

  "ensRegistry()"(overrides?: CallOverrides): Promise<string>;

  ensResolver(overrides?: CallOverrides): Promise<string>;

  "ensResolver()"(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  permissionContract(overrides?: CallOverrides): Promise<string>;

  "permissionContract()"(overrides?: CallOverrides): Promise<string>;

  register(
    rootName_: string,
    rootNode_: BytesLike,
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(string,bytes32,string,address)"(
    rootName_: string,
    rootNode_: BytesLike,
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    changePermissionContract(
      _newPermissionContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ensRegistry(overrides?: CallOverrides): Promise<string>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<string>;

    ensResolver(overrides?: CallOverrides): Promise<string>;

    "ensResolver()"(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    permissionContract(overrides?: CallOverrides): Promise<string>;

    "permissionContract()"(overrides?: CallOverrides): Promise<string>;

    register(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(string,bytes32,string,address)"(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PermissionContractChanged(
      permissionContract: null,
      _newPermissionContract: null
    ): EventFilter;

    RegisteredSubdomain(_owner: string | null, _ens: null): EventFilter;
  };

  estimateGas: {
    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ensRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    ensResolver(overrides?: CallOverrides): Promise<BigNumber>;

    "ensResolver()"(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    permissionContract(overrides?: CallOverrides): Promise<BigNumber>;

    "permissionContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(string,bytes32,string,address)"(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ensRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensResolver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permissionContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "permissionContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(string,bytes32,string,address)"(
      rootName_: string,
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
