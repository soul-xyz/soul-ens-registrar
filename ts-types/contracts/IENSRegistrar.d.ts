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

interface IENSRegistrarInterface extends ethers.utils.Interface {
  functions: {
    "changeLabelOwner(bytes32,string,address)": FunctionFragment;
    "changePermissionContract(address)": FunctionFragment;
    "changeRootNodeOwner(bytes32,address)": FunctionFragment;
    "labelOwner(bytes32,string)": FunctionFragment;
    "register(string,bytes32,string,address)": FunctionFragment;
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
    functionFragment: "labelOwner",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, BytesLike, string, string]
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
  decodeFunctionResult(functionFragment: "labelOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;

  events: {};
}

export class IENSRegistrar extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IENSRegistrarInterface;

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
  };

  filters: {};

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
  };
}
