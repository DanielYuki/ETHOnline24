// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "@chainlink/contracts/v0.8/mocks/VRFCoordinatorV2Mock.sol";

import { BattleFhenix } from "../src/BattleFhenix.sol";


contract Deploy is Script {
    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        BattleFhenix battleFhenix = new BattleFhenix();

        console.log("Battle Fhenix address: ", address(battleFhenix));

        vm.stopBroadcast();
    }
}