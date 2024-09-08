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

        PokemonSource pokemonSource = new PokemonSource(0x000ef5F21dC574226A06C76AAE7060642A30eB74);

        console.log("Pokemon Source address: ", address(pokemonSource));

        string[] memory types = new string[](2);
        types[0] = "Grass";
        types[1] = "Poison";

        uint256[] memory possibleMoves1 = new uint256[](10);
        possibleMoves1[0] = 1;
        possibleMoves1[1] = 2;
        possibleMoves1[2] = 3;
        possibleMoves1[3] = 4;
        possibleMoves1[4] = 6;
        possibleMoves1[5] = 7;
        possibleMoves1[6] = 8;
        possibleMoves1[7] = 41;
        possibleMoves1[8] = 55;
        possibleMoves1[9] = 74;

        uint256[] memory possibleMoves2 = new uint256[](10);
        possibleMoves2[0] = 2;
        possibleMoves2[1] = 3;
        possibleMoves2[2] = 4;
        possibleMoves2[3] = 5;
        possibleMoves2[4] = 6;
        possibleMoves2[5] = 7;
        possibleMoves2[6] = 8;
        possibleMoves2[7] = 41;
        possibleMoves2[8] = 55;
        possibleMoves2[9] = 74;

        uint256[] memory possibleMoves3 = new uint256[](10);
        possibleMoves3[0] = 4;
        possibleMoves3[1] = 5;
        possibleMoves3[2] = 6;
        possibleMoves3[3] = 7;
        possibleMoves3[4] = 8;
        possibleMoves3[5] = 41;
        possibleMoves3[6] = 55;
        possibleMoves3[7] = 74;


        pokemonSource.createPokemonSource(
            "Bulbasaur",
            50,
            40,
            56,
            44,
            44,
            44,
            50,
            40,
            types,
            possibleMoves1
        );

        pokemonSource.createPokemonSource(
            "Ivysaur",
            65,
            55,
            70,
            58,
            70,
            58,
            65,
            55,
            types,
            possibleMoves2
        );

        pokemonSource.createPokemonSource(
            "Venusaur",
            90,
            76,
            92,
            76,
            93,
            77,
            90,
            76,
            types,
            possibleMoves3
        );

        //VRFCoordinatorV2Mock coordinator = new VRFCoordinatorV2Mock(1000000000000000,50000000000);
        

        // console.log("Pokemon Source address: ", address(pokemonSource));
        // console.log("Total Supply: ", pokemonSource.balanceOf(address(pokemonSource)));
        // console.log("Coordinator address: ", address(coordinator));

        address coordinator = 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B;

        uint256 subId =  44185188200136474581824303170604043494972738660298815964976697079211526016416;
        Pokemon pokemon = new Pokemon(address(pokemonSource), address(coordinator), subId);

        // console.log("Subscription ID: ", subId);
        console.log("Pokemon address: ", address(pokemon));

        // coordinator.fundSubscription(uint64(subId), 1000000 ether);

        // coordinator.addConsumer(uint64(subId), address(pokemon));
    
        // //pokemon.requestPokemon();
        // console.log("total supply: ", pokemon.lastRequestId());

        vm.stopBroadcast();
    }
}