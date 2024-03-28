// @ts-ignore
import { ethers } from 'hardhat'



describe('supreme NFT', () => {
  const SUPREME_TESTNET_ADDRESS = '0xF994b4bfB74F697ABC1A6C93bC0c956D42789483'

    const SUPREME_MAINNET_ADDRESS = "0x4f583515E65768adf5D5663F5c1aDe10fB829a4b"

    // 0x5f3f96df25b02b2bd0bd874af5bc5b486772e879

  it('mint', async () => {
    const testCoinFactory = await ethers.getContractFactory(
      'supremeNFT',
    )

        const contract = await testCoinFactory.attach(
            SUPREME_TESTNET_ADDRESS)

      try{
          const address ="0x2FD76965cA174BF89f0E95285f25752763375566";
          const url =  "https://ipfs.io/ipfs/QmY8RALyxHNN4QerXyTJSqTQbZn5xAg4vGLp5VgVsNSZ5h?filename=%E4%B8%8B%E8%BD%BD.jpeg"
        const result =   await contract.mint(address,url,{
              gasLimit: 500000,
          })
          console.log(result)
      }catch (e) {
          console.log(e)
      }

  })





    it('tokenUrl', async () => {
        const testCoinFactory = await ethers.getContractFactory(
            'supremeNFT',
        )

        const contract = await testCoinFactory.attach(
            SUPREME_TESTNET_ADDRESS)

        try{
           const result =   await contract.tokenURI(4,{
                gasLimit: 500000,
            })
            console.log(result)
        }catch (e) {
            console.log(e)
        }

    })
})


