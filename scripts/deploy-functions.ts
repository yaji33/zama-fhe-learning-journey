import { network } from "hardhat";
import { Functions } from "../types/ethers-contracts/index.js";

const { ethers } = await network.connect({
  network: "hardhatOp",
  chainType: "op",
});

async function main() {
  const Functions = await ethers.getContractFactory("Functions");
  //const functions = (await Functions.deploy()) as Functions;

   const functions = await Functions.deploy();

  await functions.waitForDeployment();

  console.log("Functions contract deployed at:", await functions.getAddress());
  console.log("Initial Value:", await functions.value());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

