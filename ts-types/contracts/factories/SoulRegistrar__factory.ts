/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SoulRegistrar } from "../SoulRegistrar";

export class SoulRegistrar__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    ensRegistry_: string,
    ensResolver_: string,
    overrides?: Overrides
  ): Promise<SoulRegistrar> {
    return super.deploy(
      ensRegistry_,
      ensResolver_,
      overrides || {}
    ) as Promise<SoulRegistrar>;
  }
  getDeployTransaction(
    ensRegistry_: string,
    ensResolver_: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      ensRegistry_,
      ensResolver_,
      overrides || {}
    );
  }
  attach(address: string): SoulRegistrar {
    return super.attach(address) as SoulRegistrar;
  }
  connect(signer: Signer): SoulRegistrar__factory {
    return super.connect(signer) as SoulRegistrar__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SoulRegistrar {
    return new Contract(address, _abi, signerOrProvider) as SoulRegistrar;
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
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidParams",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    inputs: [],
    name: "RegistrationHasNotStarted",
    type: "error",
  },
  {
    inputs: [],
    name: "SubdomainAlreadyOwned",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
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
    name: "FeePayout",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
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
    name: "FeeWithdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newMerkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootUpdated",
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
    name: "OwnershipTransferStarted",
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
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "label",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "RegisteredSubdomain",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "newRegistrable",
        type: "bool",
      },
    ],
    name: "RegistrableUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newRelayer",
        type: "address",
      },
    ],
    name: "RelayerUpdated",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "claimed",
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
    name: "pendingOwner",
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
        name: "nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "rootNode",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "label",
        type: "string",
      },
      {
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "registerWithNFTOwnership",
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
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "address[]",
        name: "receivers",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "labels",
        type: "string[]",
      },
      {
        internalType: "bytes32[][]",
        name: "merkleProofs",
        type: "bytes32[][]",
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
    name: "relayer",
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
        internalType: "bytes32",
        name: "rootShard",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "newMerkleRoot",
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
        name: "newRegistrable",
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
        internalType: "struct SoulRegistrar.NodeFeeConfig",
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
        internalType: "address",
        name: "newRelayer",
        type: "address",
      },
    ],
    name: "setRelayer",
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
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "withdrawFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001c7f38038062001c7f8339810160408190526200003491620001b5565b6200003f336200006c565b600160028190556001600160a01b03808416608052821660a052620000649062000096565b5050620001ed565b600180546001600160a01b03191690556200009381620000e7602090811b62000e5717901c565b50565b620000a062000137565b6006805460ff19168215159081179091556040519081527f2ae3428b787bbbae6c1ad4821665836aec54941d01822e9248cc9fa654e4a5599060200160405180910390a150565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b03163314620001965760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640160405180910390fd5b565b80516001600160a01b0381168114620001b057600080fd5b919050565b60008060408385031215620001c957600080fd5b620001d48362000198565b9150620001e46020840162000198565b90509250929050565b60805160a051611a4962000236600039600081816103a80152818161127a01526113420152600081816102bb0152818161118b015281816112a901526113e40152611a496000f3fe60806040526004361061016a5760003560e01c80638b45d08f116100cb578063c7630a4d1161007f578063f2fde38b11610059578063f2fde38b1461042c578063f60fd67b1461044c578063fe5a53771461046c57600080fd5b8063c7630a4d146103ca578063d3c42489146103ee578063e30c39781461040e57600080fd5b806394e8eb04116100b057806394e8eb0414610363578063a6d4f04d14610383578063adce1c5f1461039657600080fd5b80638b45d08f1461030a5780638da5cb5b1461034557600080fd5b8063715018a61161012257806379ba50971161010757806379ba5097146102945780637d73b231146102a95780638406c079146102f557600080fd5b8063715018a61461025f57806375edcbe01461027457600080fd5b806343fb5f691161015357806343fb5f69146101f557806355a8deab146102155780636548e9bc1461023f57600080fd5b8063164e68de1461016f578063407ac16414610191575b600080fd5b34801561017b57600080fd5b5061018f61018a366004611544565b610499565b005b34801561019d57600080fd5b506101d16101ac366004611561565b600760205260009081526040902080546001909101546001600160a01b039091169082565b604080516001600160a01b0390931683526020830191909152015b60405180910390f35b34801561020157600080fd5b5061018f61021036600461157a565b6104f0565b34801561022157600080fd5b5060065461022f9060ff1681565b60405190151581526020016101ec565b34801561024b57600080fd5b5061018f61025a366004611544565b610540565b34801561026b57600080fd5b5061018f6105a3565b34801561028057600080fd5b5061018f61028f36600461159c565b6105b7565b3480156102a057600080fd5b5061018f610640565b3480156102b557600080fd5b506102dd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016101ec565b34801561030157600080fd5b506102dd6106d3565b34801561031657600080fd5b5061022f61032536600461159c565b600560209081526000928352604080842090915290825290205460ff1681565b34801561035157600080fd5b506000546001600160a01b03166102dd565b34801561036f57600080fd5b5061018f61037e366004611561565b610707565b61018f61039136600461160a565b610780565b3480156103a257600080fd5b506102dd7f000000000000000000000000000000000000000000000000000000000000000081565b3480156103d657600080fd5b506103e060085481565b6040519081526020016101ec565b3480156103fa57600080fd5b5061018f6104093660046116b7565b610a97565b34801561041a57600080fd5b506001546001600160a01b03166102dd565b34801561043857600080fd5b5061018f610447366004611544565b610b45565b34801561045857600080fd5b5061018f610467366004611739565b610bc3565b34801561047857600080fd5b506103e0610487366004611561565b60046020526000908152604090205481565b6104a1610eb4565b476104ac8282610f0e565b6040518181526001600160a01b0383169030907f94ff26d0039076ded638218748282b9661d9e3a2c9bf0cf46b9ce2405a410c769060200160405180910390a35050565b6104f8610eb4565b6006805460ff19168215159081179091556040519081527f2ae3428b787bbbae6c1ad4821665836aec54941d01822e9248cc9fa654e4a559906020015b60405180910390a150565b610548610eb4565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f09bf35b7806e61e7baf86e6547c4221f69d130ccc0a19215d064685a89464a7090602001610535565b6105ab610eb4565b6105b5600061102c565b565b6105bf6106d3565b6001600160a01b0316336001600160a01b0316146105ef576040516282b42960e81b815260040160405180910390fd5b600082815260046020526040908190208290555182907ffd69edeceaf1d6832d935be1fba54ca93bf17e71520c6c9ffc08d6e9529f8757906106349084815260200190565b60405180910390a25050565b60015433906001600160a01b031681146106c75760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f74207468652060448201527f6e6577206f776e6572000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6106d08161102c565b50565b6003546000906001600160a01b0316156106f757506003546001600160a01b031690565b506000546001600160a01b031690565b61070f610eb4565b61271081111561074b576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60088190556040518181527fec789caffc301be1dd1c40fb1a9c24451a547f9a8d295d86d04ef6f376d98e1690602001610535565b60065460ff166107bc576040517fa753642a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107c4611052565b84831415806107d35750848114155b1561080a576040517fa86b651200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600088815260076020908152604091829020825180840190935280546001600160a01b0316835260010154908201819052341015610874576040517ff4d678b800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60085460009087906127109061088a90826117fb565b8460200151610899919061180e565b6108a39190611825565b6108ad919061180e565b905080156109055781516108c19082610f0e565b81516040518281526001600160a01b039091169030907faa2f029dce3e2f28194bcef6e2dbdb92992140b3b6c14b9a34026b0b376c1bf39060200160405180910390a35b60005b87811015610a8057600089898381811061092457610924611847565b90506020020160208101906109399190611544565b8c89898581811061094c5761094c611847565b905060200281019061095e919061185d565b60405160200161097194939291906118a4565b604051602081830303815290604052805190602001209050610a6d8c8c8c8c868181106109a0576109a0611847565b90506020020160208101906109b59190611544565b8b8b878181106109c7576109c7611847565b90506020028101906109d9919061185d565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508d92508c9150899050818110610a2257610a22611847565b9050602002810190610a3491906118d7565b808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152508992506110a9915050565b5080610a7881611921565b915050610908565b505050610a8d6001600255565b5050505050505050565b610a9f6106d3565b6001600160a01b0316336001600160a01b031614610acf576040516282b42960e81b815260040160405180910390fd5b6000828152600760209081526040918290208351815473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909116178155838201516001909101819055915191825283917f6ff8895cab9b0756060f51407ed2675e887fdbddebb7c41ce5de2ea3c23da3609101610634565b610b4d610eb4565b600180546001600160a01b03831673ffffffffffffffffffffffffffffffffffffffff199091168117909155610b8b6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b60065460ff16610bff576040517fa753642a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008789604051602001610c2f92919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60408051601f19818403018152918152815160209283012060008781526005845282812082825290935291205490915060ff1615610c99576040517f646cf55800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600084815260056020908152604080832084845290915290819020805460ff19166001179055517f6352211e000000000000000000000000000000000000000000000000000000008152600481018990526001600160a01b038a1690636352211e90602401602060405180830381865afa158015610d1b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d3f9190611959565b6001600160a01b0316336001600160a01b031614610d6f576040516282b42960e81b815260040160405180910390fd5b6040516bffffffffffffffffffffffff1960608b901b166020820152603481018890527f2a000000000000000000000000000000000000000000000000000000000000006054820152600090605501604051602081830303815290604052805190602001209050610e4b8886338a8a8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050604080516020808d0282810182019093528c82529093508c92508b9182918501908490808284376000920191909152508992506110a9915050565b50505050505050505050565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146105b55760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106be565b80471015610f5e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016106be565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610fab576040519150601f19603f3d011682016040523d82523d6000602084013e610fb0565b606091505b50509050806110275760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016106be565b505050565b6001805473ffffffffffffffffffffffffffffffffffffffff191690556106d081610e57565b60028054036110a35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016106be565b60028055565b6000858152600460205260409020546110c490839083611498565b6110fa576040517f09bde33900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008360405160200161110d919061199a565b60408051601f1981840301815282825280516020918201209083018a9052908201819052915060009060600160408051808303601f190181529082905280516020909101207f02571be30000000000000000000000000000000000000000000000000000000082526004820181905291506000906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa1580156111d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f69190611959565b6001600160a01b031614611236576040517f73f81d0200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f5ef2c7f000000000000000000000000000000000000000000000000000000000815260048101899052602481018390523060448201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000081166064830152600060848301527f00000000000000000000000000000000000000000000000000000000000000001690635ef2c7f09060a401600060405180830381600087803b1580156112ed57600080fd5b505af1158015611301573d6000803e3d6000fd5b50506040517fd5fa2b00000000000000000000000000000000000000000000000000000000008152600481018490526001600160a01b0389811660248301527f000000000000000000000000000000000000000000000000000000000000000016925063d5fa2b009150604401600060405180830381600087803b15801561138857600080fd5b505af115801561139c573d6000803e3d6000fd5b50506040517f06ab5923000000000000000000000000000000000000000000000000000000008152600481018b9052602481018590526001600160a01b0389811660448301527f00000000000000000000000000000000000000000000000000000000000000001692506306ab592391506064016020604051808303816000875af115801561142f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061145391906119b6565b50877fd6288dcb40622d12005699aa256293bdbd786df6f192b2a95bccdd5169a8e20186886040516114869291906119cf565b60405180910390a25050505050505050565b6000826114a585846114ae565b14949350505050565b600081815b84518110156114f3576114df828683815181106114d2576114d2611847565b60200260200101516114fd565b9150806114eb81611921565b9150506114b3565b5090505b92915050565b6000818310611519576000828152602084905260409020611528565b60008381526020839052604090205b9392505050565b6001600160a01b03811681146106d057600080fd5b60006020828403121561155657600080fd5b81356115288161152f565b60006020828403121561157357600080fd5b5035919050565b60006020828403121561158c57600080fd5b8135801515811461152857600080fd5b600080604083850312156115af57600080fd5b50508035926020909101359150565b60008083601f8401126115d057600080fd5b50813567ffffffffffffffff8111156115e857600080fd5b6020830191508360208260051b850101111561160357600080fd5b9250929050565b60008060008060008060008060a0898b03121561162657600080fd5b8835975060208901359650604089013567ffffffffffffffff8082111561164c57600080fd5b6116588c838d016115be565b909850965060608b013591508082111561167157600080fd5b61167d8c838d016115be565b909650945060808b013591508082111561169657600080fd5b506116a38b828c016115be565b999c989b5096995094979396929594505050565b60008082840360608112156116cb57600080fd5b833592506040601f19820112156116e157600080fd5b506040516040810181811067ffffffffffffffff8211171561171357634e487b7160e01b600052604160045260246000fd5b60405260208401356117248161152f565b81526040939093013560208401525092909150565b60008060008060008060008060c0898b03121561175557600080fd5b88356117608161152f565b97506020890135965060408901359550606089013567ffffffffffffffff8082111561178b57600080fd5b818b0191508b601f83011261179f57600080fd5b8135818111156117ae57600080fd5b8c60208285010111156117c057600080fd5b6020830197508096505060808b0135945060a08b013591508082111561169657600080fd5b634e487b7160e01b600052601160045260246000fd5b818103818111156114f7576114f76117e5565b80820281158282048414176114f7576114f76117e5565b60008261184257634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811261187457600080fd5b83018035915067ffffffffffffffff82111561188f57600080fd5b60200191503681900382131561160357600080fd5b6bffffffffffffffffffffffff198560601b16815283601482015281836034830137600091016034019081529392505050565b6000808335601e198436030181126118ee57600080fd5b83018035915067ffffffffffffffff82111561190957600080fd5b6020019150600581901b360382131561160357600080fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611952576119526117e5565b5060010190565b60006020828403121561196b57600080fd5b81516115288161152f565b60005b83811015611991578181015183820152602001611979565b50506000910152565b600082516119ac818460208701611976565b9190910192915050565b6000602082840312156119c857600080fd5b5051919050565b60408152600083518060408401526119ee816060850160208801611976565b6001600160a01b0393909316602083015250601f91909101601f19160160600191905056fea26469706673582212201b1f45b8021dfa03ff3fe1d5aefd3f3a9b52a72088ffe4d6c7a422e61c44471964736f6c63430008110033";
