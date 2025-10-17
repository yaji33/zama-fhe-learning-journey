import { expect } from "chai";
import { network } from "hardhat";
import { Functions } from "../../types/ethers-contracts/index.js";

const { ethers } = await network.connect();

describe("Functions", function () {
  let functions: Functions;

  beforeEach(async function () {
    const FunctionsFactory = await ethers.getContractFactory("Functions");
    functions = (await FunctionsFactory.deploy()) as Functions;
    await functions.waitForDeployment();
  });

  it("should deploy successfully", async function () {
    const address = await functions.getAddress();
    expect(address).to.properAddress;
  });

  it("should have an initial value of 0", async function () {
    const value = await functions.value();
    expect(value).to.equal(0);
  });

  it("should allow updating the value", async function () {
    await functions.setValue(100);
    const newValue = await functions.value();
    expect(newValue).to.equal(100);
  });
});
