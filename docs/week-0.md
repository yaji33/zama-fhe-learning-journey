# Week 0 – Environment Setup

## Goals

- Learn about the Ethereum Virtual Machine(EVM)
- Set up Solidity + TypeScript + Hardhat project
- Prepare structure for Solidity & FHE learning
- Run initial Counter contract test successfully

## Achievements/Learnings

- Grasped the basics of Transaction (world state change), Block (combination of transactions), World State (address to account state), Account (object of world state that also represents the address to account state), EOA (controlled by a priv key) vs Contract Account (contains EVM code) both using a 160-bit code, etc...
- Familiarization to Solidity file structure, data types, modifiers, Hardhat fundamentals, key components etc...
- Hardhat compiled and tested Counter.sol successfully
- Project organized with docs, experiments, and simple-dapp folders
- Confirmed Typechain and TS integration

## Learning Materials

- Sections on a basic Solidity program [ SPDX-License-Identifier → license for open-source clarity, pragma solidity → compiler version, contract → similar to a class, state variables → stored permanently on the blockchain, functions → define behaviors and can modify state ]
- Data Types [ uint, int -> Unsigned/signed integers (e.g., uint256) ~ bool, string, bytes -> Primitive types ~ address -> 20-byte identifier of accounts/contracts ~ mapping -> Key-value storage (mapping(address => uint)), extremely common ~ struct -> Custom-defined type ~ enum -> Used for readable states or choices ]
- Visibility & Modifiers [ public, private, internal, external, view, pure, payable, modifier ]
- Ether & Units [ 1 ether = 10^18 wei, msg.sender → the caller’s address, msg.value → Ether sent with the transaction ]
- Control Structures [ require(), assert(), revert() handle error management ]
- Common Commands [ npx hardhat compile, npx hardhat test, npx hardhat run scripts/deploy.ts, npx hardhat node]

## Sources

- https://takenobu-hs.github.io/downloads/ethereum_evm_illustrated.pdf
- https://docs.soliditylang.org/en/v0.8.31-pre.1/