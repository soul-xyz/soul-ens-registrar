import {ethers} from "hardhat";
import {ZERO_BYTES32} from "../config/constants";
import {utils} from "ethers";

async function setup() {
    const [owner] = await ethers.getSigners();

    const ENSRegistry = await ethers.getContractFactory("ENSRegistry");
    const ensRegistry = await ENSRegistry.deploy();
    await ensRegistry.deployed();

    const PermissionContract = await ethers.getContractFactory("PermissionContract");
    const permissionContract = await PermissionContract.deploy();
    await permissionContract.deployed();

    const ENSResolver = await ethers.getContractFactory(
        "ENSResolver"
    );
    const ensResolver = await ENSResolver.deploy();
    await ensResolver.deployed();

    const ENSRegistrar = await ethers.getContractFactory(
        "ENSRegistrar"
    );
    const ensRegistrar = await ENSRegistrar.deploy(
        ensRegistry.address,
        ensResolver.address,
        permissionContract.address
    );
    await ensRegistrar.deployed();

    await permissionContract.setENSRegistrar(ensRegistrar.address);
    await ensResolver.transferOwnership(ensRegistrar.address);

    // Setup root.
    await ensRegistry.setSubnodeOwner(
        ZERO_BYTES32,
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes("xyz")),
        owner.address
    );
    // This isn't strictly necessary, but let's imagine the owner is `owner` first.
    await ensRegistry.setSubnodeOwner(
        ethers.utils.namehash("xyz"),
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes("soul")),
        owner.address
    );

    // Now store the current owner on the registrar!
    const node = utils.namehash("soul.xyz");
    await ensRegistrar.connect(owner).storeCurrentOwner(node);
    const storedOwner = await ensRegistrar.connect(owner).originalOwner(node);

    // Now transfer it across.
    await ensRegistry.setSubnodeOwner(
        ethers.utils.namehash("xyz"),
        ethers.utils.keccak256(ethers.utils.toUtf8Bytes("soul")),
        ensRegistrar.address
    );

    return {
        originalOwner: owner,
        permissionContract,
        ensRegistrar,
        ensRegistry,
        ensResolver,
    };
}

export default setup;
