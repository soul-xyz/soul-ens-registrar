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
  "0x608060405234801561001057600080fd5b5061116d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100be5760003560e01c80636352211e11610076578063a22cb4651161005b578063a22cb46514610185578063b88d4fde14610198578063e985e9c5146101ab57600080fd5b80636352211e1461015157806370a082311461016457600080fd5b8063095ea7b3116100a7578063095ea7b31461011657806323b872dd1461012b57806342842e0e1461013e57600080fd5b806301ffc9a7146100c3578063081812fc146100eb575b600080fd5b6100d66100d1366004610def565b6101e7565b60405190151581526020015b60405180910390f35b6100fe6100f9366004610e13565b6102cc565b6040516001600160a01b0390911681526020016100e2565b610129610124366004610e48565b610377565b005b610129610139366004610e72565b6104c7565b61012961014c366004610e72565b61054e565b6100fe61015f366004610e13565b610569565b610177610172366004610eae565b610574565b6040519081526020016100e2565b610129610193366004610ec9565b61060e565b6101296101a6366004610f34565b6106f1565b6100d66101b9366004611010565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd00000000000000000000000000000000000000000000000000000000148061027a57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806102c657507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6000818152602081905260408120546001600160a01b031661035b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061038282610703565b9050806001600160a01b0316836001600160a01b0316141561040c5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610352565b336001600160a01b038216148061044657506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6104b85760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610352565b6104c2838361078e565b505050565b6104d13382610814565b6105435760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610352565b6104c283838361091c565b6104c283838360405180602001604052806000815250610b05565b60006102c682610703565b60006001600160a01b0382166105f25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610352565b506001600160a01b031660009081526001602052604090205490565b6001600160a01b0382163314156106675760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610352565b3360008181526003602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6106fd84848484610b05565b50505050565b6000818152602081905260408120546001600160a01b0316806102c65760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610352565b600081815260026020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841690811790915581906107db82610703565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152602081905260408120546001600160a01b031661089e5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610352565b60006108a983610703565b9050806001600160a01b0316846001600160a01b031614806108e45750836001600160a01b03166108d9846102cc565b6001600160a01b0316145b8061091457506001600160a01b0380821660009081526003602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661092f82610703565b6001600160a01b0316146109ab5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610352565b6001600160a01b038216610a265760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610352565b610a3160008261078e565b6001600160a01b03831660009081526001602081905260408220805491929091610a5c908490611072565b90915550506001600160a01b03821660009081526001602081905260408220805491929091610a8c908490611089565b909155505060008181526020819052604080822080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610b0f3383610814565b610b815760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610352565b6106fd84848484610b9384848461091c565b610b9f84848484610c11565b6106fd5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610352565b60006001600160a01b0384163b15610db3576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a0290610c6e9033908990889088906004016110a1565b602060405180830381600087803b158015610c8857600080fd5b505af1925050508015610cb8575060408051601f3d908101601f19168201909252610cb59181019061111a565b60015b610d68573d808015610ce6576040519150601f19603f3d011682016040523d82523d6000602084013e610ceb565b606091505b508051610d605760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610352565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610914565b506001949350505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081168114610dec57600080fd5b50565b600060208284031215610e0157600080fd5b8135610e0c81610dbe565b9392505050565b600060208284031215610e2557600080fd5b5035919050565b80356001600160a01b0381168114610e4357600080fd5b919050565b60008060408385031215610e5b57600080fd5b610e6483610e2c565b946020939093013593505050565b600080600060608486031215610e8757600080fd5b610e9084610e2c565b9250610e9e60208501610e2c565b9150604084013590509250925092565b600060208284031215610ec057600080fd5b610e0c82610e2c565b60008060408385031215610edc57600080fd5b610ee583610e2c565b915060208301358015158114610efa57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60008060008060808587031215610f4a57600080fd5b610f5385610e2c565b9350610f6160208601610e2c565b925060408501359150606085013567ffffffffffffffff80821115610f8557600080fd5b818701915087601f830112610f9957600080fd5b813581811115610fab57610fab610f05565b604051601f8201601f19908116603f01168101908382118183101715610fd357610fd3610f05565b816040528281528a6020848701011115610fec57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561102357600080fd5b61102c83610e2c565b915061103a60208401610e2c565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561108457611084611043565b500390565b6000821982111561109c5761109c611043565b500190565b60006001600160a01b038087168352602081871681850152856040850152608060608501528451915081608085015260005b828110156110ef5785810182015185820160a0015281016110d3565b8281111561110157600060a084870101525b5050601f01601f19169190910160a00195945050505050565b60006020828403121561112c57600080fd5b8151610e0c81610dbe56fea2646970667358221220c763dead2799b59ea4595372573b832977d211004ec0408ab6313e24a7a2930c64736f6c63430008090033";
