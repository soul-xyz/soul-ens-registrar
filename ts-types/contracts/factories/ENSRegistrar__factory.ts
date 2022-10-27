/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { ENSRegistrar } from "../ENSRegistrar";

export class ENSRegistrar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    ensRegistry_: string,
    ensResolver_: string,
    permissionContract_: string,
    overrides?: Overrides
  ): Promise<ENSRegistrar> {
    return super.deploy(
      ensRegistry_,
      ensResolver_,
      permissionContract_,
      overrides || {}
    ) as Promise<ENSRegistrar>;
  }
  getDeployTransaction(
    ensRegistry_: string,
    ensResolver_: string,
    permissionContract_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      ensRegistry_,
      ensResolver_,
      permissionContract_,
      overrides || {}
    );
  }
  attach(address: string): ENSRegistrar {
    return super.attach(address) as ENSRegistrar;
  }
  connect(signer: Signer): ENSRegistrar__factory {
    return super.connect(signer) as ENSRegistrar__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ENSRegistrar {
    return new Contract(address, _abi, signerOrProvider) as ENSRegistrar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "ensRegistry_",
        type: "address",
      },
      {
        internalType: "address",
        name: "ensResolver_",
        type: "address",
      },
      {
        internalType: "address",
        name: "permissionContract_",
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
        internalType: "address",
        name: "permissionContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_newPermissionContract",
        type: "address",
      },
    ],
    name: "PermissionContractChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_ens",
        type: "string",
      },
    ],
    name: "RegisteredENS",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "RootNodeOwnerChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "transferable",
        type: "bool",
      },
    ],
    name: "TransferableUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "UpdatedENS",
    type: "event",
  },
  {
    inputs: [
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
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "changeLabelOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newPermissionContract",
        type: "address",
      },
    ],
    name: "changePermissionContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "rootNode_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "changeRootNodeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ensRegistry",
    outputs: [
      {
        internalType: "contract IENS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ensResolver",
    outputs: [
      {
        internalType: "contract IENSResolver",
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
        name: "rootNode_",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
    ],
    name: "labelOwner",
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
    name: "originalOwner",
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
    name: "permissionContract",
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
        name: "rootNode_",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label_",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "node",
        type: "bytes32",
      },
    ],
    name: "restoreOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "transferable_",
        type: "bool",
      },
    ],
    name: "setSubdomainTransferable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "storeCurrentOwner",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "transferable",
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
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b506040516200147f3803806200147f8339810160408190526200003491620000d8565b6200003f336200006b565b600180546001600160a01b0319166001600160a01b039283161790559182166080521660a05262000122565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b0381168114620000d357600080fd5b919050565b600080600060608486031215620000ee57600080fd5b620000f984620000bb565b92506200010960208501620000bb565b91506200011960408501620000bb565b90509250925092565b60805160a0516112e36200019c600039600081816101ee0152818161063a0152818161070201528181610bcf0152610c970152600081816101860152818161036a015281816104ff01528181610669015281816108d801528181610a9301528181610bfe01528181610e0d0152610f6e01526112e36000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c80638da5cb5b11610097578063d53cb71811610066578063d53cb71814610239578063dd1596411461024c578063f2fde38b1461027f578063fcb483b21461029257600080fd5b80638da5cb5b146101c55780639d1ebaae146101d6578063adce1c5f146101e9578063c3a254271461021057600080fd5b806373454c85116100d357806373454c8514610148578063744b20911461015b57806377cca9801461016e5780637d73b2311461018157600080fd5b806327a9b75814610105578063525f8c881461011a5780636292a6bf1461012d578063715018a614610140575b600080fd5b6101186101133660046110c6565b6102a5565b005b6101186101283660046110ea565b610323565b61011861013b366004611163565b610400565b6101186107ab565b6101186101563660046111c2565b6107bf565b6101186101693660046111ec565b6108c2565b61011861017c366004611163565b610995565b6101a87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6000546001600160a01b03166101a8565b6101186101e43660046111ec565b610d33565b6101a87f000000000000000000000000000000000000000000000000000000000000000081565b6101a861021e3660046111ec565b6002602052600090815260409020546001600160a01b031681565b6001546101a8906001600160a01b031681565b61026f61025a3660046111ec565b60036020526000908152604090205460ff1681565b60405190151581526020016101bc565b61011861028d3660046110c6565b610e6e565b6101a86102a0366004611205565b610efe565b6102ad610ffa565b600154604080516001600160a01b03928316815291831660208301527f61982e207318a4cd00925ae751ddea27dadd8299abd748bf1c818b2e0a6103ab910160405180910390a16001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b61032b610ffa565b6040517f5b0fc9c3000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b0382811660248301527f00000000000000000000000000000000000000000000000000000000000000001690635b0fc9c390604401600060405180830381600087803b1580156103ae57600080fd5b505af11580156103c2573d6000803e3d6000fd5b50506040516001600160a01b03841692508491507f1feab6b73ead7720548833a318ec8adba961fdb81dc95f4303705f3d13e49f2690600090a35050565b6001546001600160a01b031633146104855760405162461bcd60e51b815260206004820152603360248201527f454e535265676973747261723a2063616c6c6572206973206e6f74207468652060448201527f5065726d697373696f6e20436f6e74726163740000000000000000000000000060648201526084015b60405180910390fd5b6000838360405160200161049a929190611251565b60408051601f198184030181528282528051602091820120908301889052908201819052915060009060600160408051808303601f190181529082905280516020909101206302571be360e01b82526004820181905291506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be39060240160206040518083038186803b15801561054157600080fd5b505afa158015610555573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105799190611261565b6001600160a01b0316146105f45760405162461bcd60e51b8152602060048201526024808201527f454e535265676973747261723a206c6162656c20697320616c7265616479206f60448201527f776e656400000000000000000000000000000000000000000000000000000000606482015260840161047c565b6040517f5ef2c7f000000000000000000000000000000000000000000000000000000000815260048101879052602481018390526001600160a01b0384811660448301527f000000000000000000000000000000000000000000000000000000000000000081166064830152600060848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b1580156106ad57600080fd5b505af11580156106c1573d6000803e3d6000fd5b50506040517fd5fa2b00000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b0386811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063d5fa2b009150604401600060405180830381600087803b15801561074857600080fd5b505af115801561075c573d6000803e3d6000fd5b50505050826001600160a01b03167f9f2a065383b236afdeb6e9b1d77966068499287f92b04c37831f34f565d14401868660405161079b92919061127e565b60405180910390a2505050505050565b6107b3610ffa565b6107bd6000611054565b565b6000828152600260205260409020546001600160a01b0316331461084b5760405162461bcd60e51b815260206004820152603260248201527f454e535265676973747261723a2063616e206f6e6c792062652063616c6c656460448201527f206279206f726967696e616c206f776e65720000000000000000000000000000606482015260840161047c565b60008281526003602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168415159081179091558251858152918201527febd6408e05ac83bd76962e6c84f9ccb49ab67760f3b7379097ff92c7ae567209910160405180910390a15050565b6040516302571be360e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be39060240160206040518083038186803b15801561092257600080fd5b505afa158015610936573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095a9190611261565b600091825260026020526040909120805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909216919091179055565b600083836040516020016109aa929190611251565b60408051601f198184030181528282528051602091820120908301889052908201819052915060009060600160408051601f1981840301815291815281516020928301206000818152600390935291205490915060ff16610a735760405162461bcd60e51b815260206004820152602b60248201527f454e535265676973747261723a20737562646f6d61696e206973206e6f74207460448201527f72616e7366657261626c65000000000000000000000000000000000000000000606482015260840161047c565b6040516302571be360e01b81526004810182905233906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be39060240160206040518083038186803b158015610ad557600080fd5b505afa158015610ae9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b0d9190611261565b6001600160a01b031614610b895760405162461bcd60e51b815260206004820152602760248201527f454e535265676973747261723a2073656e64657220646f6573206e6f74206f7760448201527f6e206c6162656c00000000000000000000000000000000000000000000000000606482015260840161047c565b6040517f5ef2c7f000000000000000000000000000000000000000000000000000000000815260048101879052602481018390526001600160a01b0384811660448301527f000000000000000000000000000000000000000000000000000000000000000081166064830152600060848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b158015610c4257600080fd5b505af1158015610c56573d6000803e3d6000fd5b50506040517fd5fa2b00000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b0386811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063d5fa2b009150604401600060405180830381600087803b158015610cdd57600080fd5b505af1158015610cf1573d6000803e3d6000fd5b50506040518892506001600160a01b03861691507f0b31c6f72f5c0ac92366144089ef480ea443f28465cba2e1954b7113035b2bdf90600090a3505050505050565b6000818152600260205260409020546001600160a01b03163314610dbe5760405162461bcd60e51b8152602060048201526024808201527f63616e206f6e6c792062652063616c6c6564206279206f726967696e616c206f60448201527f776e657200000000000000000000000000000000000000000000000000000000606482015260840161047c565b600081815260026020526040908190205490517f5b0fc9c3000000000000000000000000000000000000000000000000000000008152600481018390526001600160a01b0391821660248201527f000000000000000000000000000000000000000000000000000000000000000090911690635b0fc9c390604401600060405180830381600087803b158015610e5357600080fd5b505af1158015610e67573d6000803e3d6000fd5b5050505050565b610e76610ffa565b6001600160a01b038116610ef25760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161047c565b610efb81611054565b50565b6000808383604051602001610f14929190611251565b60408051601f198184030181528282528051602091820120908301889052908201819052915060009060600160408051808303601f190181529082905280516020909101206302571be360e01b82526004820181905291507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906302571be39060240160206040518083038186803b158015610fb857600080fd5b505afa158015610fcc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff09190611261565b9695505050505050565b6000546001600160a01b031633146107bd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161047c565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114610efb57600080fd5b6000602082840312156110d857600080fd5b81356110e3816110b1565b9392505050565b600080604083850312156110fd57600080fd5b82359150602083013561110f816110b1565b809150509250929050565b60008083601f84011261112c57600080fd5b50813567ffffffffffffffff81111561114457600080fd5b60208301915083602082850101111561115c57600080fd5b9250929050565b6000806000806060858703121561117957600080fd5b84359350602085013567ffffffffffffffff81111561119757600080fd5b6111a38782880161111a565b90945092505060408501356111b7816110b1565b939692955090935050565b600080604083850312156111d557600080fd5b823591506020830135801515811461110f57600080fd5b6000602082840312156111fe57600080fd5b5035919050565b60008060006040848603121561121a57600080fd5b83359250602084013567ffffffffffffffff81111561123857600080fd5b6112448682870161111a565b9497909650939450505050565b8183823760009101908152919050565b60006020828403121561127357600080fd5b81516110e3816110b1565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea2646970667358221220616aacd5a03b9ec093cdf7227d05834f2133238bc0212304301bf36e4d6c436164736f6c63430008090033";
