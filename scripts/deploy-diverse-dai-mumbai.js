const hre = require("hardhat");

async function main() {
  const dDAI = await hre.ethers.getContractFactory("dDAI");
  const instance = await dDAI.deploy(80001);

  console.log("Diverse DAI deployed to:", instance.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
