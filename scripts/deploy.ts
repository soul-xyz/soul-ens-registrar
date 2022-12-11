import { ethers, waffle } from "hardhat";
import fs from "fs";

const config = {
  production: {
    OWNER_ADDRESS: "0xbffb74Cd77bcDB7418F30A6734f8e0991a1d6Db3", // The official Soul multisig
    ENS_REGISTRY_ADDRESS: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    ENS_PUBLIC_RESOLVER_ADDRESS: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    USDC_ADDRESS: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  test: {
    OWNER_ADDRESS: "0xDF5657aB94dD8927A63E4c3043d3d57a3b552aa7", // Graeme's multisig signer address 1
    ENS_REGISTRY_ADDRESS: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    ENS_PUBLIC_RESOLVER_ADDRESS: "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41",
    USDC_ADDRESS: "0x07865c6E87B9F70255377e024ace6630C1Eaa37F", //Goerli
  },
};

const NETWORK_MAP = {
  "1": "mainnet",
  "3": "ropsten",
  "4": "rinkeby",
  "5": "goerli",
  "1337": "hardhat",
  "31337": "hardhat",
};

let isLocal = false;

async function main() {
  const chainId = (await waffle.provider.getNetwork()).chainId;
  const networkName = NETWORK_MAP[chainId];

  console.log(`Deploying to ${networkName}`);

  isLocal = networkName === "hardhat";

  let ensRegistryAddress;
  let ensRegistry;
  let ensResolverAddress;
  let usdcAddress;
  let OWNER_ADDRESS;
  let ENS_REGISTRY_ADDRESS;
  let ENS_PUBLIC_RESOLVER_ADDRESS;
  let USDC_ADDRESS;
  let admitOneAddress;

  if (networkName === "mainnet") {
    ({ OWNER_ADDRESS, ENS_REGISTRY_ADDRESS, ENS_PUBLIC_RESOLVER_ADDRESS, USDC_ADDRESS } = config.production);
  } else {
    ({ OWNER_ADDRESS, ENS_REGISTRY_ADDRESS, ENS_PUBLIC_RESOLVER_ADDRESS, USDC_ADDRESS } = config.test);

    console.log("Deploying AdmitOne");

    // Deploy Admit One Token for testing.
    const AdmitOne = await ethers.getContractFactory(
        "AdmitOne"
    );
    const admitOne = await AdmitOne.deploy(
        "0x18Ae47C97aFcb1879Ae0114793d9A87549493234"
    );
    admitOneAddress = (await admitOne.deployed()).address;
    console.log({admitOneAddress});
  }

  if (networkName != "mainnet") {
    console.log("deploying ENS registry");
    const ENSRegistry = await ethers.getContractFactory("ENSRegistry");
    ensRegistry = await ENSRegistry.deploy();
    await ensRegistry.deployed();

    ensRegistryAddress = ensRegistry.address;
    console.log({ensRegistryAddress});

    console.log("deploying ENS Resolver");
    const ENSResolver = await ethers.getContractFactory("ENSResolver");
    const ensResolver = await ENSResolver.deploy();
    await ensResolver.deployed();

    ensResolverAddress = ensResolver.address;
    console.log({ensResolverAddress});
  } else {
    ensRegistryAddress = ENS_REGISTRY_ADDRESS;
    ensResolverAddress = ENS_PUBLIC_RESOLVER_ADDRESS;
    usdcAddress = USDC_ADDRESS;
  }

  console.log("Deploying SoulRegistrar");
  const SoulRegistrarContract = await ethers.getContractFactory("SoulRegistrar");
  const soulRegistrarContract = await SoulRegistrarContract.deploy(
    ensRegistryAddress,
    ensResolverAddress,
    usdcAddress,
  );
  await soulRegistrarContract.deployed();

  await soulRegistrarContract.transferOwnership(OWNER_ADDRESS);

  const info = {
    Contracts: {
      admitOneAddress,
      SoulRegistrarAddress: soulRegistrarContract.address
    },
  };

  console.log(info);

  if (!isLocal) {
    fs.writeFileSync(
      `${__dirname}/../networks/${networkName}.json`,
      JSON.stringify(info, null, 2)
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
