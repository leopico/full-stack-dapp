const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Hardhat!");
    await greeter.deployed();
    expect(await greeter.greet()).to.equal("Hello, Hardhat!");

    const setGreetingTx = await greeter.setGreeting("Hello, Myanmar!");
    //wait until the transcation is mined
    await setGreetingTx.wait();
    expect(await greeter.greet()).to.equal("Hello, Myanmar!");
  });
});
