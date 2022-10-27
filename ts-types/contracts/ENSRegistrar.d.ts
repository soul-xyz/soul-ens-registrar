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

interface ENSRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "changeLabelOwner(bytes32,string,address)": FunctionFragment;
    "changePermissionContract(address)": FunctionFragment;
    "changeRootNodeOwner(bytes32,address)": FunctionFragment;
    "ensRegistry()": FunctionFragment;
    "ensResolver()": FunctionFragment;
    "labelOwner(bytes32,string)": FunctionFragment;
    "originalOwner(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
    "permissionContract()": FunctionFragment;
    "register(bytes32,string,address)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "restoreOwner(bytes32)": FunctionFragment;
    "setSubdomainTransferable(bytes32,bool)": FunctionFragment;
    "storeCurrentOwner(bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferable(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "changeLabelOwner",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "changePermissionContract",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRootNodeOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ensRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ensResolver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "labelOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "originalOwner",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "permissionContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "restoreOwner",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setSubdomainTransferable",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "storeCurrentOwner",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferable",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "changeLabelOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changePermissionContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRootNodeOwner",
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
  decodeFunctionResult(functionFragment: "labelOwner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "originalOwner",
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
    functionFragment: "restoreOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSubdomainTransferable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "storeCurrentOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferable",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
    "PermissionContractChange(address,address)": EventFragment;
    "RegisteredENS(address,string)": EventFragment;
    "RootNodeOwnerChange(bytes32,address)": EventFragment;
    "TransferableUpdated(bytes32,bool)": EventFragment;
    "UpdatedENS(address,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PermissionContractChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RegisteredENS"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RootNodeOwnerChange"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferableUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedENS"): EventFragment;
}

export class ENSRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ENSRegistrarInterface;

  functions: {
    changeLabelOwner(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeLabelOwner(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    changeRootNodeOwner(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "changeRootNodeOwner(bytes32,address)"(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    ensRegistry(overrides?: CallOverrides): Promise<[string]>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<[string]>;

    ensResolver(overrides?: CallOverrides): Promise<[string]>;

    "ensResolver()"(overrides?: CallOverrides): Promise<[string]>;

    labelOwner(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "labelOwner(bytes32,string)"(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    originalOwner(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "originalOwner(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    permissionContract(overrides?: CallOverrides): Promise<[string]>;

    "permissionContract()"(overrides?: CallOverrides): Promise<[string]>;

    register(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "register(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    restoreOwner(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "restoreOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setSubdomainTransferable(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setSubdomainTransferable(bytes32,bool)"(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    storeCurrentOwner(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "storeCurrentOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferable(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "transferable(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  changeLabelOwner(
    rootNode_: BytesLike,
    label_: string,
    newOwner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeLabelOwner(bytes32,string,address)"(
    rootNode_: BytesLike,
    label_: string,
    newOwner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changePermissionContract(
    _newPermissionContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changePermissionContract(address)"(
    _newPermissionContract: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  changeRootNodeOwner(
    rootNode_: BytesLike,
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "changeRootNodeOwner(bytes32,address)"(
    rootNode_: BytesLike,
    _newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  ensRegistry(overrides?: CallOverrides): Promise<string>;

  "ensRegistry()"(overrides?: CallOverrides): Promise<string>;

  ensResolver(overrides?: CallOverrides): Promise<string>;

  "ensResolver()"(overrides?: CallOverrides): Promise<string>;

  labelOwner(
    rootNode_: BytesLike,
    label: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "labelOwner(bytes32,string)"(
    rootNode_: BytesLike,
    label: string,
    overrides?: CallOverrides
  ): Promise<string>;

  originalOwner(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  "originalOwner(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  permissionContract(overrides?: CallOverrides): Promise<string>;

  "permissionContract()"(overrides?: CallOverrides): Promise<string>;

  register(
    rootNode_: BytesLike,
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "register(bytes32,string,address)"(
    rootNode_: BytesLike,
    label_: string,
    owner_: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  restoreOwner(
    node: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "restoreOwner(bytes32)"(
    node: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setSubdomainTransferable(
    node: BytesLike,
    transferable_: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setSubdomainTransferable(bytes32,bool)"(
    node: BytesLike,
    transferable_: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  storeCurrentOwner(
    node: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "storeCurrentOwner(bytes32)"(
    node: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferable(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "transferable(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    changeLabelOwner(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeLabelOwner(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changePermissionContract(
      _newPermissionContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRootNodeOwner(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "changeRootNodeOwner(bytes32,address)"(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    ensRegistry(overrides?: CallOverrides): Promise<string>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<string>;

    ensResolver(overrides?: CallOverrides): Promise<string>;

    "ensResolver()"(overrides?: CallOverrides): Promise<string>;

    labelOwner(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "labelOwner(bytes32,string)"(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<string>;

    originalOwner(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    "originalOwner(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    permissionContract(overrides?: CallOverrides): Promise<string>;

    "permissionContract()"(overrides?: CallOverrides): Promise<string>;

    register(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "register(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    restoreOwner(node: BytesLike, overrides?: CallOverrides): Promise<void>;

    "restoreOwner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setSubdomainTransferable(
      node: BytesLike,
      transferable_: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setSubdomainTransferable(bytes32,bool)"(
      node: BytesLike,
      transferable_: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    storeCurrentOwner(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "storeCurrentOwner(bytes32)"(
      node: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferable(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "transferable(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    PermissionContractChange(
      permissionContract: null,
      _newPermissionContract: null
    ): EventFilter;

    RegisteredENS(_owner: string | null, _ens: null): EventFilter;

    RootNodeOwnerChange(
      node: BytesLike | null,
      owner: string | null
    ): EventFilter;

    TransferableUpdated(node: null, transferable: null): EventFilter;

    UpdatedENS(_owner: string | null, node: BytesLike | null): EventFilter;
  };

  estimateGas: {
    changeLabelOwner(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeLabelOwner(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    changeRootNodeOwner(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "changeRootNodeOwner(bytes32,address)"(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    ensRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<BigNumber>;

    ensResolver(overrides?: CallOverrides): Promise<BigNumber>;

    "ensResolver()"(overrides?: CallOverrides): Promise<BigNumber>;

    labelOwner(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "labelOwner(bytes32,string)"(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    originalOwner(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "originalOwner(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    permissionContract(overrides?: CallOverrides): Promise<BigNumber>;

    "permissionContract()"(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "register(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    restoreOwner(node: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    "restoreOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setSubdomainTransferable(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setSubdomainTransferable(bytes32,bool)"(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    storeCurrentOwner(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "storeCurrentOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferable(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "transferable(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    changeLabelOwner(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeLabelOwner(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      newOwner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changePermissionContract(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changePermissionContract(address)"(
      _newPermissionContract: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    changeRootNodeOwner(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "changeRootNodeOwner(bytes32,address)"(
      rootNode_: BytesLike,
      _newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    ensRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensRegistry()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ensResolver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ensResolver()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    labelOwner(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "labelOwner(bytes32,string)"(
      rootNode_: BytesLike,
      label: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    originalOwner(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "originalOwner(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permissionContract(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "permissionContract()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    register(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "register(bytes32,string,address)"(
      rootNode_: BytesLike,
      label_: string,
      owner_: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    restoreOwner(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "restoreOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setSubdomainTransferable(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setSubdomainTransferable(bytes32,bool)"(
      node: BytesLike,
      transferable_: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    storeCurrentOwner(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "storeCurrentOwner(bytes32)"(
      node: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferable(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "transferable(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
