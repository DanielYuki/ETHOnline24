// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract PokemonSource is ERC721, Ownable {

    uint256 public counter;

    mapping(uint256 => uint256) public pokemonToHpMax;
    mapping(uint256 => uint256) public pokemonToHpMin;
    mapping(uint256 => uint256) public pokemonToAttackMax;
    mapping(uint256 => uint256) public pokemonToAttackMin;
    mapping(uint256 => uint256) public pokemonToDefenseMax;
    mapping(uint256 => uint256) public pokemonToDefenseMin;
    mapping(uint256 => uint256) public pokemonToSpeedMax;
    mapping(uint256 => uint256) public pokemonToSpeedMin;

    mapping(uint256 => string[]) public pokemonToPossibleTypes;
    mapping(uint256 => uint256[]) public pokemonToPossibleMoves;
    

    constructor(address _owner)  Ownable(_owner) ERC721("PokemonSource", "PS"){

    }

    function createPokemonSource(
        uint256 _hpMax,
        uint256 _hpMin,
        uint256 _attackMax,
        uint256 _attackMin,
        uint256 _defenseMax,
        uint256 _defenseMin,
        uint256 _speedMax,
        uint256 _speedMin,
        string[] memory _possibleTypes,
        uint256[] memory _possibleMoves
    ) public onlyOwner {
        counter++;
        pokemonToHpMax[counter] = _hpMax;
        pokemonToHpMin[counter] = _hpMin;
        pokemonToAttackMax[counter] = _attackMax;
        pokemonToAttackMin[counter] = _attackMin;
        pokemonToDefenseMax[counter] = _defenseMax;
        pokemonToDefenseMin[counter] = _defenseMin;
        pokemonToSpeedMax[counter] = _speedMax;
        pokemonToSpeedMin[counter] = _speedMin;
        pokemonToPossibleTypes[counter] = _possibleTypes;
        pokemonToPossibleMoves[counter] = _possibleMoves;

        _mint(address(this), counter);
    }


    function getRandomPokemonId() public view returns (uint256) {
        
    }

}
