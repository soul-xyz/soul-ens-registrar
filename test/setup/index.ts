import {ethers} from "hardhat";
import {ZERO_BYTES32} from "../config/constants";
import {SoulRegistrar} from "../../ts-types/contracts";

async function setup() {
  const [owner] = await ethers.getSigners();
  const usdcAddress = "0x07865c6E87B9F70255377e024ace6630C1Eaa37F"; //Goerli

  const ENSRegistry = await ethers.getContractFactory("ENSRegistry");
  const ensRegistry = await ENSRegistry.deploy();
  await ensRegistry.deployed();

  const ENSResolver = await ethers.getContractFactory(
    "ENSResolver"
  );
  const ensResolver = await ENSResolver.deploy();
  await ensResolver.deployed();

  const SoulRegistrar = await ethers.getContractFactory("SoulRegistrar");
  const soulRegistrar = await SoulRegistrar.deploy(
    ensRegistry.address,
    ensResolver.address,
    usdcAddress
  );
  await soulRegistrar.deployed();


  // Setup root.
  await ensRegistry.setSubnodeOwner(
    ZERO_BYTES32,
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("xyz")),
    owner.address
  );
  await ensRegistry.setSubnodeOwner(
    ethers.utils.namehash("xyz"),
    ethers.utils.keccak256(ethers.utils.toUtf8Bytes("soul")),
    owner.address
  );
  await ensRegistry.connect(owner).setApprovalForAll(
    soulRegistrar.address,
    true
  );

  await ensResolver.connect(owner).setApprovalForAll(
    soulRegistrar.address,
    true
  );

  // Deploy Admit One Token.
  const AdmitOne = await ethers.getContractFactory(
    "AdmitOne"
  );
  const admitOne = await AdmitOne.deploy(owner.address);
  await admitOne.deployed();

  // A second, similar contract.
  const admitTwo = await AdmitOne.deploy(owner.address);
  await admitTwo.deployed();

  return {
    relayer: admitTwo,
    soulRegistrar,
    ensRegistry,
    ensResolver,
    admitOne,
    admitTwo
  };
}

export default setup;
