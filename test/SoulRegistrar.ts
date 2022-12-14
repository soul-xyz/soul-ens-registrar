import {expect} from "chai";
import {ethers, waffle} from "hardhat";

import setup from "./setup";
import {parseBalanceMap} from "../merkle-distribution/parse-balance-map";

describe("SoulRegistrar", () => {
    // Contracts
    let soulRegistrar;
    // let ensRegistrar;
    let ensRegistry;
    let ensResolver;
    let admitOne;
    let admitTwo;

    // Accounts
    let owner;
    let account1;
    let account2;
    let account3;
    let relayer;

    // Fees
    let feeConfig;

    beforeEach(async () => {
        ({
            soulRegistrar,
            // ensRegistrar,
            ensRegistry,
            ensResolver,
            relayer,
            admitOne,
            admitTwo
        } = await setup());

        [owner, account1, account2, account3] = await ethers.getSigners();

        feeConfig = {
            recipient: account1.address,
            fee: ethers.utils.parseEther('0.001')
        };
    });

    const claimData = {
        "merkleRoot": "0x3d3e67e1580879652bce1393e5c826b3765ea82ae754b98f5d49f7154c1a06bb",
        "claims": {
            "0x012A4ddc4A4f669bAa7327A589F8bDc5e8b494A4": {
                "rootNode": "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                "label": "test",
                "proof": ["0xfed0d3817a55adf894ceb6a57a021d73ada2ffc8453d4d578ffb2625e4272bf1"]
            },
            "0xFB72CD75d0b9022810F7748Dd36D767836FBcBDE": {
                "rootNode": "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                "label": "another",
                "proof": ["0x7c7c3cfa754af2c0854e43498a32b1b5ba40f5196e2a03cf1698baac3817417b"]
            }
        }
    }
    const shard = ethers.utils.id("0");

    describe("deployed", () => {
        it("has registrable set to true", async () => {
            const isRegistrable = await soulRegistrar.registrable();
            expect(isRegistrable).to.eq(true);
        });
    });

    describe("#setRelayer", () => {
        describe("when called by an address that is not the owner", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).setRelayer(relayer.address);
                await expect(transaction).to.be.revertedWith(
                    "Ownable: caller is not the owner"
                );
            });
        });

        describe("when called by the owner", () => {
            it("updates the relayer variable appropriately", async () => {
                expect(await soulRegistrar.relayer()).to.eq(owner.address);
                await soulRegistrar.connect(owner).setRelayer(relayer.address);
                expect(await soulRegistrar.relayer()).to.eq(relayer.address);
            });
        });
    });

    describe("#setRegistrable", () => {
        describe("when called by an address that is not the owner", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).setRegistrable(false);
                await expect(transaction).to.be.revertedWith(
                    "Ownable: caller is not the owner"
                );
            });
        });

        describe("when called by the owner", () => {
            it("updates the registrable variable appropriately", async () => {
                await soulRegistrar.connect(owner).setRegistrable(false);
                expect(await soulRegistrar.registrable()).to.eq(false);

                await soulRegistrar.connect(owner).setRegistrable(true);
                expect(await soulRegistrar.registrable()).to.eq(true);
            });
        });
    });

    describe("#setMerkleRoot", () => {
        describe("when called by an address that is not the relayer", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).setMerkleRoot(shard, claimData.merkleRoot);
                await expect(transaction).to.be.revertedWith("Unauthorized()");
            });
        });

        describe("when called by relayer", () => {
            it("set the merkle root successfully", async () => {
                const transaction = soulRegistrar.connect(owner).setMerkleRoot(shard, claimData.merkleRoot);
                await expect(transaction).to.not.to.be.reverted;
                const merkleRoot = await soulRegistrar.merkleRoots(shard);
                expect(merkleRoot).to.eq("0x3d3e67e1580879652bce1393e5c826b3765ea82ae754b98f5d49f7154c1a06bb");
            });
        });
    });

    describe("#setRegistrationFee", () => {
        describe("when called by an address that is not the root provider", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).setRegistrationFee(
                    "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                    feeConfig
                );
                await expect(transaction).to.be.revertedWith("Unauthorized()");
            });
        });

        describe("when called by the root provider", () => {
            it("updates the feeConfigs variable appropriately", async () => {
                const transaction = soulRegistrar.connect(owner).setRegistrationFee(
                    "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                    feeConfig
                );
                await expect(transaction).to.emit(soulRegistrar, "FeeUpdated");
                const storedFeeConfig = await soulRegistrar
                    .feeConfigs("0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e");
                expect(storedFeeConfig.recipient).to.eq(account1.address);
            });
        });
    });

    describe("#setCommissionBips", () => {
        describe("when called by an address that is not the owner", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).setCommissionBips(10);
                await expect(transaction).to.be.revertedWith("Ownable: caller is not the owner");
            });
        });

        describe("when called by the owner", () => {
            describe("with invalid bips number", () => {
                it("reverts the transaction", async () => {
                    const transaction = soulRegistrar.connect(owner).setCommissionBips(1000000);
                    await expect(transaction).to.be.revertedWith("InvalidParams()");
                });
            })

            it("updates the commissionBips variable appropriately with all valid condition", async () => {
                const transaction = soulRegistrar.connect(owner).setCommissionBips(10);
                await expect(transaction).to.emit(soulRegistrar, "CommissionBipsUpdated");
                expect(await soulRegistrar.commissionBips()).to.eq(10);
            });
        });
    });

    describe("#registerWithProof", () => {
        // Quick detour here...
        // describe("ENSRegistry", () => {
        //     describe("#storeCurrentOwner", () => {
        //         it("it stores the current ENS owner", async () => {
        //             const node = ethers.utils.namehash("soul.xyz");
        //
        //             const ensOwner = await ensRegistry.owner(node);
        //             expect(ensOwner).to.eq(ensRegistrar.address);
        //
        //             const originalENSOwner = await ensRegistrar.connect(owner).originalOwner(node);
        //             expect(originalENSOwner).to.eq(originalOwner.address);
        //
        //             // These should not be the same.
        //             expect(originalENSOwner).not.to.eq(ensOwner);
        //
        //             // Now we're going to restore the owner.
        //             await ensRegistrar.connect(originalOwner).restoreOwner(node);
        //             const restoredOwner = await ensRegistry.owner(node);
        //             expect(restoredOwner).to.eq(originalENSOwner);
        //         });
        //     });
        // });

        beforeEach(async () => {
            const transaction = await soulRegistrar.connect(owner).setMerkleRoot(shard, claimData.merkleRoot);
            const receipt = await (await transaction).wait();
            // console.log(receipt);
        })

        it("has the correct merkle root", async () => {
            expect(
                await soulRegistrar.merkleRoots(shard)
            ).to.eq(claimData.merkleRoot);
        });

        describe("when given a shard that does not have a proof", () => {
            it("reverts the transaction", async () => {
                let incorrectShard = ethers.utils.id("4");
                const claimers = Object.keys(claimData.claims);
                const claimer = claimers[0];
                const firstClaim = claimData.claims[claimer];

                const transaction = soulRegistrar
                    .connect(account1)
                    .registerWithProof(
                        firstClaim.rootNode,
                        incorrectShard,
                        [claimer],
                        [firstClaim.label],
                        [firstClaim.proof]
                    );
                await expect(transaction).to.be.revertedWith("InvalidProof()");
            });
        });

        describe("when given a valid proof", () => {
            const claimers = Object.keys(claimData.claims);
            const claimer = claimers[0];
            const firstClaim = claimData.claims[claimer];
            const secondClaim = claimData.claims[claimers[1]];

            // // let transaction;
            // // let receipt;
            // // const label = "test";
            // // const initialTokens = 3;
            //
            // beforeEach(async () => {
            //     // const numTokens = BigNumber.from(REGISTRATION_COST).mul(initialTokens);
            //     // await token.connect(owner).mint(account1.address, numTokens);
            //     // // Note: Here we actually register a label for a different account,
            //     // // to test that it doesn't have to be the msg.sender's account that's registered.
            //     // transaction = await token
            //     //     .connect(account1)
            //     //     .register(label, account2.address);
            //     // receipt = await transaction.wait();
            // });

            describe(" but with insufficient fund for registration fee", () => {
                it("reverts the transaction", async () => {
                    soulRegistrar.connect(owner).setRegistrationFee(
                        firstClaim.rootNode,
                        feeConfig
                    );

                    const transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).to.be.revertedWith(
                        "InsufficientBalance()"
                    );
                });
            });

            describe("and all other conditions are correct", () => {
                it("takes fees and commissions correctly", async () => {
                    const provider = waffle.provider;
                    const originalBalance = await provider.getBalance(soulRegistrar.address);

                    soulRegistrar.connect(owner).setRegistrationFee(
                        firstClaim.rootNode,
                        feeConfig
                    );
                    soulRegistrar.connect(owner).setCommissionBips(9000);

                    const transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof],
                            {value: ethers.utils.parseEther('0.001')}
                        );
                    await expect(transaction).to.emit(soulRegistrar, "FeePayout");
                    const newBalance = await provider.getBalance(soulRegistrar.address);
                    expect(newBalance).to.be.gt(originalBalance);
                });

                it("registers the subdomain successfully", async () => {
                    const transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).not.to.be.reverted;

                    const subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(claimer);
                });

                describe(" for bulk claiming", () => {
                    it("reverts with unmatched input", async () => {
                        const transaction = soulRegistrar
                            .connect(account1)
                            .registerWithProof(
                                firstClaim.rootNode,
                                shard,
                                claimers,
                                [firstClaim.label],
                                [firstClaim.proof, secondClaim.proof]
                            );

                        await expect(transaction).to.be.revertedWith("InvalidParams()");

                        const transaction2 = soulRegistrar
                            .connect(account1)
                            .registerWithProof(
                                firstClaim.rootNode,
                                shard,
                                claimers,
                                [firstClaim.label, secondClaim.label],
                                [firstClaim.proof]
                            );

                        await expect(transaction2).to.be.revertedWith("InvalidParams()");
                    });

                    it("registers all the subdomains", async () => {
                        const transaction = soulRegistrar
                            .connect(account1)
                            .registerWithProof(
                                firstClaim.rootNode,
                                shard,
                                claimers,
                                [firstClaim.label, secondClaim.label],
                                [firstClaim.proof, secondClaim.proof]
                            );

                        await expect(transaction).not.to.be.reverted;

                        const subdomainFirstOwner = await ensRegistry.owner(
                            ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                        );
                        expect(subdomainFirstOwner).to.eq(claimers[0]);

                        const subdomainSecondOwner = await ensRegistry.owner(
                            ethers.utils.namehash(`${secondClaim.label}.soul.xyz`)
                        );
                        expect(subdomainSecondOwner).to.eq(claimers[1]);
                    });
                });
            });

            describe("when `registrable` is set to false", () => {
                it("reverts the transaction", async () => {
                    await soulRegistrar.connect(owner).setRegistrable(false);

                    const transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).to.be.revertedWith("RegistrationHasNotStarted()");

                    const subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(ethers.constants.AddressZero);
                });
            });

            describe("when a claim has already been made", () => {
                it("reverts the transaction", async () => {
                    let transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).not.to.be.reverted;

                    let subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(claimer);

                    transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimer],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).to.be.revertedWith("SubdomainAlreadyOwned()");

                    subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(claimer);
                });
            });

            describe("when a different claimer tries to claim with a proof", () => {
                it("reverts the transaction", async () => {
                    let transaction = soulRegistrar
                        .connect(account1)
                        .registerWithProof(
                            firstClaim.rootNode,
                            shard,
                            [claimers[1]],
                            [firstClaim.label],
                            [firstClaim.proof]
                        );

                    await expect(transaction).to.be.revertedWith("InvalidProof()");

                    const subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${firstClaim.label}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(ethers.constants.AddressZero);
                });
            });

            it("marks the permission as claimed", async () => {
            });

            it("registers the requested ENS label and assigns ownership to the owner", async () => {

            });

            describe("changing ENS ownership", () => {
                describe("labelOwner", () => {
                    it("returns the owner of the label", async () => {
                    });
                });

                describe("changeLabelOwner", () => {
                    describe("when the owner changes the label", () => {
                        beforeEach(async () => {
                        });

                        it("updates ownership", async () => {
                        });

                        it("updates resolved address", async () => {
                        });

                        it("prevents another account from changing ownership", async () => {

                        });
                    });
                });
            });
        });
    });

    describe("#registerWithNFTOwnership", () => {
        let merkleTreeInputs;
        let claimData;
        let shard = ethers.utils.id("0");

        beforeEach(async () => {
            merkleTreeInputs = [
                {
                    "owner": "0x012A4ddc4A4f669bAa7327A589F8bDc5e8b494A4",
                    "rootNode": "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                    "label": "test"
                },
                {
                    // Owner is a contract here.
                    "owner": admitOne.address,
                    "rootNode": "0x1bfa2242f886ea18243d1819dc7da69fdb0c3298e71a41c29522d7c9ac40d71e",
                    // Here a label being * means that it's a contract.
                    "label": "*"
                }
            ]

            // This claim data has one node that specifies a label of "*", which can
            // be used to claim via NFT ownership.
            claimData = parseBalanceMap(merkleTreeInputs);

            await soulRegistrar.connect(owner).setMerkleRoot(
                shard,
                claimData.merkleRoot
            );
        });

        describe("when `registrable` is set to false", () => {
            it("reverts the transaction", async () => {
                await soulRegistrar.connect(owner).setRegistrable(false);

                const tokenId = 1;
                const claim = claimData.claims[admitOne.address];
                const desiredLabel = "test";
                const transaction = soulRegistrar
                    .connect(account1)
                    .registerWithNFTOwnership(
                        admitOne.address,
                        tokenId,
                        claim.rootNode,
                        desiredLabel,
                        shard,
                        claim.proof
                    );

                await expect(transaction).to.be.revertedWith("RegistrationHasNotStarted()");

                const subdomainOwner = await ensRegistry.owner(
                    ethers.utils.namehash(`test.soul.xyz`)
                );
                expect(subdomainOwner).to.eq(ethers.constants.AddressZero);
            });
        });

        it("allows minting from ownership", async () => {
            const admitOneOwner = await admitOne.owner();
            const validOwner = account1.address;
            expect(owner.address).to.eq(admitOneOwner);
            const tokenId = 1;
            await admitOne.connect(owner).ownerMint(validOwner, tokenId);
            // Check that the balances updated properly.
            expect(await admitOne.ownerOf(tokenId)).to.eq(validOwner);
            expect(await admitOne.balanceOf(validOwner)).to.eq(1);
            // Now check that this owner can mint on the contract.
            let shard = ethers.utils.id("0");
            const desiredLabel = "king";
            const claimer = validOwner;
            const claim = claimData.claims[admitOne.address];
            const transaction = soulRegistrar
                .connect(account1)
                .registerWithNFTOwnership(
                    admitOne.address,
                    tokenId,
                    claim.rootNode,
                    desiredLabel,
                    shard,
                    claim.proof
                );

            await expect(transaction).not.to.be.reverted;

            const subdomainOwner = await ensRegistry.owner(
                ethers.utils.namehash(`${desiredLabel}.soul.xyz`)
            );
            expect(subdomainOwner).to.eq(claimer);

            // Also we should not be able to mint again.
            const transactionTwo = soulRegistrar
                .connect(account1)
                .registerWithNFTOwnership(
                    admitOne.address,
                    tokenId,
                    claim.rootNode,
                    `${desiredLabel}b`,
                    shard,
                    claim.proof
                );

            await expect(transactionTwo).to.be.revertedWith(
                "AlreadyClaimed()"
            );
        });

        describe("minting without right ownership", () => {
            describe("when minter does not own the NFT", () => {
                it("reverts the transaction", async () => {
                    const admitOneOwner = await admitOne.owner();
                    const validOwner = account1.address;
                    expect(owner.address).to.eq(admitOneOwner);

                    const validTokenId = 1;
                    await admitOne.connect(owner).ownerMint(validOwner, validTokenId);
                    // Check that the balances updated properly.
                    expect(await admitOne.ownerOf(validTokenId)).to.eq(validOwner);
                    expect(await admitOne.balanceOf(validOwner)).to.eq(1);

                    const admitOneLabel = "test";
                    const admitOneClaim = claimData.claims[admitOne.address];
                    const transaction = soulRegistrar
                        .connect(account2)
                        .registerWithNFTOwnership(
                            admitOne.address,
                            validTokenId,
                            admitOneClaim.rootNode,
                            admitOneLabel,
                            shard,
                            admitOneClaim.proof
                        );

                    await expect(transaction).to.be.revertedWith("Unauthorized()");

                    const subdomainOwnerAdmitOne = await ensRegistry.owner(
                        ethers.utils.namehash(`${admitOneLabel}.soul.xyz`)
                    );
                    expect(subdomainOwnerAdmitOne).to.eq(ethers.constants.AddressZero);
                });
            });

            describe("when minter with wrong token id", () => {
                it("does not allow minting", async () => {
                    const admitOneOwner = await admitOne.owner();
                    const validOwner = account1.address;
                    expect(owner.address).to.eq(admitOneOwner);

                    const validTokenId = 1;
                    await admitOne.connect(owner).ownerMint(validOwner, validTokenId);
                    // Check that the balances updated properly.
                    expect(await admitOne.ownerOf(validTokenId)).to.eq(validOwner);
                    expect(await admitOne.balanceOf(validOwner)).to.eq(1);

                    let shard = ethers.utils.id("0");
                    // Changing to tokenId 2 should disallow minting, since there is no owner.
                    const invalidTokenId = 2;

                    // Now check that this owner can mint on the contract.
                    const desiredLabel = "king";
                    const claim = claimData.claims[admitOne.address];
                    const transaction = soulRegistrar
                        .connect(account1)
                        .registerWithNFTOwnership(
                            admitOne.address,
                            invalidTokenId,
                            claim.rootNode,
                            desiredLabel,
                            shard,
                            claim.proof
                        );

                    await expect(transaction).to.be.revertedWith(
                        "ERC721: owner query for nonexistent token"
                    );

                    const subdomainOwner = await ensRegistry.owner(
                        ethers.utils.namehash(`${desiredLabel}.soul.xyz`)
                    );
                    expect(subdomainOwner).to.eq(ethers.constants.AddressZero);
                })
            });
        });

        it("does not allow minting with another ERC20", async () => {
            const admitTwoOwner = await admitTwo.owner();
            const validOwner = account1.address;
            expect(owner.address).to.eq(admitTwoOwner);

            const validTokenId = 1;
            await admitTwo.connect(owner).ownerMint(validOwner, validTokenId);
            // Check that the balances updated properly.
            expect(await admitTwo.ownerOf(validTokenId)).to.eq(validOwner);
            expect(await admitTwo.balanceOf(validOwner)).to.eq(1);

            // Changing to a different contract should not work.

            // Now check that this owner can mint on the contract.
            let shard = ethers.utils.id("0");
            const desiredLabel = "king";
            const claim = claimData.claims[admitOne.address];
            const transaction = soulRegistrar
                .connect(account1)
                .registerWithNFTOwnership(
                    admitTwo.address,
                    validTokenId,
                    claim.rootNode,
                    desiredLabel,
                    shard,
                    claim.proof
                );

            await expect(transaction).to.be.revertedWith(
                "InvalidProof()"
            );

            const subdomainOwner = await ensRegistry.owner(
                ethers.utils.namehash(`${desiredLabel}.soul.xyz`)
            );
            expect(subdomainOwner).to.eq(ethers.constants.AddressZero);
        })
    });

    describe("#withdrawFees", () => {
        describe("when it called by addressed is not owner", () => {
            it("reverts the transaction", async () => {
                const transaction = soulRegistrar.connect(account1).withdrawFees(account1.address);
                await expect(transaction).to.be.revertedWith("Ownable: caller is not the owner");
            });
        });

        describe("when called by the owner", () => {
            it("withdraws the balance", async () => {
                const transaction = soulRegistrar.connect(owner).withdrawFees(owner.address);
                await expect(transaction).to.emit(soulRegistrar, "FeeWithdrawal");
                await expect(transaction).not.to.be.reverted;
            });
        });
    });
});
