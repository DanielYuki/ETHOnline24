// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";


import { Battle } from "../src/Battle.sol";
import {MockERC20} from "../src/MockERC20.sol";


contract Deploy is Script {
    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        address mockERC20 = 0xfFF918903C42fFa7713d40d59a9708b4ed91f48f;

        Battle battle = Battle(0xe319b04198e4192a28A4eCcB7E2ea4A26e2193Ce);

        uint256[] memory pokemons = new uint256[](3);
        pokemons[0] = 1;
        pokemons[1] = 2;
        pokemons[2] = 3;

        MockERC20 token = MockERC20(mockERC20);

        token.approve(address(battle), 1000000000000000000000 ether);

        //battle.createBattle(100, pokemons);

        console.log("Battle address: ", address(battle));

        vm.stopBroadcast();
    }
}