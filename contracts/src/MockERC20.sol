// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MockERC20 is ERC20 {
    constructor(address _to) ERC20("MockERC20", "MERC") {
        _mint(_to, 10000000000000000 ether);
    }
}