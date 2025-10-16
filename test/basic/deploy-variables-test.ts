import { expect } from "chai";
import { network } from "hardhat";

const { ethers } = await network.connect();

describe("Variables", function () {
  it("Should deploy with correct initial state values", async function () {
    // Deploy the Variables contract
    const variables = await ethers.deployContract("Variables");
    await variables.waitForDeployment();

    // Check public state variables
    expect(await variables.name()).to.equal("Yaji");
    expect(await variables.usd()).to.equal(100000);
    expect(await variables.isDeveloper()).to.equal(true);
  });

  it("Should assign the correct contract owner", async function () {
    const [owner] = await ethers.getSigners();
    const variables = await ethers.deployContract("Variables");
    await variables.waitForDeployment();

    expect(await variables.owner()).to.equal(owner.address);
  });

  it("Should return valid block information", async function () {
    const variables = await ethers.deployContract("Variables");
    await variables.waitForDeployment();

    const [blockNumber, timestamp] = await variables.getBlockInfo();

    expect(blockNumber).to.be.a("bigint");
    expect(timestamp).to.be.a("bigint");

    console.log("Block Number:", blockNumber.toString());
    console.log("Block Timestamp:", timestamp.toString());
  });
});

// Result 

//  Variables
//    ✔ Should deploy with correct initial state values (234ms)
//    ✔ Should assign the correct contract owner
// Block Number: 3
// Block Timestamp: xxxxxxx
//    ✔ Should return valid block information

