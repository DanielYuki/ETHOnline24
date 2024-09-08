// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "forge-std/console.sol";

import "@chainlink/contracts/v0.8/mocks/VRFCoordinatorV2Mock.sol";

import {PokemonSource} from "../src/PokemonSource.sol";
import {Pokemon} from "../src/Pokemon.sol";


contract Deploy is Script {
    function setUp() public {}

    function run() external {
        vm.startBroadcast(vm.envUint("PRIVATE_KEY"));

        Pokemon pokemon = Pokemon(0x330F00Bbb1a954D5077957d8dd66A6060493E13D);


        pokemon.requestPokemon();

        vm.stopBroadcast();
    }
}