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
    inputs: [
      {
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "isClaimed",
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
  "0x60806040526002805460ff60a01b1916600160a01b179055600060075534801561002857600080fd5b50600080546001600160a01b0319163290811782556040519091907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a36116b7806100776000396000f3fe60806040526004361061016e5760003560e01c806394e8eb04116100cb578063c7630a4d1161007f578063ed459df211610059578063ed459df214610434578063f2fde38b14610454578063fe5a53771461047457600080fd5b8063c7630a4d146103de578063d2d71d5c146103f4578063d3c424891461041457600080fd5b8063a7206cd6116100b0578063a7206cd614610330578063b048c4fb1461036b578063c2c589f0146103a657600080fd5b806394e8eb04146102f0578063990dc9db1461031057600080fd5b806355a8deab1161012257806375edcbe01161010757806375edcbe01461029b57806379ba5097146102bb5780638f32d59b146102d057600080fd5b806355a8deab14610254578063715018a61461028657600080fd5b806323452b9c1161015357806323452b9c146101c0578063407ac164146101d557806343fb5f691461023457600080fd5b806307e339e81461017a5780631a67ef511461018f57600080fd5b3661017557005b600080fd5b61018d61018836600461128c565b6104a1565b005b34801561019b57600080fd5b506001546001600160a01b031633145b60405190151581526020015b60405180910390f35b3480156101cc57600080fd5b5061018d6107fb565b3480156101e157600080fd5b506102156101f036600461139c565b600660205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152016101b7565b34801561024057600080fd5b5061018d61024f3660046113b5565b610889565b34801561026057600080fd5b506002546101ab9074010000000000000000000000000000000000000000900460ff1681565b34801561029257600080fd5b5061018d610942565b3480156102a757600080fd5b5061018d6102b63660046113d7565b6109fa565b3480156102c757600080fd5b5061018d610ae7565b3480156102dc57600080fd5b506000546001600160a01b031633146101ab565b3480156102fc57600080fd5b5061018d61030b36600461139c565b610bbe565b34801561031c57600080fd5b5061018d61032b3660046113f9565b610cba565b34801561033c57600080fd5b5061035d61034b36600461139c565b60009081526004602052604090205490565b6040519081526020016101b7565b34801561037757600080fd5b506101ab6103863660046113d7565b600091825260056020908152604080842092845291905290205460ff1690565b3480156103b257600080fd5b506003546103c6906001600160a01b031681565b6040516001600160a01b0390911681526020016101b7565b3480156103ea57600080fd5b5061035d60075481565b34801561040057600080fd5b5061018d61040f366004611425565b610d77565b34801561042057600080fd5b5061018d61042f366004611442565b610e15565b34801561044057600080fd5b506002546001600160a01b031633146101ab565b34801561046057600080fd5b5061018d61046f366004611425565b610f22565b34801561048057600080fd5b5061035d61048f36600461139c565b60046020526000908152604090205481565b60025474010000000000000000000000000000000000000000900460ff166105365760405162461bcd60e51b815260206004820152602b60248201527f5065726d697373696f6e436f6e74726163743a20726567697374726174696f6e60448201527f20697320636c6f7365642e00000000000000000000000000000000000000000060648201526084015b60405180910390fd5b600086815260066020908152604091829020825180840190935280546001600160a01b03168352600101549082018190523410156105b65760405162461bcd60e51b815260206004820152601960248201527f726567697374726174696f6e2066656520726571756972656400000000000000604482015260640161052d565b60006127106007546127106105cb91906114cc565b83602001516105da91906114e3565b6105e49190611502565b9050801561063c5781516105f8908261103c565b81516040518281526001600160a01b039091169030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35b6106c7848480806020026020016040519081016040528093929190818152602001838360200280828437600081840152601f19601f8201169050808301925050505050505060046000888152602001908152602001600020548c8b8b8b6040516020016106ac9493929190611524565b6040516020818303038152906040528051906020012061110a565b6107395760405162461bcd60e51b815260206004820152602260248201527f5065726d697373696f6e436f6e74726163743a20496e76616c69642070726f6f60448201527f662e000000000000000000000000000000000000000000000000000000000000606482015260840161052d565b600360009054906101000a90046001600160a01b03166001600160a01b031663e3e02ecd8a8a8a8a8f6040518663ffffffff1660e01b8152600401610782959493929190611595565b600060405180830381600087803b15801561079c57600080fd5b505af11580156107b0573d6000803e3d6000fd5b505050507f50f74ca45caac8020b8d891bd13ea5a2d79564986ee6a839f0d914896388322d87878c6040516107e793929190611623565b60405180910390a150505050505050505050565b6000546001600160a01b0316331461086a5760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b6002805473ffffffffffffffffffffffffffffffffffffffff19169055565b6000546001600160a01b031633146108f85760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b6002805491151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff909216919091179055565b6000546001600160a01b031633146109b15760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b6000805473ffffffffffffffffffffffffffffffffffffffff1916815560405181907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3565b6001546001600160a01b0316331480610a1d57506000546001600160a01b031633145b610a8f5760405162461bcd60e51b815260206004820152603d60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201527f742074686520726f6f742070726f7669646572206f72206f776e65722e000000606482015260840161052d565b60008281526004602090815260409182902083905581518481529081018390529081018290527f18bab1ace8e5759bc0eb57ac9b14b1f5f42506bd787d27e2a5e7085dcf0eacaf906060015b60405180910390a15050565b6002546001600160a01b03163314610b69576040805162461bcd60e51b81526020600482015260248101919091527f5065726d697373696f6e436f6e74726163743a2063757272656e74206f776e6560448201527f72206d757374207365742063616c6c6572206173206e657874206f776e65722e606482015260840161052d565b6002805473ffffffffffffffffffffffffffffffffffffffff19908116909155600080543392168217815560405182917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3565b6000546001600160a01b03163314610c2d5760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b612710811115610c7f5760405162461bcd60e51b815260206004820152601760248201527f496e76616c696420636f6d6d697373696f6e2062697073000000000000000000604482015260640161052d565b60078190556040518181527fec789caffc301be1dd1c40fb1a9c24451a547f9a8d295d86d04ef6f376d98e169060200160405180910390a150565b6000546001600160a01b03163314610d295760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b610d33828261103c565b6040518181526001600160a01b0383169030907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6000546001600160a01b03163314610de65760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6001546001600160a01b0316331480610e3857506000546001600160a01b031633145b610eaa5760405162461bcd60e51b815260206004820152603d60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201527f742074686520726f6f742070726f7669646572206f72206f776e65722e000000606482015260840161052d565b6000828152600660209081526040918290208351815473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b039091161781558382015160019091018190558251858152918201527f6ff8895cab9b0756060f51407ed2675e887fdbddebb7c41ce5de2ea3c23da3609101610adb565b6000546001600160a01b03163314610f915760405162461bcd60e51b815260206004820152602c60248201527f5065726d697373696f6e436f6e74726163743a2063616c6c6572206973206e6f60448201526b3a103a34329037bbb732b91760a11b606482015260840161052d565b6001600160a01b03811661100d5760405162461bcd60e51b815260206004820152603360248201527f5065726d697373696f6e436f6e74726163743a206e657874206f776e6572206960448201527f7320746865207a65726f20616464726573732e00000000000000000000000000606482015260840161052d565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611089576040519150601f19603f3d011682016040523d82523d6000602084013e61108e565b606091505b50509050806111055760405162461bcd60e51b815260206004820152603160248201527f556e61626c6520746f2073656e642076616c75653a20726563697069656e742060448201527f6d61792068617665207265766572746564000000000000000000000000000000606482015260840161052d565b505050565b6000826111178584611120565b14949350505050565b600081815b8451811015611165576111518286838151811061114457611144611650565b602002602001015161116d565b91508061115d81611666565b915050611125565b509392505050565b6000818310611189576000828152602084905260409020611198565b60008381526020839052604090205b9392505050565b6001600160a01b03811681146111b457600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156111f6576111f66111b7565b604052919050565b60008083601f84011261121057600080fd5b50813567ffffffffffffffff81111561122857600080fd5b60208301915083602082850101111561124057600080fd5b9250929050565b60008083601f84011261125957600080fd5b50813567ffffffffffffffff81111561127157600080fd5b6020830191508360208260051b850101111561124057600080fd5b60008060008060008060008060c0898b0312156112a857600080fd5b88356112b38161119f565b975060208981013567ffffffffffffffff808211156112d157600080fd5b818c0191508c601f8301126112e557600080fd5b8135818111156112f7576112f76111b7565b61130984601f19601f840116016111cd565b8181528e8583860101111561131d57600080fd5b818585018683013760009181019094015291985060408b0135975060608b0135918083111561134b57600080fd5b6113578d848e016111fe565b909850965060808c0135955060a08c013592508791508083111561137a57600080fd5b50506113888b828c01611247565b999c989b5096995094979396929594505050565b6000602082840312156113ae57600080fd5b5035919050565b6000602082840312156113c757600080fd5b8135801515811461119857600080fd5b600080604083850312156113ea57600080fd5b50508035926020909101359150565b6000806040838503121561140c57600080fd5b82356114178161119f565b946020939093013593505050565b60006020828403121561143757600080fd5b81356111988161119f565b600080828403606081121561145657600080fd5b833592506040601f198201121561146c57600080fd5b506040516040810181811067ffffffffffffffff82111715611490576114906111b7565b60405260208401356114a18161119f565b81526040939093013560208401525092909150565b634e487b7160e01b600052601160045260246000fd5b6000828210156114de576114de6114b6565b500390565b60008160001904831182151516156114fd576114fd6114b6565b500290565b60008261151f57634e487b7160e01b600052601260045260246000fd5b500490565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000008560601b16815283601482015281836034830137600091016034019081529392505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b608081526000865180608084015260005b818110156115c3576020818a0181015160a08684010152016115a6565b818111156115d557600060a083860101525b50601f19601f8201168301905086602084015260a083820301604084015261160160a08201868861156a565b91505061161960608301846001600160a01b03169052565b9695505050505050565b60408152600061163760408301858761156a565b90506001600160a01b0383166020830152949350505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561167a5761167a6114b6565b506001019056fea2646970667358221220a386a6ad48e23ada7a72d29b3e624c629104667bee2116ff202e0852649f3fbc64736f6c63430008090033";
