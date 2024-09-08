// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@chainlink/contracts/v0.8/dev/vrf/VRFConsumerBaseV2Plus.sol";
import {PokemonSource} from "./PokemonSource.sol";

contract Pokemon is ERC721, VRFConsumerBaseV2Plus {

    PokemonSource public pokemonSource;

    uint256 public counter;

    mapping(uint256 => uint256) public pokemonToSource;
    mapping(uint256 => uint256) public pokemonToHp;
    mapping(uint256 => uint256) public pokemonToAttack;
    mapping(uint256 => uint256) public pokemonToDefense;
    mapping(uint256 => uint256) public pokemonToSpeed;

    mapping(uint256 => address) public s_requestIdToSender; 


    // CHAINLINK STUFF 
    event RequestSent(uint256 requestId, uint32 numWords);
    event RequestFulfilled(uint256 requestId, uint256[] randomWords);

    struct RequestStatus {
        bool fulfilled; // whether the request has been successfully fulfilled
        bool exists; // whether a requestId exists
        uint256[] randomWords;
    }
    mapping(uint256 => RequestStatus)
        public s_requests; /* requestId --> requestStatus */

    // Your subscription ID.
    uint256 public s_subscriptionId;

    // Past request IDs.
    uint256[] public requestIds;
    uint256 public lastRequestId;

    // The gas lane to use, which specifies the maximum gas price to bump to.
    // For a list of available gas lanes on each network,
    // see https://docs.chain.link/docs/vrf/v2-5/supported-networks
    bytes32 public keyHash =
        0x787d74caea10b2b357790d5b5247c2f63d1d91572a9846f780606e4d953677ae;

    // Depends on the number of requested values that you want sent to the
    // fulfillRandomWords() function. Storing each word costs about 20,000 gas,
    // so 100,000 is a safe default for this example contract. Test and adjust
    // this limit based on the network that you select, the size of the request,
    // and the processing of the callback request in the fulfillRandomWords()
    // function.
    uint32 public callbackGasLimit = 100000;

    // The default is 3, but you can set this higher.
    uint16 public requestConfirmations = 3;

    // For this example, retrieve 2 random values in one request.
    // Cannot exceed VRFCoordinatorV2_5.MAX_NUM_WORDS.
    uint32 public numWords = 2;

    /**
     * HARDCODED FOR SEPOLIA
     * COORDINATOR: 0x9DdfaCa8183c41ad55329BdeeD9F6A8d53168B1B
     */




    constructor(address _pokemonSource, address _coordinator, uint256 _subId) ERC721("Pokemon", "PK") VRFConsumerBaseV2Plus(_coordinator){
        pokemonSource = PokemonSource(_pokemonSource);
        s_subscriptionId = _subId;
    }


    function requestPokemon() public payable returns (uint256 requestId) {
        // Will revert if subscription is not set and funded.
        requestId = s_vrfCoordinator.requestRandomWords(
            VRFV2PlusClient.RandomWordsRequest({
                keyHash: keyHash,
                subId: s_subscriptionId,
                requestConfirmations: requestConfirmations,
                callbackGasLimit: callbackGasLimit,
                numWords: numWords,
                extraArgs: VRFV2PlusClient._argsToBytes(
                    VRFV2PlusClient.ExtraArgsV1({
                        nativePayment: true
                    })
                )
            })
        );

        s_requests[requestId] = RequestStatus({
            randomWords: new uint256[](0),
            exists: true,
            fulfilled: false
        });
        requestIds.push(requestId);
        lastRequestId = requestId;

        s_requestIdToSender[requestId] = msg.sender;
        emit RequestSent(requestId, numWords);
        return requestId;
    }

    function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
        require(s_requests[_requestId].exists, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;

        counter++;
        address pokemonOwner = s_requestIdToSender[_requestId]; 

        if(_randomWords.length == 0){
            revert("Empty random words");
        }

        // first randomness
        uint256 randomness = _randomWords[0];

        uint256 sourceTokenId = randomness % pokemonSource.counter() + 1;
        pokemonToSource[counter] = sourceTokenId;

        pokemonToHp[counter] = pokemonSource.pokemonToHpMin(sourceTokenId) + ((randomness % 10000) + 1)/1000 *  (pokemonSource.pokemonToHpMax(sourceTokenId) - pokemonSource.pokemonToHpMin(sourceTokenId));

        //second randomness
        randomness = uint256(keccak256(abi.encodePacked(randomness)));
        pokemonToAttack[counter] = pokemonSource.pokemonToAttackMin(sourceTokenId) + ((randomness % 10000) + 1)/1000 *  (pokemonSource.pokemonToAttackMax(sourceTokenId) - pokemonSource.pokemonToAttackMin(sourceTokenId));

        //third randomness
        randomness = uint256(keccak256(abi.encodePacked(randomness)));
        pokemonToDefense[counter] = pokemonSource.pokemonToDefenseMin(sourceTokenId) + ((randomness % 10000) + 1)/1000 *  (pokemonSource.pokemonToDefenseMax(sourceTokenId) - pokemonSource.pokemonToDefenseMin(sourceTokenId));

        //fourth randomness
        randomness = uint256(keccak256(abi.encodePacked(randomness)));
        pokemonToSpeed[counter] = pokemonSource.pokemonToSpeedMin(sourceTokenId) + ((randomness % 10000) + 1)/1000 *  (pokemonSource.pokemonToSpeedMax(sourceTokenId) - pokemonSource.pokemonToSpeedMin(sourceTokenId));
        
        //fifth randomness
        randomness = uint256(keccak256(abi.encodePacked(randomness)));
        
        _mint(pokemonOwner, counter);
        emit RequestFulfilled(_requestId, _randomWords);
    }


}