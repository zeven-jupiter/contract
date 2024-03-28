// @ts-ignore
import { ethers } from 'hardhat'

async function main() {
    const Coin =  await ethers.getContractFactory("supremeNFT");
    const coin = await Coin.deploy();

    await coin.deployed();

    console.log(
        `supremeNFT deployed to ${coin.address}`
    );
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})