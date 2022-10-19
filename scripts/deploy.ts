import { ethers, waffle } from "hardhat";
import fs from "fs";

const config = {
  production: {
    ENS_REGISTRY_ADDRESS: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  },
  test: {
    ENS_REGISTRY_ADDRESS: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
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

  let owner;
  let ensAddress;
  let ensRegistry;
  let ENS_REGISTRY_ADDRESS;
  let ROOT_NAME;
  let ROOT_NODE;

  if (networkName === "mainnet") {
    ({ ENS_REGISTRY_ADDRESS } = config.production);
  } else {
    ({ ENS_REGISTRY_ADDRESS } = config.test);
  }

  if (isLocal) {
    console.log("deploying ENS registry");
    const ENSRegistry = await ethers.getContractFactory("ENSRegistry");
    ensRegistry = await ENSRegistry.deploy();
    await ensRegistry.deployed();

    ensAddress = ensRegistry.address;
  } else {
    ensAddress = ENS_REGISTRY_ADDRESS;
  }

  console.log("Deploying PermissionContract");
  const PermissionContract = await ethers.getContractFactory("PermissionContract");
  const permissionContract = await PermissionContract.deploy();
  await permissionContract.deployed();

  console.log("Deploying ENS Resolver");
  const ENSResolver = await ethers.getContractFactory(
    "ENSResolver"
  );
  const ensResolver = await ENSResolver.deploy();
  await ensResolver.deployed();

  console.log("Deploying ENS Registrar");
  const ENSRegistrar = await ethers.getContractFactory(
    "ENSRegistrar"
  );
  const ensRegistrar = await ENSRegistrar.deploy(
    ensAddress,
    ensResolver.address,
    permissionContract.address
  );
  await ensRegistrar.deployed();

  // TODO: Would be good to have some kind of backup thing here, too.
  await ensResolver.transferOwnership(ensRegistrar.address);

  console.log("Setting registrar on Permission Contract");
  await permissionContract.setENSRegistrar(ensRegistrar.address);
  console.log("Transferring ownership of Resolver to Registrar");
  await permissionContract.transferOwnership(ensRegistrar.address);
  console.log("Updating ENS Reverse Registrar");

  const info = {
    Contracts: {
      PermissionContract: permissionContract.address,
      ENSResolver: ensResolver.address,
      ENSRegistrar: ensRegistrar.address,
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
