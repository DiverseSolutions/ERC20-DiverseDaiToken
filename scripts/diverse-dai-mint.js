const hre = require("hardhat");

async function main() {
  const [ deployer ] = await hre.ethers.getSigners();

  const tokenInstance = await hre.ethers.getContractAt("dDAI",process.env.DIVERSE_DAI_ADDRESS);

  await tokenInstance.mint(deployer.address,hre.ethers.utils.parseEther("10000000000",18))

  console.log("Diverse DAI Token Name :", await tokenInstance.name());
  console.log("Diverse DAI Token Symbol :", await tokenInstance.symbol());
  console.log("Diverse DAI Token Decimals :", await tokenInstance.decimals());
  console.log("Diverse DAI Token Total Supply :", (await tokenInstance.totalSupply()).toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

