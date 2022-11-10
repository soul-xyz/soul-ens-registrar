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
  "0x60806040523480156200001157600080fd5b5060405162001a8a38038062001a8a8339810160408190526200003491620000ed565b806200004081620000a1565b5060408051808201909152600981526841646d6974204f6e6560b81b6020820152600690620000709082620001c4565b50604080518082019091526002815261413160f01b6020820152600790620000999082620001c4565b505062000290565b600480546001600160a01b0319166001600160a01b0383169081179091556040516000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350565b6000602082840312156200010057600080fd5b81516001600160a01b03811681146200011857600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200014a57607f821691505b6020821081036200016b57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001bf57600081815260208120601f850160051c810160208610156200019a5750805b601f850160051c820191505b81811015620001bb57828155600101620001a6565b5050505b505050565b81516001600160401b03811115620001e057620001e06200011f565b620001f881620001f1845462000135565b8462000171565b602080601f831160018114620002305760008415620002175750858301515b600019600386901b1c1916600185901b178555620001bb565b600085815260208120601f198616915b82811015620002615788860151825594840194600190910190840162000240565b5085821015620002805787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6117ea80620002a06000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063715018a6116100cd578063a22cb46511610081578063e985e9c511610066578063e985e9c5146102c7578063ed459df214610303578063f2fde38b1461031657600080fd5b8063a22cb465146102a1578063b88d4fde146102b457600080fd5b80638da5cb5b116100b25780638da5cb5b146102735780638f32d59b1461028657806395d89b411461029957600080fd5b8063715018a61461026357806379ba50971461026b57600080fd5b806323b872dd11610124578063484b973c11610109578063484b973c1461021c5780636352211e1461022f57806370a082311461024257600080fd5b806323b872dd146101f657806342842e0e1461020957600080fd5b8063081812fc11610155578063081812fc146101ae578063095ea7b3146101d957806323452b9c146101ee57600080fd5b806301ffc9a71461017157806306fdde0314610199575b600080fd5b61018461017f366004611451565b610329565b60405190151581526020015b60405180910390f35b6101a161040e565b60405161019091906114bb565b6101c16101bc3660046114ce565b61049c565b6040516001600160a01b039091168152602001610190565b6101ec6101e7366004611503565b610547565b005b6101ec610696565b6101ec61020436600461152d565b61070f565b6101ec61021736600461152d565b610796565b6101ec61022a366004611503565b6107b1565b6101c161023d3660046114ce565b610819565b610255610250366004611569565b610824565b604051908152602001610190565b6101ec6108be565b6101ec610922565b6004546101c1906001600160a01b031681565b6004546001600160a01b03163314610184565b6101a16109fa565b6101ec6102af366004611584565b610a07565b6101ec6102c23660046115d6565b610ae9565b6101846102d53660046116b2565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205460ff1690565b6005546001600160a01b03163314610184565b6101ec610324366004611569565b610afb565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806103bc57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b8061040857507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6006805461041b906116e5565b80601f0160208091040260200160405190810160405280929190818152602001828054610447906116e5565b80156104945780601f1061046957610100808354040283529160200191610494565b820191906000526020600020905b81548152906001019060200180831161047757829003601f168201915b505050505081565b6000818152602081905260408120546001600160a01b031661052b5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b506000908152600260205260409020546001600160a01b031690565b600061055282610bda565b9050806001600160a01b0316836001600160a01b0316036105db5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f72000000000000000000000000000000000000000000000000000000000000006064820152608401610522565b336001600160a01b038216148061061557506001600160a01b038116600090815260036020908152604080832033845290915290205460ff165b6106875760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610522565b6106918383610c65565b505050565b6004546001600160a01b031633146106f05760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19169055565b6107193382610ce0565b61078b5760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610522565b610691838383610de8565b61069183838360405180602001604052806000815250610fc6565b6004546001600160a01b0316331461080b5760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b610815828261104e565b5050565b600061040882610bda565b60006001600160a01b0382166108a25760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f2061646472657373000000000000000000000000000000000000000000006064820152608401610522565b506001600160a01b031660009081526001602052604090205490565b6004546001600160a01b031633146109185760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b61092061119f565b565b6005546001600160a01b031633146109a25760405162461bcd60e51b815260206004820152602c60248201527f63757272656e74206f776e6572206d757374207365742063616c6c657220617360448201527f206e657874206f776e65722e00000000000000000000000000000000000000006064820152608401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19908116909155600480543392168217905560405181907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3565b6007805461041b906116e5565b336001600160a01b03831603610a5f5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610522565b3360008181526003602090815260408083206001600160a01b0387168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610af584848484610fc6565b50505050565b6004546001600160a01b03163314610b555760405162461bcd60e51b815260206004820152601860248201527f63616c6c6572206973206e6f7420746865206f776e65722e00000000000000006044820152606401610522565b6001600160a01b038116610bab5760405162461bcd60e51b815260206004820152601f60248201527f4e657874206f776e657220697320746865207a65726f20616464726573732e006044820152606401610522565b6005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000818152602081905260408120546001600160a01b0316806104085760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e00000000000000000000000000000000000000000000006064820152608401610522565b6000818152600260205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610ca782610bda565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152602081905260408120546001600160a01b0316610d6a5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e00000000000000000000000000000000000000006064820152608401610522565b6000610d7583610bda565b9050806001600160a01b0316846001600160a01b03161480610db05750836001600160a01b0316610da58461049c565b6001600160a01b0316145b80610de057506001600160a01b0380821660009081526003602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610dfb82610bda565b6001600160a01b031614610e775760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e00000000000000000000000000000000000000000000006064820152608401610522565b6001600160a01b038216610ef25760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610522565b610efd600082610c65565b6001600160a01b03831660009081526001602081905260408220805491929091610f28908490611735565b90915550506001600160a01b03821660009081526001602081905260408220805491929091610f58908490611748565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b610fd03383610ce0565b6110425760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f7665640000000000000000000000000000006064820152608401610522565b610af5848484846111f6565b6001600160a01b0382166110a45760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610522565b6000818152602081905260409020546001600160a01b0316156111095760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610522565b6001600160a01b03821660009081526001602081905260408220805491929091611134908490611748565b9091555050600081815260208190526040808220805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6004546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36004805473ffffffffffffffffffffffffffffffffffffffff19169055565b611201848484610de8565b61120d8484848461127f565b610af55760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610522565b60006001600160a01b0384163b15611415576040517f150b7a020000000000000000000000000000000000000000000000000000000081526001600160a01b0385169063150b7a02906112dc90339089908890889060040161175b565b6020604051808303816000875af1925050508015611317575060408051601f3d908101601f1916820190925261131491810190611797565b60015b6113ca573d808015611345576040519150601f19603f3d011682016040523d82523d6000602084013e61134a565b606091505b5080516000036113c25760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e74657200000000000000000000000000006064820152608401610522565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610de0565b506001949350505050565b7fffffffff000000000000000000000000000000000000000000000000000000008116811461144e57600080fd5b50565b60006020828403121561146357600080fd5b813561146e81611420565b9392505050565b6000815180845260005b8181101561149b5760208185018101518683018201520161147f565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061146e6020830184611475565b6000602082840312156114e057600080fd5b5035919050565b80356001600160a01b03811681146114fe57600080fd5b919050565b6000806040838503121561151657600080fd5b61151f836114e7565b946020939093013593505050565b60008060006060848603121561154257600080fd5b61154b846114e7565b9250611559602085016114e7565b9150604084013590509250925092565b60006020828403121561157b57600080fd5b61146e826114e7565b6000806040838503121561159757600080fd5b6115a0836114e7565b9150602083013580151581146115b557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600080600080608085870312156115ec57600080fd5b6115f5856114e7565b9350611603602086016114e7565b925060408501359150606085013567ffffffffffffffff8082111561162757600080fd5b818701915087601f83011261163b57600080fd5b81358181111561164d5761164d6115c0565b604051601f8201601f19908116603f01168101908382118183101715611675576116756115c0565b816040528281528a602084870101111561168e57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b600080604083850312156116c557600080fd5b6116ce836114e7565b91506116dc602084016114e7565b90509250929050565b600181811c908216806116f957607f821691505b60208210810361171957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b818103818111156104085761040861171f565b808201808211156104085761040861171f565b60006001600160a01b0380871683528086166020840152508360408301526080606083015261178d6080830184611475565b9695505050505050565b6000602082840312156117a957600080fd5b815161146e8161142056fea2646970667358221220bb7f37a2b045c2a83aa5585a542226b4e8ab4f86b9ca740f4e3264fb96db545964736f6c63430008110033";
