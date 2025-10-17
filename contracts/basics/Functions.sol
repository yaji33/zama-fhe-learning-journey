// SPDX-License-Identifier: MIT

pragma solidity ^0.8.26;

contract Functions {

    uint256 public value;

    function setValue(uint256 _v) public {
        value = _v;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function double(uint256 _v) public pure returns (uint256) {
        return _v * 2;
    }

    function sendEther() public payable {}

}