require('dotenv').config()
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");




const getAccounts = (privateKeys: string | undefined): Array<string> => {
    if (!privateKeys) {
        return []
    }

    const privateKeyArr = privateKeys.split(',')
    return privateKeyArr
        .filter((privateKey) => {
            // Filter empty strings, no empty strings should occupy array positions
            return privateKey.trim().length > 0
        })
        .map((privateKey) => {
            const tempPrivateKey = privateKey.trim()
            if (tempPrivateKey.startsWith('0x')) {
                return tempPrivateKey
            }
            return `0x${tempPrivateKey}`
        })
}


const COMPILER_SETTINGS = {
    optimizer: {
        enabled: true,
        runs: 1000,
    },
}


module.exports = {
    solidity: {
        compilers: [
            {
                version: '0.8.6',
                settings: COMPILER_SETTINGS,
            },
        ],
    },

    defaultNetwork: "testnet",
    networks: {
        hardhat: {},
        testnet: {
            url: process.env.TESTNET_URL,
            accounts: getAccounts(process.env.TESTNET_PRIVATE_KEY),
        },
        mainnet: {
            url: process.env.MAINNET_URL,
            accounts: getAccounts(process.env.MAINNET_PRIVATE_KEY),
        }
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
        customChains: [
            {
                network: 'testnet',
                chainId: 97,
                urls: {
                    apiURL: 'https://api-testnet.bscscan.com/api',
                    browserURL: 'https://testnet.bscscan.com/',
                },
            },
        ],
    },
}

