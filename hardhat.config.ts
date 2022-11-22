import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-solhint';
import '@nomiclabs/hardhat-etherscan';

import 'hardhat-typechain';
import 'solidity-coverage';
import 'hardhat-gas-reporter';

const { alchemyAPIKey, deployerPrivateKey, etherscanAPIKey, coinmarketcapAPIKey } = require('./env.json');

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 2000
      }
    }
  },
  typechain: {
    outDir: 'ts-types/contracts',
    target: 'ethers-v5'
  },
  networks: {
    goerli: {
      url: `http://eth-goerli.alchemyapi.io/v2/${alchemyAPIKey}`,
      accounts: [deployerPrivateKey],
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyAPIKey}`,
      accounts: [deployerPrivateKey],
    },
  },
  etherscan: {
    apiKey: etherscanAPIKey,
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: coinmarketcapAPIKey,
  },
};

export default config;
