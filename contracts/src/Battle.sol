// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";


import {Pokemon} from "./Pokemon.sol";

contract Battle is ERC721 {

    IERC20 public paymentToken;

    uint256 public counter;

    mapping(uint256 => address) public battleToMaker;
    mapping(uint256 => address) public battleToTaker;
    mapping(uint256 => uint256) public battleToAmount;
    mapping(uint256 => uint256[]) public battleToMakerPokemons;
    mapping(uint256 => uint256[]) public battleToTakerPokemons;

    event BattleCreated(uint256 battleId, address maker, uint256 amount);
    event BattleJoined(uint256 battleId, address taker);
    event BattleResolved(uint256 battleId, address winner);

    constructor(address _paymentToken) ERC721("Battle", "B") {
        paymentToken = IERC20(_paymentToken);
    }

    function createBattle(uint256 _amountToBet, uint256[] memory _pokemons) public returns (uint256) {
        counter++;
        battleToMaker[counter] = msg.sender;
        paymentToken.transferFrom(msg.sender, address(this), _amountToBet);
        _mint(msg.sender, counter);

        battleToAmount[counter] = _amountToBet;

        battleToMakerPokemons[counter] = _pokemons;

        emit BattleCreated(counter, msg.sender, _amountToBet);
        return counter;
    }

    function joinBattle(uint256 _battleId, uint256[] memory _pokemons) public {
        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToMaker[_battleId] != msg.sender, "Cannot join own battle");
        require(battleToTaker[_battleId] == address(0), "Battle already joined");

        paymentToken.transferFrom(msg.sender, address(this), battleToAmount[_battleId]);

        battleToTaker[_battleId] = msg.sender;

        battleToTakerPokemons[_battleId] = _pokemons;

        battleToAmount[_battleId] = battleToAmount[_battleId] * 2;

        emit BattleJoined(_battleId, msg.sender);
    }


    function resolveBattle(uint256 _battleId, address _winner) public {
        require(battleToMaker[_battleId] == msg.sender || battleToTaker[_battleId] == msg.sender, "Not part of the battle");
        require(battleToTaker[_battleId] != address(0), "Battle not joined yet");

        if(_winner == battleToMaker[_battleId]){
            paymentToken.transfer(battleToMaker[_battleId], battleToAmount[_battleId]);
        } else {
            paymentToken.transfer(battleToTaker[_battleId], battleToAmount[_battleId]);
        }

        _burn(_battleId);

        emit BattleResolved(_battleId, _winner);
    }

}
