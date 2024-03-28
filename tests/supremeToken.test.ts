// @ts-ignore
import {ethers} from 'hardhat'


describe('supreme token', () => {
    const SUPREME_TESTNET_ADDRESS = '0xa4389D1ecc66126E98fF9F61Fd49A46EB9665Df6'

    const SUPREME_MAINNET_ADDRESS = "0x5ad6848dcA3246a6003a31B6639DdF741a98016A"

    it('transfer', async () => {
        const testCoinFactory = await ethers.getContractFactory(
            'supremeToken',
        )
        try {
            const contract = await testCoinFactory.attach(
                SUPREME_TESTNET_ADDRESS)
            const result = await contract.transfer("0xcC2b2D4BD3013C54af1B4Cbe490E8737356aE666",
                ethers.utils.parseEther('10'), {
                    gasLimit: 500000,
                })
            console.log(result)
        } catch (e) {
            console.log(e)
        }


    })

})


