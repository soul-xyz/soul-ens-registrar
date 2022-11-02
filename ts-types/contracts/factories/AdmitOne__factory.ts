/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { AdmitOne } from "../AdmitOne";

export class AdmitOne__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(owner_: string, overrides?: Overrides): Promise<AdmitOne> {
    return super.deploy(owner_, overrides || {}) as Promise<AdmitOne>;
  }
  getDeployTransaction(
    owner_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(owner_, overrides || {});
  }
  attach(address: string): AdmitOne {
    return super.attach(address) as AdmitOne;
  }
  connect(signer: Signer): AdmitOne__factory {
    return super.connect(signer) as AdmitOne__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdmitOne {
    return new Contract(address, _abi, signerOrProvider) as AdmitOne;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "isNextOwner",
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
    inputs: [],
    name: "isOwner",
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
    inputs: [],
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
    name: "ownerMint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "renounceOwnership",
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
    inputs: [],
    name: "symbol",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "nextOwner_",
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
  "0x60806040523480156200001157600080fd5b5060405162001a2138038062001a21833981016040819052620000349162000199565b806200004081620000a7565b506040805180820190915260098082526841646d6974204f6e6560b81b60209092019182526200007391600691620000f3565b5060408051808201909152600280825261413160f01b60209092019182526200009f91600791620000f3565b505062000208565b600480546001600160a01b0319166001600160a01b0383169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350565b8280546200010190620001cb565b90600052602060002090601f01602090048101928262000125576000855562000170565b82601f106200014057805160ff191683800117855562000170565b8280016001018555821562000170579182015b828111156200017057825182559160200191906001019062000153565b506200017e92915062000182565b5090565b5b808211156200017e576000815560010162000183565b600060208284031215620001ac57600080fd5b81516001600160a01b0381168114620001c457600080fd5b9392505050565b600181811c90821680620001e057607f821691505b602082108114156200020257634e487b7160e01b600052602260045260246000fd5b50919050565b61180980620002186000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063715018a6116100cd578063a22cb46511610081578063e985e9c511610066578063e985e9c5146102c7578063ed459df214610303578063f2fde38b1461031657600080fd5b8063a22cb465146102a1578063b88d4fde146102b457600080fd5b80638da5cb5b116100b25780638da5cb5b146102735780638f32d59b1461028657806395d89b411461029957600080fd5b8063715018a61461026357806379ba50971461026b57600080fd5b806323b872dd11610124578063484b973c11610109578063484b973c1461021c5780636352211e1461022f57806370a082311461024257600080fd5b806323b872dd146101f657806342842e0e1461020957600080fd5b8063081812fc11610155578063081812fc146101ae578063095ea7b3146101d957806323452b9c146101ee57600080fd5b806301ffc9a71461017157806306fdde0314610199575b600080fd5b61018461017f36600461145f565b610329565b60405190151581526020015b60405180910390f35b6101a161040e565b60405161019091906114d0565b6101c16101bc3660046114e3565b61049c565b6040516001600160a01b039091168152602001610190565b6101ec6101e7366004611518565b610547565b005b6101ec610697565b6101ec610204366004611542565b610710565b6101ec610217366004611542565b610797565b6101ec61022a366004611518565b6107b2565b6101c161023d3660046114e3565b61081a565b61025561025036600461157e565b610825565b604051908152602001610190565b6101ec6108bf565b6101ec610923565b6004546101c1906001600160a01b031681565b6004546001600160a01b03163314610184565b6101a16109fb565b6101ec6102af366004611599565b610a08565b6101ec6102c23660046115eb565b610aeb565b6101846102d53660046116c7565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b6005546001600160a01b03163314610184565b6101ec61032436600461157e565b610afd565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806103bc57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061040857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6006805461041b906116fa565b80601f0160208091040260200160405190810160405280929190818152602001828054610447906116fa565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b505050505081565b6000818152602081905260408120546001600160a01b031661052b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061055282610bdc565b9050806001600160a01b0316836001600160a01b031614156105dc5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610522565b336001600160a01b038216148061061657506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6106885760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610522565b6106928383610c67565b505050565b6004546001600160a01b031633146106f15760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19169055565b61071a3382610ce2565b61078c5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610522565b610692838383610dea565b61069283838360405180602001604052806000815250610fc8565b6004546001600160a01b0316331461080c5760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6108168282611050565b5050565b600061040882610bdc565b60006001600160a01b0382166108a35760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610522565b506001600160a01b031660009081526001602052604090205490565b6004546001600160a01b031633146109195760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6109216111a1565b565b6005546001600160a01b031633146109a35760405162461bcd60e51b815260206004820152602c60248201527f63757272656e74206f776e6572206d757374207365742063616c6c657220617360448201527f206e657874206f776e65722e00000000000000000000000000000000000000006064820152608401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19908116909155600480543392168217905560405181907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3565b6007805461041b906116fa565b6001600160a01b038216331415610a615760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610522565b3360008181526003602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610af784848484610fc8565b50505050565b6004546001600160a01b03163314610b575760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6001600160a01b038116610bad5760405162461bcd60e51b815260206004820152601f60248201527f4e657874206f776e657220697320746865207a65726f20616464726573732e006044820152606401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000818152602081905260408120546001600160a01b0316806104085760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610522565b6000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610ca982610bdc565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152602081905260408120546001600160a01b0316610d6c5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610522565b6000610d7783610bdc565b9050806001600160a01b0316846001600160a01b03161480610db25750836001600160a01b0316610da78461049c565b6001600160a01b0316145b80610de257506001600160a01b0380821660009081526003602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610dfd82610bdc565b6001600160a01b031614610e795760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610522565b6001600160a01b038216610ef45760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610522565b610eff600082610c67565b6001600160a01b03831660009081526001602081905260408220805491929091610f2a90849061174b565b90915550506001600160a01b03821660009081526001602081905260408220805491929091610f5a908490611762565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610fd23383610ce2565b6110445760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610522565b610af7848484846111f8565b6001600160a01b0382166110a65760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610522565b6000818152602081905260409020546001600160a01b03161561110b5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610522565b6001600160a01b03821660009081526001602081905260408220805491929091611136908490611762565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6004546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36004805473ffffffffffffffffffffffffffffffffffffffff19169055565b611203848484610dea565b61120f84848484611281565b610af75760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610522565b60006001600160a01b0384163b15611423576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a02906112de90339089908890889060040161177a565b602060405180830381600087803b1580156112f857600080fd5b505af1925050508015611328575060408051601f3d908101601f19168201909252611325918101906117b6565b60015b6113d8573d808015611356576040519150601f19603f3d011682016040523d82523d6000602084013e61135b565b606091505b5080516113d05760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610522565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610de2565b506001949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461145c57600080fd5b50565b60006020828403121561147157600080fd5b813561147c8161142e565b9392505050565b6000815180845260005b818110156114a95760208185018101518683018201520161148d565b818111156114bb576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061147c6020830184611483565b6000602082840312156114f557600080fd5b5035919050565b80356001600160a01b038116811461151357600080fd5b919050565b6000806040838503121561152b57600080fd5b611534836114fc565b946020939093013593505050565b60008060006060848603121561155757600080fd5b611560846114fc565b925061156e602085016114fc565b9150604084013590509250925092565b60006020828403121561159057600080fd5b61147c826114fc565b600080604083850312156115ac57600080fd5b6115b5836114fc565b9150602083013580151581146115ca57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561160157600080fd5b61160a856114fc565b9350611618602086016114fc565b925060408501359150606085013567ffffffffffffffff8082111561163c57600080fd5b818701915087601f83011261165057600080fd5b813581811115611662576116626115d5565b604051601f8201601f19908116603f0116810190838211818310171561168a5761168a6115d5565b816040528281528a60208487010111156116a357600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156116da57600080fd5b6116e3836114fc565b91506116f1602084016114fc565b90509250929050565b600181811c9082168061170e57607f821691505b6020821081141561172f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561175d5761175d611735565b500390565b6000821982111561177557611775611735565b500190565b60006001600160a01b038087168352808616602084015250836040830152608060608301526117ac6080830184611483565b9695505050505050565b6000602082840312156117c857600080fd5b815161147c8161142e56fea26469706673582212204a3a4a21661ba468ec873af914497836c376daf915af4939c2349782041f4e5964736f6c63430008090033";