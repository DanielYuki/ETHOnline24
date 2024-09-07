// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./PokemonSource.sol";

contract Pokemon is ERC721 {

    PokemonSource public pokemonSource;

    constructor(address _pokemonSource) ERC721("Pokemon", "PK") {
        pokemonSource = PokemonSource(_pokemonSource);
    }

}