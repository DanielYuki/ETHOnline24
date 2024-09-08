// SPDX-License-Identifier: MIT
pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";


contract BattleFhenix is Permissioned {
    address public owner;

    mapping(uint256 => address) public battleToMaker;
    mapping(uint256 => address) public battleToTaker;

    mapping(uint256 => euint256[]) public battleToMakerMoves;
    mapping(uint256 => euint256[]) public battleToTakerMoves;

    mapping(uint256 => bool) public battleActive;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function registerBattle(uint256 _battleId, address _maker, address _taker) public onlyOwner {
        require(msg.sender == owner, "Only owner can register battles");
        require(_maker != address(0), "Maker cannot be zero address");
        require(_taker != address(0), "Taker cannot be zero address");

        battleToMaker[_battleId] = _maker;
        battleToTaker[_battleId] = _maker;

        battleActive[_battleId] = true;
    }

    function registerMoveMaker(uint256 _battleId, inEuint256 calldata _move) public onlyOwner {

        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToTaker[_battleId] != address(0), "Battle does not exist");
        require(battleActive[_battleId], "Battle is not active");

        battleToMakerMoves[_battleId].push(FHE.asEuint256(_move));
    }

    function registerMoveTaker(uint256 _battleId, inEuint256 calldata _move) public onlyOwner {

        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToTaker[_battleId] != address(0), "Battle does not exist");
        require(battleActive[_battleId], "Battle is not active");

        battleToTakerMoves[_battleId].push(FHE.asEuint256(_move));
    }


    function endBattle(uint256 _battleId) public onlyOwner {
        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToTaker[_battleId] != address(0), "Battle does not exist");
        require(battleActive[_battleId], "Battle is not active");

        battleActive[_battleId] = false;
    }

    function revealMakerMoves(uint256 _battleId) public view returns (uint256[] memory) {
        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToTaker[_battleId] != address(0), "Battle does not exist");
        require(!battleActive[_battleId], "Battle is not active");

        euint256[] memory moves = battleToMakerMoves[_battleId];
        uint256[] memory revealedMoves = new uint256[](moves.length);

        for (uint256 i = 0; i < moves.length; i++) {
            revealedMoves[i] = FHE.decrypt(moves[i]);
        }

        return revealedMoves;
    }

    function revealTakerMoves(uint256 _battleId) public view returns (uint256[] memory) {
        require(battleToMaker[_battleId] != address(0), "Battle does not exist");
        require(battleToTaker[_battleId] != address(0), "Battle does not exist");
        require(!battleActive[_battleId], "Battle is not active");

        euint256[] memory moves = battleToTakerMoves[_battleId];
        uint256[] memory revealedMoves = new uint256[](moves.length);

        for (uint256 i = 0; i < moves.length; i++) {
            revealedMoves[i] = FHE.decrypt(moves[i]);
        }

        return revealedMoves;
    }

}
