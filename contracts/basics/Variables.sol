// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract Variables {

    // Sample state variables 

    string public name = "Yaji";
    uint256 public usd = 100000;
    bool public isDeveloper = true;


    // Sample global variable

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    function getBlockInfo() public view returns (uint256, uint256) {
        return (block.number, block.timestamp);
    }

}