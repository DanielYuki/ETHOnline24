// SPDX-License-Identifier: MIT
pragma solidity >=0.8.13 <0.9.0;

import "@fhenixprotocol/contracts/FHE.sol";
import {Permissioned, Permission} from "@fhenixprotocol/contracts/access/Permissioned.sol";


contract BettleFhenix is FHE {
    constructor() FHE("BettleFhenix", "BTF") {
    }
}
