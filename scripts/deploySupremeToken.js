const {ethers} = require("hardhat");

async function main() {
    const Coin =  await ethers.getContractFactory("supremeToken");
    const coin = await Coin.deploy();

    await coin.deployed();

    console.log(
        `supremeToken deployed to ${coin.address}`
    );
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})