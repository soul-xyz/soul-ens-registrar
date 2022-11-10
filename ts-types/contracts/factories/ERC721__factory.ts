/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ERC721> {
    return super.deploy(overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061114f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80636352211e11610076578063a22cb4651161005b578063a22cb46514610185578063b88d4fde14610198578063e985e9c5146101ab57600080fd5b80636352211e1461015157806370a082311461016457600080fd5b8063095ea7b3116100a7578063095ea7b31461011657806323b872dd1461012b57806342842e0e1461013e57600080fd5b806301ffc9a7146100c3578063081812fc146100eb575b600080fd5b6100d66100d1366004610de1565b6101e7565b60405190151581526020015b60405180910390f35b6100fe6100f9366004610e05565b6102cc565b6040516001600160a01b0390911681526020016100e2565b610129610124366004610e3a565b610377565b005b610129610139366004610e64565b6104c6565b61012961014c366004610e64565b61054d565b6100fe61015f366004610e05565b610568565b610177610172366004610ea0565b610573565b6040519081526020016100e2565b610129610193366004610ebb565b61060d565b6101296101a6366004610f26565b6106ef565b6100d66101b9366004611002565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061027a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102c657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000818152602081905260408120546001600160a01b031661035b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061038282610701565b9050806001600160a01b0316836001600160a01b03160361040b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610352565b336001600160a01b038216148061044557506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6104b75760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610352565b6104c1838361078c565b505050565b6104d03382610812565b6105425760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610352565b6104c183838361091a565b6104c183838360405180602001604052806000815250610b03565b60006102c682610701565b60006001600160a01b0382166105f15760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610352565b506001600160a01b031660009081526001602052604090205490565b336001600160a01b038316036106655760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610352565b3360008181526003602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106fb84848484610b03565b50505050565b6000818152602081905260408120546001600160a01b0316806102c65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610352565b600081815260026020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841690811790915581906107d982610701565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152602081905260408120546001600160a01b031661089c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610352565b60006108a783610701565b9050806001600160a01b0316846001600160a01b031614806108e25750836001600160a01b03166108d7846102cc565b6001600160a01b0316145b8061091257506001600160a01b0380821660009081526003602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661092d82610701565b6001600160a01b0316146109a95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610352565b6001600160a01b038216610a245760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610352565b610a2f60008261078c565b6001600160a01b03831660009081526001602081905260408220805491929091610a5a908490611064565b90915550506001600160a01b03821660009081526001602081905260408220805491929091610a8a908490611077565b909155505060008181526020819052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b0d3383610812565b610b7f5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610352565b6106fb84848484610b9184848461091a565b610b9d84848484610c0f565b6106fb5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610352565b60006001600160a01b0384163b15610da5576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290610c6c90339089908890889060040161108a565b6020604051808303816000875af1925050508015610ca7575060408051601f3d908101601f19168201909252610ca4918101906110fc565b60015b610d5a573d808015610cd5576040519150601f19603f3d011682016040523d82523d6000602084013e610cda565b606091505b508051600003610d525760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610352565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610912565b506001949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610dde57600080fd5b50565b600060208284031215610df357600080fd5b8135610dfe81610db0565b9392505050565b600060208284031215610e1757600080fd5b5035919050565b80356001600160a01b0381168114610e3557600080fd5b919050565b60008060408385031215610e4d57600080fd5b610e5683610e1e565b946020939093013593505050565b600080600060608486031215610e7957600080fd5b610e8284610e1e565b9250610e9060208501610e1e565b9150604084013590509250925092565b600060208284031215610eb257600080fd5b610dfe82610e1e565b60008060408385031215610ece57600080fd5b610ed783610e1e565b915060208301358015158114610eec57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215610f3c57600080fd5b610f4585610e1e565b9350610f5360208601610e1e565b925060408501359150606085013567ffffffffffffffff80821115610f7757600080fd5b818701915087601f830112610f8b57600080fd5b813581811115610f9d57610f9d610ef7565b604051601f8201601f19908116603f01168101908382118183101715610fc557610fc5610ef7565b816040528281528a6020848701011115610fde57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561101557600080fd5b61101e83610e1e565b915061102c60208401610e1e565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156102c6576102c6611035565b808201808211156102c6576102c6611035565b60006001600160a01b038087168352602081871681850152856040850152608060608501528451915081608085015260005b828110156110d85785810182015185820160a0015281016110bc565b5050600060a0828501015260a0601f19601f83011684010191505095945050505050565b60006020828403121561110e57600080fd5b8151610dfe81610db056fea26469706673582212206609cdad9cff588ffcc43103215f625905603dcbcbf27f25ce48ee696dedda3364736f6c63430008110033";
