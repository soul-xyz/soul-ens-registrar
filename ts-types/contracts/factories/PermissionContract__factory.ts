/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { PermissionContract } from "../PermissionContract";

export class PermissionContract__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<PermissionContract> {
    return super.deploy(overrides || {}) as Promise<PermissionContract>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PermissionContract {
    return super.attach(address) as PermissionContract;
  }
  connect(signer: Signer): PermissionContract__factory {
    return super.connect(signer) as PermissionContract__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PermissionContract {
    return new Contract(address, _abi, signerOrProvider) as PermissionContract;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newBips",
        type: "uint256",
      },
    ],
    name: "CommissionBipsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
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
        indexed: false,
        internalType: "string",
        name: "label",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRoot",
        type: "bytes32",
      },
    ],
    name: "RootUpdated",
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
        indexed: false,
        internalType: "uint256",
        name: "value",
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
    inputs: [],
    name: "cancelOwnershipTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "commissionBips",
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
    name: "ensRegistrar",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "feeConfigs",
    outputs: [
      {
        internalType: "address payable",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "shard",
        type: "bytes32",
      },
    ],
    name: "getMerkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
    name: "isRootProvider",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "merkleRoots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "nftContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "rootName_",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootNode_",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label_",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootShard_",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof_",
        type: "bytes32[]",
      },
    ],
    name: "registerWithNFTOwnership",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "string",
        name: "rootName_",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootNode_",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label_",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootShard_",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof_",
        type: "bytes32[]",
      },
    ],
    name: "registerWithProof",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "registrable",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newBips",
        type: "uint256",
      },
    ],
    name: "setCommissionBips",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "ensRegistrar_",
        type: "address",
      },
    ],
    name: "setENSRegistrar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    name: "setMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "registrable_",
        type: "bool",
      },
    ],
    name: "setRegistrable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "address payable",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
        ],
        internalType: "struct PermissionContract.NodeFeeConfig",
        name: "feeConfig",
        type: "tuple",
      },
    ],
    name: "setRegistrationFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFunds",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526002805460ff60a01b1916600160a01b179055600060075534801561002857600080fd5b50600080546001600160a01b0319163290811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3611bd1806100776000396000f3fe60806040526004361061016e5760003560e01c806394e8eb04116100cb578063c7630a4d1161007f578063ed459df211610059578063ed459df2146103fb578063f2fde38b1461041b578063fe5a53771461043b57600080fd5b8063c7630a4d146103a5578063d2d71d5c146103bb578063d3c42489146103db57600080fd5b8063a7206cd6116100b0578063a7206cd61461031f578063b4c2d9c71461035a578063c2c589f01461036d57600080fd5b806394e8eb04146102df578063990dc9db146102ff57600080fd5b806355a8deab1161012257806375edcbe01161010757806375edcbe01461028a57806379ba5097146102aa5780638f32d59b146102bf57600080fd5b806355a8deab14610254578063715018a61461027557600080fd5b806323452b9c1161015357806323452b9c146101c0578063407ac164146101d557806343fb5f691461023457600080fd5b806307e339e81461017a5780631a67ef511461018f57600080fd5b3661017557005b600080fd5b61018d61018836600461172c565b610468565b005b34801561019b57600080fd5b506001546001600160a01b031633145b60405190151581526020015b60405180910390f35b3480156101cc57600080fd5b5061018d6107d7565b3480156101e157600080fd5b506102156101f03660046117e6565b600660205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101b7565b34801561024057600080fd5b5061018d61024f3660046117ff565b610865565b34801561026057600080fd5b506002546101ab90600160a01b900460ff1681565b34801561028157600080fd5b5061018d61090d565b34801561029657600080fd5b5061018d6102a5366004611821565b6109d3565b3480156102b657600080fd5b5061018d610ac9565b3480156102cb57600080fd5b506000546001600160a01b031633146101ab565b3480156102eb57600080fd5b5061018d6102fa3660046117e6565b610bc1565b34801561030b57600080fd5b5061018d61031a366004611843565b610ce3565b34801561032b57600080fd5b5061034c61033a3660046117e6565b60009081526004602052604090205490565b6040519081526020016101b7565b61018d61036836600461186f565b610da0565b34801561037957600080fd5b5060035461038d906001600160a01b031681565b6040516001600160a01b0390911681526020016101b7565b3480156103b157600080fd5b5061034c60075481565b3480156103c757600080fd5b5061018d6103d6366004611935565b6111b4565b3480156103e757600080fd5b5061018d6103f6366004611952565b611252565b34801561040757600080fd5b506002546001600160a01b031633146101ab565b34801561042757600080fd5b5061018d610436366004611935565b611366565b34801561044757600080fd5b5061034c6104563660046117e6565b60046020526000908152604090205481565b600254600160a01b900460ff166104ec5760405162461bcd60e51b815260206004820152602b60248201527f5065726d697373696f6e436f6e74726163743a20726567697374726174696f6e60448201527f20697320636c6f7365642e00000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600086815260066020908152604091829020825180840190935280546001600160a01b03168352600101549082018190523410156105925760405162461bcd60e51b815260206004820152602d60248201527f5065726d697373696f6e436f6e74726163743a20726567697374726174696f6e60448201527f206665652072657175697265640000000000000000000000000000000000000060648201526084016104e3565b60006127106007546127106105a791906119dc565b83602001516105b691906119f3565b6105c09190611a12565b905080156106185781516105d49082611480565b81516040518281526001600160a01b039091169030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35b6106a3848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060046000888152602001908152602001600020548c8b8b8b6040516020016106889493929190611a34565b6040516020818303038152906040528051906020012061154e565b6107155760405162461bcd60e51b815260206004820152602260248201527f5065726d697373696f6e436f6e74726163743a20496e76616c69642070726f6f60448201527f662e00000000000000000000000000000000000000000000000000000000000060648201526084016104e3565b600360009054906101000a90046001600160a01b03166001600160a01b031663e3e02ecd8a8a8a8a8f6040518663ffffffff1660e01b815260040161075e959493929190611a92565b600060405180830381600087803b15801561077857600080fd5b505af115801561078c573d6000803e3d6000fd5b505050507f50f74ca45caac8020b8d891bd13ea5a2d79564986ee6a839f0d914896388322d87878c6040516107c393929190611b20565b60405180910390a150505050505050505050565b6000546001600160a01b031633146108465760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b6002805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146108d45760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b60028054911515600160a01b027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b6000546001600160a01b0316331461097c5760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a36000805473ffffffffffffffffffffffffffffffffffffffff19169055565b6001546001600160a01b03163314806109f657506000546001600160a01b031633145b610a685760405162461bcd60e51b815260206004820152603d60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201527f742074686520726f6f742070726f7669646572206f72206f776e65722e00000060648201526084016104e3565b600082815260046020908152604091829020548251858152918201529081018290527f18bab1ace8e5759bc0eb57ac9b14b1f5f42506bd787d27e2a5e7085dcf0eacaf9060600160405180910390a160009182526004602052604090912055565b6002546001600160a01b03163314610b4b576040805162461bcd60e51b81526020600482015260248101919091527f5065726d697373696f6e436f6e74726163743a2063757272656e74206f776e6560448201527f72206d757374207365742063616c6c6572206173206e657874206f776e65722e60648201526084016104e3565b6002805473ffffffffffffffffffffffffffffffffffffffff191690556000805460405133926001600160a01b03909216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff191633179055565b6000546001600160a01b03163314610c305760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b612710811115610ca85760405162461bcd60e51b815260206004820152602b60248201527f5065726d697373696f6e436f6e74726163743a20496e76616c696420636f6d6d60448201527f697373696f6e206269707300000000000000000000000000000000000000000060648201526084016104e3565b60078190556040518181527fec789caffc301be1dd1c40fb1a9c24451a547f9a8d295d86d04ef6f376d98e169060200160405180910390a150565b6000546001600160a01b03163314610d525760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b610d5c8282611480565b6040518181526001600160a01b0383169030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600254600160a01b900460ff16610e1f5760405162461bcd60e51b815260206004820152602b60248201527f5065726d697373696f6e436f6e74726163743a20726567697374726174696f6e60448201527f20697320636c6f7365642e00000000000000000000000000000000000000000060648201526084016104e3565b6000888a604051602001610e4f92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60408051601f19818403018152918152815160209283012060008781526005845282812082825290935291205490915060ff1615610ef45760405162461bcd60e51b8152602060048201526024808201527f5065726d697373696f6e436f6e74726163743a20616c726561647920636c616960448201527f6d65642e0000000000000000000000000000000000000000000000000000000060648201526084016104e3565b600084815260056020908152604080832084845290915280822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055517f6352211e000000000000000000000000000000000000000000000000000000008152600481018b90526001600160a01b038c1690636352211e9060240160206040518083038186803b158015610f8e57600080fd5b505afa158015610fa2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fc69190611b4d565b9050611077848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060046000888152602001908152602001600020548d8b60405160200161068892919060609290921b6bffffffffffffffffffffffff1916825260148201527f2a00000000000000000000000000000000000000000000000000000000000000603482015260350190565b6110e95760405162461bcd60e51b815260206004820152602260248201527f5065726d697373696f6e436f6e74726163743a20496e76616c69642070726f6f60448201527f662e00000000000000000000000000000000000000000000000000000000000060648201526084016104e3565b6003546040517fe3e02ecd0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063e3e02ecd9061113a908c908c908c908c908890600401611a92565b600060405180830381600087803b15801561115457600080fd5b505af1158015611168573d6000803e3d6000fd5b505050507f50f74ca45caac8020b8d891bd13ea5a2d79564986ee6a839f0d914896388322d87878360405161119f93929190611b20565b60405180910390a15050505050505050505050565b6000546001600160a01b031633146112235760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b031633148061127557506000546001600160a01b031633145b6112e75760405162461bcd60e51b815260206004820152603d60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201527f742074686520726f6f742070726f7669646572206f72206f776e65722e00000060648201526084016104e3565b6000828152600660209081526040918290208351815473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039091161781558382015160019091018190558251858152918201527f6ff8895cab9b0756060f51407ed2675e887fdbddebb7c41ce5de2ea3c23da360910160405180910390a15050565b6000546001600160a01b031633146113d55760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b60648201526084016104e3565b6001600160a01b0381166114515760405162461bcd60e51b815260206004820152603360248201527f5065726d697373696f6e436f6e74726163743a206e657874206f776e6572206960448201527f7320746865207a65726f20616464726573732e0000000000000000000000000060648201526084016104e3565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000826001600160a01b03168260405160006040518083038185875af1925050503d80600081146114cd576040519150601f19603f3d011682016040523d82523d6000602084013e6114d2565b606091505b50509050806115495760405162461bcd60e51b815260206004820152603160248201527f556e61626c6520746f2073656e642076616c75653a20726563697069656e742060448201527f6d6179206861766520726576657274656400000000000000000000000000000060648201526084016104e3565b505050565b60008261155b8584611564565b14949350505050565b600081815b84518110156115a9576115958286838151811061158857611588611b6a565b60200260200101516115b1565b9150806115a181611b80565b915050611569565b509392505050565b60008183106115cd5760008281526020849052604090206115dc565b60008381526020839052604090205b9392505050565b6001600160a01b03811681146115f857600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261162257600080fd5b813567ffffffffffffffff8082111561163d5761163d6115fb565b604051601f8301601f19908116603f01168101908282118183101715611665576116656115fb565b8160405283815286602085880101111561167e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008083601f8401126116b057600080fd5b50813567ffffffffffffffff8111156116c857600080fd5b6020830191508360208285010111156116e057600080fd5b9250929050565b60008083601f8401126116f957600080fd5b50813567ffffffffffffffff81111561171157600080fd5b6020830191508360208260051b85010111156116e057600080fd5b60008060008060008060008060c0898b03121561174857600080fd5b8835611753816115e3565b9750602089013567ffffffffffffffff8082111561177057600080fd5b61177c8c838d01611611565b985060408b0135975060608b013591508082111561179957600080fd5b6117a58c838d0161169e565b909750955060808b0135945060a08b01359150808211156117c557600080fd5b506117d28b828c016116e7565b999c989b5096995094979396929594505050565b6000602082840312156117f857600080fd5b5035919050565b60006020828403121561181157600080fd5b813580151581146115dc57600080fd5b6000806040838503121561183457600080fd5b50508035926020909101359150565b6000806040838503121561185657600080fd5b8235611861816115e3565b946020939093013593505050565b600080600080600080600080600060e08a8c03121561188d57600080fd5b8935611898816115e3565b985060208a0135975060408a013567ffffffffffffffff808211156118bc57600080fd5b6118c88d838e01611611565b985060608c0135975060808c01359150808211156118e557600080fd5b6118f18d838e0161169e565b909750955060a08c0135945060c08c013591508082111561191157600080fd5b5061191e8c828d016116e7565b915080935050809150509295985092959850929598565b60006020828403121561194757600080fd5b81356115dc816115e3565b600080828403606081121561196657600080fd5b833592506040601f198201121561197c57600080fd5b506040516040810181811067ffffffffffffffff821117156119a0576119a06115fb565b60405260208401356119b1816115e3565b81526040939093013560208401525092909150565b634e487b7160e01b600052601160045260246000fd5b6000828210156119ee576119ee6119c6565b500390565b6000816000190483118215151615611a0d57611a0d6119c6565b500290565b600082611a2f57634e487b7160e01b600052601260045260246000fd5b500490565b6bffffffffffffffffffffffff198560601b16815283601482015281836034830137600091016034019081529392505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b608081526000865180608084015260005b81811015611ac0576020818a0181015160a0868401015201611aa3565b81811115611ad257600060a083860101525b50601f19601f8201168301905086602084015260a0838203016040840152611afe60a082018688611a67565b915050611b1660608301846001600160a01b03169052565b9695505050505050565b604081526000611b34604083018587611a67565b90506001600160a01b0383166020830152949350505050565b600060208284031215611b5f57600080fd5b81516115dc816115e3565b634e487b7160e01b600052603260045260246000fd5b6000600019821415611b9457611b946119c6565b506001019056fea2646970667358221220fb10d508bf04d3bbdd832e00374ca9882770aac225c431a5d5de20fc14602fd764736f6c63430008090033";
