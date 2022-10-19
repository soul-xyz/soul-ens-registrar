import MerkleTree from './merkle-tree'
import {utils} from 'ethers'

export default class BalanceTree {
    private readonly tree: MerkleTree

    constructor(
        data: {
            owner: string,
            rootNode: string,
            label: string,
        }[]) {
        this.tree = new MerkleTree(
            data.map(({owner, rootNode, label}, index) => {
                return BalanceTree.toNode(owner, rootNode, label)
            })
        )
    }

    public static verifyProof(
        owner: string,
        rootNode: string,
        label: string,
        proof: Buffer[],
        root: Buffer
    ): boolean {
        let pair = BalanceTree.toNode(owner, rootNode, label)
        for (const item of proof) {
            pair = MerkleTree.combinedHash(pair, item)
        }

        return pair.equals(root)
    }

    // keccak256(abi.encodePacked(owner_, rootNode_, label_))
    public static toNode(owner: string, rootNode: string, label: string): Buffer {
        return Buffer.from(
            utils.solidityKeccak256(['address', 'bytes32', 'string'], [owner, rootNode, label]).substring(2),
            'hex'
        )
    }

    public getHexRoot(): string {
        return this.tree.getHexRoot()
    }

    // returns the hex bytes32 values of the proof
    public getProof(owner: string, rootNode: string, label: string): string[] {
        return this.tree.getHexProof(BalanceTree.toNode(owner, rootNode, label))
    }
}