/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ENSResolver } from "../ENSResolver";

export class ENSResolver__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ENSResolver> {
    return super.deploy(overrides || {}) as Promise<ENSResolver>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ENSResolver {
    return super.attach(address) as ENSResolver;
  }
  connect(signer: Signer): ENSResolver__factory {
    return super.connect(signer) as ENSResolver__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSResolver {
    return new Contract(address, _abi, signerOrProvider) as ENSResolver;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "AddrChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "NameChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
    ],
    name: "addr",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
    ],
    name: "name",
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
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "setAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_node",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6109718061007e6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063773722131161005b578063773722131461013a5780638da5cb5b1461014d578063d5fa2b001461016b578063f2fde38b1461017e57600080fd5b806301ffc9a71461008d5780633b3b57de146100b5578063691f343114610110578063715018a614610130575b600080fd5b6100a061009b3660046105cf565b610191565b60405190151581526020015b60405180910390f35b6100eb6100c3366004610618565b60009081526001602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100ac565b61012361011e366004610618565b610276565b6040516100ac9190610631565b61013861031e565b005b6101386101483660046106ae565b610332565b60005473ffffffffffffffffffffffffffffffffffffffff166100eb565b610138610179366004610792565b610393565b61013861018c3660046107be565b61041d565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a700000000000000000000000000000000000000000000000000000000148061022457507fffffffff0000000000000000000000000000000000000000000000000000000082167f3b3b57de00000000000000000000000000000000000000000000000000000000145b8061027057507fffffffff0000000000000000000000000000000000000000000000000000000082167f691f343100000000000000000000000000000000000000000000000000000000145b92915050565b6060600160008381526020019081526020016000206001018054610299906107d9565b80601f01602080910402602001604051908101604052809291908181526020018280546102c5906107d9565b80156103125780601f106102e757610100808354040283529160200191610312565b820191906000526020600020905b8154815290600101906020018083116102f557829003601f168201915b50505050509050919050565b6103266104d9565b610330600061055a565b565b61033a6104d9565b600082815260016020819052604090912001610356828261087b565b50817fb7d29e911041e8d9b843369e890bcb72c9388692ba48b65ac54e7214c4c348f7826040516103879190610631565b60405180910390a25050565b61039b6104d9565b60008281526001602090815260409182902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516908117909155915191825283917f52d7d861f09ab3d26239d492e8968629f95e9e318cf0b73bfddc441522a15fd29101610387565b6104256104d9565b73ffffffffffffffffffffffffffffffffffffffff81166104cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f646472657373000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6104d68161055a565b50565b60005473ffffffffffffffffffffffffffffffffffffffff163314610330576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104c4565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156105e157600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461061157600080fd5b9392505050565b60006020828403121561062a57600080fd5b5035919050565b600060208083528351808285015260005b8181101561065e57858101830151858201604001528201610642565b506000604082860101526040601f19601f8301168501019250505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156106c157600080fd5b82359150602083013567ffffffffffffffff808211156106e057600080fd5b818501915085601f8301126106f457600080fd5b8135818111156107065761070661067f565b604051601f8201601f19908116603f0116810190838211818310171561072e5761072e61067f565b8160405282815288602084870101111561074757600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461078d57600080fd5b919050565b600080604083850312156107a557600080fd5b823591506107b560208401610769565b90509250929050565b6000602082840312156107d057600080fd5b61061182610769565b600181811c908216806107ed57607f821691505b602082108103610826577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561087657600081815260208120601f850160051c810160208610156108535750805b601f850160051c820191505b818110156108725782815560010161085f565b5050505b505050565b815167ffffffffffffffff8111156108955761089561067f565b6108a9816108a384546107d9565b8461082c565b602080601f8311600181146108de57600084156108c65750858301515b600019600386901b1c1916600185901b178555610872565b600085815260208120601f198616915b8281101561090d578886015182559484019460019091019084016108ee565b508582101561092b5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122033623e50e187a9b698c8cb1aa049f59bc7d2c6f22cb24da5e3fb00f66b58331964736f6c63430008110033";
