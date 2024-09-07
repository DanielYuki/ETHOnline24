// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract PokemonSource is ERC721, Ownable {
    

    constructor() ERC721("PokemonSource", "PS") {

    }
}
