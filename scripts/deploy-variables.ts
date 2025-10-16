import { network } from "hardhat";
import { Variables } from "../types/ethers-contracts/index.js";

const { ethers } = await network.connect({
  network: "hardhatOp",
  chainType: "op",
});

async function main() {
  const Variables = await ethers.getContractFactory("Variables");
  const variables = (await Variables.deploy()) as Variables;

  await variables.waitForDeployment();

  console.log("Variables contract deployed at:", await variables.getAddress());
  console.log("Owner:", await variables.owner());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
