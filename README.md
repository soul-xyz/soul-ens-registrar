# Soul ENS Registrar

This registrar allows a relayer address to update a merkle-root that gates subdomain minting for some address.

The owner of the ENS must called _setApprovalForAll_ on the official ENS registry, and pass in the SoulRegistrar address. An example is provided below, and the soul.xyz website will have an interface to make this easier.

Once permissions are set up, the owner can communicate with the Soul API through the website to create a list of addresses that are able to mint subdomains. Membership permissions can be made one-by-one or via a membership NFT.

## Example Use

```javascript
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
```