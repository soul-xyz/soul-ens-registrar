import { utils } from 'ethers'
import BalanceTree from './balance-tree'

const { isAddress, getAddress } = utils

interface MerkleDistributorInfo {
  merkleRoot: string
  claims: {
    [account: string]: {
      rootNode: string,
      label: string
    }
  }
}

type DataFormat = {
  owner: string,
  rootNode: string,
  label: string
}

export function parseBalanceMap(data: DataFormat[]): MerkleDistributorInfo {
  const dataByAddress = data.reduce<{
    [owner: string]: { rootNode: string, label: string }
  }>((memo, { owner, rootNode, label }) => {

    if (!isAddress(owner)) {
      throw new Error(`Found invalid address: ${owner}`)
    }
    const parsed = getAddress(owner)

    if (memo[parsed]) throw new Error(`Duplicate address: ${parsed}`)

    memo[parsed] = { rootNode, label }
    return memo
  }, {})

  const sortedAddresses = Object.keys(dataByAddress).sort()
  const treeArgs = sortedAddresses.map((owner) => ({ owner, ...dataByAddress[owner] }));
  // construct a tree
  const tree = new BalanceTree(treeArgs);

  // generate claims
  const claims = sortedAddresses.reduce<{
    [owner: string]: { rootNode: string; label: string; proof: string[]; }
  }>((memo, owner, index) => {
    const { rootNode, label } = dataByAddress[owner]
    const proof = tree.getProof(owner, rootNode, label);

    memo[owner] = {
      rootNode,
      label,
      proof
    }
    return memo
  }, {})

  return {
    merkleRoot: tree.getHexRoot(),
    claims,
  }
}