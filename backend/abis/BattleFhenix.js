const BattleFhenixByteCode = {
    "abi": [
        {
            "type": "constructor",
            "inputs": [],
            "stateMutability": "nonpayable"
        },
        {
            "type": "function",
            "name": "eip712Domain",
            "inputs": [],
            "outputs": [
                {
                    "name": "fields",
                    "type": "bytes1",
                    "internalType": "bytes1"
                },
                {
                    "name": "name",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "version",
                    "type": "string",
                    "internalType": "string"
                },
                {
                    "name": "chainId",
                    "type": "uint256",
                    "internalType": "uint256"
                },
                {
                    "name": "verifyingContract",
                    "type": "address",
                    "internalType": "address"
                },
                {
                    "name": "salt",
                    "type": "bytes32",
                    "internalType": "bytes32"
                },
                {
                    "name": "extensions",
                    "type": "uint256[]",
                    "internalType": "uint256[]"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "function",
            "name": "owner",
            "inputs": [],
            "outputs": [
                {
                    "name": "",
                    "type": "address",
                    "internalType": "address"
                }
            ],
            "stateMutability": "view"
        },
        {
            "type": "event",
            "name": "EIP712DomainChanged",
            "inputs": [],
            "anonymous": false
        },
        {
            "type": "error",
            "name": "InvalidShortString",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SignerNotMessageSender",
            "inputs": []
        },
        {
            "type": "error",
            "name": "SignerNotOwner",
            "inputs": []
        },
        {
            "type": "error",
            "name": "StringTooLong",
            "inputs": [
                {
                    "name": "str",
                    "type": "string",
                    "internalType": "string"
                }
            ]
        }
    ],
    "bytecode": {
        "object": "0x61016060405234801561001157600080fd5b506040805180820182526011815270233432b734bc102832b936b4b9b9b4b7b760791b602080830191909152825180840190935260038352620312e360ec1b908301529061006082600061011c565b6101205261006f81600161011c565b61014052815160208084019190912060e052815190820120610100524660a0526100fc60e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052600280546001600160a01b03191633179055610369565b6000602083511015610138576101318361014f565b9050610149565b816101438482610237565b5060ff90505b92915050565b600080829050601f81511115610183578260405163305a27a960e01b815260040161017a91906102f6565b60405180910390fd5b805161018e82610345565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806101c057607f821691505b6020821081036101e057634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610232576000816000526020600020601f850160051c8101602086101561020f5750805b601f850160051c820191505b8181101561022e5782815560010161021b565b5050505b505050565b81516001600160401b0381111561025057610250610196565b6102648161025e84546101ac565b846101e6565b602080601f83116001811461029957600084156102815750858301515b600019600386901b1c1916600185901b17855561022e565b600085815260208120601f198616915b828110156102c8578886015182559484019460019091019084016102a9565b50858210156102e65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006020808352835180602085015260005b8181101561032457858101830151858201604001528201610308565b506000604082860101526040601f19601f8301168501019250505092915050565b805160208083015191908110156101e05760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161038e6103b360003960006101090152600060d70152600050506000505060005050600050506000505061038e6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806384b0196e1461003b5780638da5cb5b1461005f575b600080fd5b61004361008a565b6040516100569796959493929190610285565b60405180910390f35b600254610072906001600160a01b031681565b6040516001600160a01b039091168152602001610056565b60006060806000806000606061009e6100d0565b6100a6610102565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606100fd7f0000000000000000000000000000000000000000000000000000000000000000600061012b565b905090565b60606100fd7f000000000000000000000000000000000000000000000000000000000000000060015b606060ff83146101455761013e836101d8565b90506101d2565b8180546101519061031e565b80601f016020809104026020016040519081016040528092919081815260200182805461017d9061031e565b80156101ca5780601f1061019f576101008083540402835291602001916101ca565b820191906000526020600020905b8154815290600101906020018083116101ad57829003601f168201915b505050505090505b92915050565b606060006101e583610217565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156101d257604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b8181101561026557602081850181015186830182015201610249565b506000602082860101526020601f19601f83011685010191505092915050565b60ff60f81b881681526000602060e060208401526102a660e084018a61023f565b83810360408501526102b8818a61023f565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b8181101561030c578351835292840192918401916001016102f0565b50909c9b505050505050505050505050565b600181811c9082168061033257607f821691505b60208210810361035257634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220d3b9bc438ffe27bc2dfa916dc002efbd2fbacb096e3fca2b6c0910e6e633fe9e64736f6c63430008180033",
        "sourceMap": "204:114:16:-:0;;;273:43;;;;;;;;;-1:-1:-1;3328:431:9;;;;;;;;;;;-1:-1:-1;;;3328:431:9;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3328:431:9;;;;;3401:45;3328:431;-1:-1:-1;3401:30:9;:45::i;:::-;3393:53;;3467:51;:7;3501:16;3467:33;:51::i;:::-;3456:62;;3542:22;;;;;;;;;;3528:36;;3591:25;;;;;;3574:42;;3644:13;3627:30;;3692:23;4226:11;;4239:14;;4204:80;;;2079:95;4204:80;;;2985:25:17;3026:18;;;3019:34;;;;3069:18;;;3062:34;4255:13:9;3112:18:17;;;3105:34;4278:4:9;3155:19:17;;;3148:61;4168:7:9;;2957:19:17;;4204:80:9;;;;;;;;;;;;4194:91;;;;;;4187:98;;4113:179;;3692:23;3667:48;;-1:-1:-1;;3747:4:9;3725:27;;293:5:16;:18;;-1:-1:-1;;;;;;293:18:16;301:10;293:18;;;204:114;;2914:340:5;3010:11;3059:2;3043:5;3037:19;:24;3033:215;;;3084:20;3098:5;3084:13;:20::i;:::-;3077:27;;;;3033:215;3161:5;3135:46;3176:5;3161;3135:46;:::i;:::-;-1:-1:-1;1390:66:5;;-1:-1:-1;3033:215:5;2914:340;;;;:::o;1708:286::-;1773:11;1796:17;1822:3;1796:30;;1854:2;1840:4;:11;:16;1836:72;;;1893:3;1879:18;;-1:-1:-1;;;1879:18:5;;;;;;;;:::i;:::-;;;;;;;;1836:72;1974:11;;1957:13;1974:4;1957:13;:::i;:::-;1949:36;;1708:286;-1:-1:-1;;;1708:286:5:o;14:127:17:-;75:10;70:3;66:20;63:1;56:31;106:4;103:1;96:15;130:4;127:1;120:15;146:380;225:1;221:12;;;;268;;;289:61;;343:4;335:6;331:17;321:27;;289:61;396:2;388:6;385:14;365:18;362:38;359:161;;442:10;437:3;433:20;430:1;423:31;477:4;474:1;467:15;505:4;502:1;495:15;359:161;;146:380;;;:::o;657:543::-;759:2;754:3;751:11;748:446;;;795:1;819:5;816:1;809:16;863:4;860:1;850:18;933:2;921:10;917:19;914:1;910:27;904:4;900:38;969:4;957:10;954:20;951:47;;;-1:-1:-1;992:4:17;951:47;1047:2;1042:3;1038:12;1035:1;1031:20;1025:4;1021:31;1011:41;;1102:82;1120:2;1113:5;1110:13;1102:82;;;1165:17;;;1146:1;1135:13;1102:82;;;1106:3;;;748:446;657:543;;;:::o;1376:1345::-;1496:10;;-1:-1:-1;;;;;1518:30:17;;1515:56;;;1551:18;;:::i;:::-;1580:97;1670:6;1630:38;1662:4;1656:11;1630:38;:::i;:::-;1624:4;1580:97;:::i;:::-;1732:4;;1789:2;1778:14;;1806:1;1801:663;;;;2508:1;2525:6;2522:89;;;-1:-1:-1;2577:19:17;;;2571:26;2522:89;-1:-1:-1;;1333:1:17;1329:11;;;1325:24;1321:29;1311:40;1357:1;1353:11;;;1308:57;2624:81;;1771:944;;1801:663;604:1;597:14;;;641:4;628:18;;-1:-1:-1;;1837:20:17;;;1955:236;1969:7;1966:1;1963:14;1955:236;;;2058:19;;;2052:26;2037:42;;2150:27;;;;2118:1;2106:14;;;;1985:19;;1955:236;;;1959:3;2219:6;2210:7;2207:19;2204:201;;;2280:19;;;2274:26;-1:-1:-1;;2363:1:17;2359:14;;;2375:3;2355:24;2351:37;2347:42;2332:58;2317:74;;2204:201;-1:-1:-1;;;;;2451:1:17;2435:14;;;2431:22;2418:36;;-1:-1:-1;1376:1345:17:o;3220:548::-;3332:4;3361:2;3390;3379:9;3372:21;3422:6;3416:13;3465:6;3460:2;3449:9;3445:18;3438:34;3490:1;3500:140;3514:6;3511:1;3508:13;3500:140;;;3609:14;;;3605:23;;3599:30;3575:17;;;3594:2;3571:26;3564:66;3529:10;;3500:140;;;3504:3;3689:1;3684:2;3675:6;3664:9;3660:22;3656:31;3649:42;3759:2;3752;3748:7;3743:2;3735:6;3731:15;3727:29;3716:9;3712:45;3708:54;3700:62;;;;3220:548;;;;:::o;3773:297::-;3891:12;;3938:4;3927:16;;;3921:23;;3891:12;3956:16;;3953:111;;;-1:-1:-1;;4030:4:17;4026:17;;;;4023:1;4019:25;4015:38;4004:50;;3773:297;-1:-1:-1;3773:297:17:o;:::-;204:114:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        "linkReferences": {}
    },
    "deployedBytecode": {
        "object": "0x608060405234801561001057600080fd5b50600436106100365760003560e01c806384b0196e1461003b5780638da5cb5b1461005f575b600080fd5b61004361008a565b6040516100569796959493929190610285565b60405180910390f35b600254610072906001600160a01b031681565b6040516001600160a01b039091168152602001610056565b60006060806000806000606061009e6100d0565b6100a6610102565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606100fd7f0000000000000000000000000000000000000000000000000000000000000000600061012b565b905090565b60606100fd7f000000000000000000000000000000000000000000000000000000000000000060015b606060ff83146101455761013e836101d8565b90506101d2565b8180546101519061031e565b80601f016020809104026020016040519081016040528092919081815260200182805461017d9061031e565b80156101ca5780601f1061019f576101008083540402835291602001916101ca565b820191906000526020600020905b8154815290600101906020018083116101ad57829003601f168201915b505050505090505b92915050565b606060006101e583610217565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156101d257604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b8181101561026557602081850181015186830182015201610249565b506000602082860101526020601f19601f83011685010191505092915050565b60ff60f81b881681526000602060e060208401526102a660e084018a61023f565b83810360408501526102b8818a61023f565b606085018990526001600160a01b038816608086015260a0850187905284810360c08601528551808252602080880193509091019060005b8181101561030c578351835292840192918401916001016102f0565b50909c9b505050505050505050505050565b600181811c9082168061033257607f821691505b60208210810361035257634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220d3b9bc438ffe27bc2dfa916dc002efbd2fbacb096e3fca2b6c0910e6e633fe9e64736f6c63430008180033",
        "sourceMap": "204:114:16:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5144:557:9;;;:::i;:::-;;;;;;;;;;;;;:::i;:::-;;;;;;;;248:20:16;;;;;-1:-1:-1;;;;;248:20:16;;;;;;-1:-1:-1;;;;;1870:32:17;;;1852:51;;1840:2;1825:18;248:20:16;1706:203:17;5144:557:9;5242:13;5269:18;5301:21;5336:15;5365:25;5404:12;5430:27;5533:13;:11;:13::i;:::-;5560:16;:14;:16::i;:::-;5668;;;5652:1;5668:16;;;;;;;;;-1:-1:-1;;;5482:212:9;;;-1:-1:-1;5482:212:9;;-1:-1:-1;5590:13:9;;-1:-1:-1;5625:4:9;;-1:-1:-1;5652:1:9;-1:-1:-1;5668:16:9;-1:-1:-1;5482:212:9;-1:-1:-1;5144:557:9:o;6021:126::-;6067:13;6099:41;:5;6126:13;6099:26;:41::i;:::-;6092:48;;6021:126;:::o;6473:135::-;6522:13;6554:47;:8;6584:16;3385:267:5;3479:13;1390:66;3508:46;;3504:142;;3577:15;3586:5;3577:8;:15::i;:::-;3570:22;;;;3504:142;3630:5;3623:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3504:142;3385:267;;;;:::o;2078:405::-;2137:13;2162:11;2176:16;2187:4;2176:10;:16::i;:::-;2300:14;;;2311:2;2300:14;;;;;;;;;2162:30;;-1:-1:-1;2280:17:5;;2300:14;;;;;;;;;-1:-1:-1;;;2390:16:5;;;-1:-1:-1;2435:4:5;2426:14;;2419:28;;;;-1:-1:-1;2390:16:5;2078:405::o;2555:245::-;2616:7;2688:4;2652:40;;2715:2;2706:11;;2702:69;;;2740:20;;-1:-1:-1;;;2740:20:5;;;;;;;;;;;14:423:17;56:3;94:5;88:12;121:6;116:3;109:19;146:1;156:162;170:6;167:1;164:13;156:162;;;232:4;288:13;;;284:22;;278:29;260:11;;;256:20;;249:59;185:12;156:162;;;160:3;363:1;356:4;347:6;342:3;338:16;334:27;327:38;426:4;419:2;415:7;410:2;402:6;398:15;394:29;389:3;385:39;381:50;374:57;;;14:423;;;;:::o;442:1259::-;848:3;843;839:13;831:6;827:26;816:9;809:45;790:4;873:2;911:3;906:2;895:9;891:18;884:31;938:46;979:3;968:9;964:19;956:6;938:46;:::i;:::-;1032:9;1024:6;1020:22;1015:2;1004:9;1000:18;993:50;1066:33;1092:6;1084;1066:33;:::i;:::-;1130:2;1115:18;;1108:34;;;-1:-1:-1;;;;;1179:32:17;;1173:3;1158:19;;1151:61;1199:3;1228:19;;1221:35;;;1293:22;;;1287:3;1272:19;;1265:51;1365:13;;1387:22;;;1437:2;1463:15;;;;-1:-1:-1;1425:15:17;;;;-1:-1:-1;1506:169:17;1520:6;1517:1;1514:13;1506:169;;;1581:13;;1569:26;;1650:15;;;;1615:12;;;;1542:1;1535:9;1506:169;;;-1:-1:-1;1692:3:17;;442:1259;-1:-1:-1;;;;;;;;;;;;442:1259:17:o;2046:380::-;2125:1;2121:12;;;;2168;;;2189:61;;2243:4;2235:6;2231:17;2221:27;;2189:61;2296:2;2288:6;2285:14;2265:18;2262:38;2259:161;;2342:10;2337:3;2333:20;2330:1;2323:31;2377:4;2374:1;2367:15;2405:4;2402:1;2395:15;2259:161;;2046:380;;;:::o",
        "linkReferences": {},
        "immutableReferences": {
            "17531": [
                {
                    "start": 215,
                    "length": 32
                }
            ],
            "17534": [
                {
                    "start": 265,
                    "length": 32
                }
            ]
        }
    },
    "methodIdentifiers": {
        "eip712Domain()": "84b0196e",
        "owner()": "8da5cb5b"
    },
    "rawMetadata": "{\"compiler\":{\"version\":\"0.8.24+commit.e11b9ed9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"InvalidShortString\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SignerNotMessageSender\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"SignerNotOwner\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"str\",\"type\":\"string\"}],\"name\":\"StringTooLong\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[],\"name\":\"EIP712DomainChanged\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"eip712Domain\",\"outputs\":[{\"internalType\":\"bytes1\",\"name\":\"fields\",\"type\":\"bytes1\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"version\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"chainId\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"verifyingContract\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"salt\",\"type\":\"bytes32\"},{\"internalType\":\"uint256[]\",\"name\":\"extensions\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"}],\"devdoc\":{\"events\":{\"EIP712DomainChanged()\":{\"details\":\"MAY be emitted to signal that the domain could have changed.\"}},\"kind\":\"dev\",\"methods\":{\"eip712Domain()\":{\"details\":\"See {IERC-5267}.\"}},\"version\":1},\"userdoc\":{\"errors\":{\"SignerNotMessageSender()\":[{\"notice\":\"Emitted when the signer is not the message sender\"}],\"SignerNotOwner()\":[{\"notice\":\"Emitted when the signer is not the specified owner\"}]},\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"src/BettleFhenix.sol\":\"BettleFhenix\"},\"evmVersion\":\"paris\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[\":@chainlink/contracts/=lib/foundry-chainlink-toolkit/lib/chainlink-brownie-contracts/contracts/src/\",\":@fhenixprotocol/contracts/=node_modules/@fhenixprotocol/contracts/\",\":@openzeppelin/=lib/foundry-chainlink-toolkit/lib/openzeppelin-contracts/\",\":@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/\",\":@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/\",\":chainlink-brownie-contracts/=lib/foundry-chainlink-toolkit/lib/chainlink-brownie-contracts/contracts/src/v0.6/vendor/@arbitrum/nitro-contracts/src/\",\":ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/\",\":erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/\",\":forge-std/=lib/forge-std/src/\",\":foundry-chainlink-toolkit/=lib/foundry-chainlink-toolkit/\",\":openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/\",\":openzeppelin-contracts/=lib/openzeppelin-contracts/\"]},\"sources\":{\"lib/openzeppelin-contracts/contracts/interfaces/IERC5267.sol\":{\"keccak256\":\"0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a\",\"dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP\"]},\"lib/openzeppelin-contracts/contracts/utils/ShortStrings.sol\":{\"keccak256\":\"0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c\",\"dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA\"]},\"lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol\":{\"keccak256\":\"0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c\",\"dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR\"]},\"lib/openzeppelin-contracts/contracts/utils/Strings.sol\":{\"keccak256\":\"0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453\",\"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol\":{\"keccak256\":\"0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c\",\"dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol\":{\"keccak256\":\"0x999f705a027ed6dc2d4e0df2cc4a509852c6bfd11de1c8161bf88832d0503fd0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0798def67258d9a3cc20b2b4da7ebf351a5cefe0abfdd665d2d81f8e32f89b21\",\"dweb:/ipfs/QmPEvJosnPfzHNjKvCv2D3891mA2Ww8eUwkqrxBjuYdHCt\"]},\"lib/openzeppelin-contracts/contracts/utils/cryptography/MessageHashUtils.sol\":{\"keccak256\":\"0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c\",\"dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX\"]},\"lib/openzeppelin-contracts/contracts/utils/math/Math.sol\":{\"keccak256\":\"0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875\",\"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L\"]},\"lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol\":{\"keccak256\":\"0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc\",\"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT\"]},\"node_modules/@fhenixprotocol/contracts/FHE.sol\":{\"keccak256\":\"0x1ffd2f9f5c64d58f600d54eba6c74d5c158455dd3e1eb827f1e745b1c81218a3\",\"license\":\"BSD-3-Clause-Clear\",\"urls\":[\"bzz-raw://b0b4db06fcb411e87878ea824ef765e6a1843fc90151c1a46ea7fd3b99240d45\",\"dweb:/ipfs/Qmdr6NDP4p3hPXn8PU5BNrdtabctS3JAnpvDRGrZAG2MMg\"]},\"node_modules/@fhenixprotocol/contracts/FheOS.sol\":{\"keccak256\":\"0xc704013bec920b763d309d02f6c459acb16326b056bea878ee2130792be2fdac\",\"license\":\"BSD-3-Clause-Clear\",\"urls\":[\"bzz-raw://6a4db38c80fa004ed510ae6bca5999d0445eff4df1d8649b109784b892ecabe4\",\"dweb:/ipfs/QmbM9FXTWZJRqiwsaJ7hG9m1UN65AaLHzcb14jhJHyhz6d\"]},\"node_modules/@fhenixprotocol/contracts/access/Permissioned.sol\":{\"keccak256\":\"0xfff6f7f1a33a83c578c93464dd936e6bda2ca619cfe298a0c5d76d6bb79a25f7\",\"license\":\"BSD-3-Clause-Clear\",\"urls\":[\"bzz-raw://b36f83d530bfa4d4bd550fb7cbc179d210ae39293e4963254933e267cec010ad\",\"dweb:/ipfs/Qmes5Y3rAZSFHW5vh1d8aYW8Nx4BP2t6CrvQLRAP9UvXi5\"]},\"src/BettleFhenix.sol\":{\"keccak256\":\"0x2eb0ed90e30ae754d8f9f89a380f512cdc8eecaa64e6ab4e91dd68cca2ff5835\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://12e51d8b978af477bacfaab2595ededc16da8b2c10a87e6cb922ddb33d872389\",\"dweb:/ipfs/QmWsPbfCb1vcTbYqHnXZ1BVJWdGqBDKJQbWVZoXmUBzJ6o\"]}},\"version\":1}",
    "metadata": {
        "compiler": {
            "version": "0.8.24+commit.e11b9ed9"
        },
        "language": "Solidity",
        "output": {
            "abi": [
                {
                    "inputs": [],
                    "stateMutability": "nonpayable",
                    "type": "constructor"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "InvalidShortString"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "SignerNotMessageSender"
                },
                {
                    "inputs": [],
                    "type": "error",
                    "name": "SignerNotOwner"
                },
                {
                    "inputs": [
                        {
                            "internalType": "string",
                            "name": "str",
                            "type": "string"
                        }
                    ],
                    "type": "error",
                    "name": "StringTooLong"
                },
                {
                    "inputs": [],
                    "type": "event",
                    "name": "EIP712DomainChanged",
                    "anonymous": false
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "eip712Domain",
                    "outputs": [
                        {
                            "internalType": "bytes1",
                            "name": "fields",
                            "type": "bytes1"
                        },
                        {
                            "internalType": "string",
                            "name": "name",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "version",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "chainId",
                            "type": "uint256"
                        },
                        {
                            "internalType": "address",
                            "name": "verifyingContract",
                            "type": "address"
                        },
                        {
                            "internalType": "bytes32",
                            "name": "salt",
                            "type": "bytes32"
                        },
                        {
                            "internalType": "uint256[]",
                            "name": "extensions",
                            "type": "uint256[]"
                        }
                    ]
                },
                {
                    "inputs": [],
                    "stateMutability": "view",
                    "type": "function",
                    "name": "owner",
                    "outputs": [
                        {
                            "internalType": "address",
                            "name": "",
                            "type": "address"
                        }
                    ]
                }
            ],
            "devdoc": {
                "kind": "dev",
                "methods": {
                    "eip712Domain()": {
                        "details": "See {IERC-5267}."
                    }
                },
                "version": 1
            },
            "userdoc": {
                "kind": "user",
                "methods": {},
                "version": 1
            }
        },
        "settings": {
            "remappings": [
                "@chainlink/contracts/=lib/foundry-chainlink-toolkit/lib/chainlink-brownie-contracts/contracts/src/",
                "@fhenixprotocol/contracts/=node_modules/@fhenixprotocol/contracts/",
                "@openzeppelin/=lib/foundry-chainlink-toolkit/lib/openzeppelin-contracts/",
                "@openzeppelin/contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/contracts/",
                "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/",
                "chainlink-brownie-contracts/=lib/foundry-chainlink-toolkit/lib/chainlink-brownie-contracts/contracts/src/v0.6/vendor/@arbitrum/nitro-contracts/src/",
                "ds-test/=lib/openzeppelin-contracts-upgradeable/lib/forge-std/lib/ds-test/src/",
                "erc4626-tests/=lib/openzeppelin-contracts-upgradeable/lib/erc4626-tests/",
                "forge-std/=lib/forge-std/src/",
                "foundry-chainlink-toolkit/=lib/foundry-chainlink-toolkit/",
                "openzeppelin-contracts-upgradeable/=lib/openzeppelin-contracts-upgradeable/",
                "openzeppelin-contracts/=lib/openzeppelin-contracts/"
            ],
            "optimizer": {
                "enabled": true,
                "runs": 200
            },
            "metadata": {
                "bytecodeHash": "ipfs"
            },
            "compilationTarget": {
                "src/BettleFhenix.sol": "BettleFhenix"
            },
            "evmVersion": "paris",
            "libraries": {}
        },
        "sources": {
            "lib/openzeppelin-contracts/contracts/interfaces/IERC5267.sol": {
                "keccak256": "0x92aa1df62dc3d33f1656d63bede0923e0df0b706ad4137c8b10b0a8fe549fd92",
                "urls": [
                    "bzz-raw://c5c0f29195ad64cbe556da8e257dac8f05f78c53f90323c0d2accf8e6922d33a",
                    "dweb:/ipfs/QmQ61TED8uaCZwcbh8KkgRSsCav7x7HbcGHwHts3U4DmUP"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/ShortStrings.sol": {
                "keccak256": "0x18a7171df639a934592915a520ecb97c5bbc9675a1105607aac8a94e72bf62c6",
                "urls": [
                    "bzz-raw://7478e1f13da69a2867ccd883001d836b75620362e743f196376d63ed0c422a1c",
                    "dweb:/ipfs/QmWywcQ9TNfwtoqAxbn25d8C5VrV12PrPS9UjtGe6pL2BA"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/StorageSlot.sol": {
                "keccak256": "0x32ba59b4b7299237c8ba56319110989d7978a039faf754793064e967e5894418",
                "urls": [
                    "bzz-raw://1ae50c8b562427df610cc4540c9bf104acca7ef8e2dcae567ae7e52272281e9c",
                    "dweb:/ipfs/QmTHiadFCSJUPpRjNegc5SahmeU8bAoY8i9Aq6tVscbcKR"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/Strings.sol": {
                "keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
                "urls": [
                    "bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
                    "dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/ECDSA.sol": {
                "keccak256": "0xeed0a08b0b091f528356cbc7245891a4c748682d4f6a18055e8e6ca77d12a6cf",
                "urls": [
                    "bzz-raw://ba80ba06c8e6be852847e4c5f4492cef801feb6558ae09ed705ff2e04ea8b13c",
                    "dweb:/ipfs/QmXRJDv3xHLVQCVXg1ZvR35QS9sij5y9NDWYzMfUfAdTHF"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/EIP712.sol": {
                "keccak256": "0x999f705a027ed6dc2d4e0df2cc4a509852c6bfd11de1c8161bf88832d0503fd0",
                "urls": [
                    "bzz-raw://0798def67258d9a3cc20b2b4da7ebf351a5cefe0abfdd665d2d81f8e32f89b21",
                    "dweb:/ipfs/QmPEvJosnPfzHNjKvCv2D3891mA2Ww8eUwkqrxBjuYdHCt"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/cryptography/MessageHashUtils.sol": {
                "keccak256": "0xba333517a3add42cd35fe877656fc3dfcc9de53baa4f3aabbd6d12a92e4ea435",
                "urls": [
                    "bzz-raw://2ceacff44c0fdc81e48e0e0b1db87a2076d3c1fb497341de077bf1da9f6b406c",
                    "dweb:/ipfs/QmRUo1muMRAewxrKQ7TkXUtknyRoR57AyEkoPpiuZQ8FzX"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/Math.sol": {
                "keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
                "urls": [
                    "bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
                    "dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
                ],
                "license": "MIT"
            },
            "lib/openzeppelin-contracts/contracts/utils/math/SignedMath.sol": {
                "keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
                "urls": [
                    "bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
                    "dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
                ],
                "license": "MIT"
            },
            "node_modules/@fhenixprotocol/contracts/FHE.sol": {
                "keccak256": "0x1ffd2f9f5c64d58f600d54eba6c74d5c158455dd3e1eb827f1e745b1c81218a3",
                "urls": [
                    "bzz-raw://b0b4db06fcb411e87878ea824ef765e6a1843fc90151c1a46ea7fd3b99240d45",
                    "dweb:/ipfs/Qmdr6NDP4p3hPXn8PU5BNrdtabctS3JAnpvDRGrZAG2MMg"
                ],
                "license": "BSD-3-Clause-Clear"
            },
            "node_modules/@fhenixprotocol/contracts/FheOS.sol": {
                "keccak256": "0xc704013bec920b763d309d02f6c459acb16326b056bea878ee2130792be2fdac",
                "urls": [
                    "bzz-raw://6a4db38c80fa004ed510ae6bca5999d0445eff4df1d8649b109784b892ecabe4",
                    "dweb:/ipfs/QmbM9FXTWZJRqiwsaJ7hG9m1UN65AaLHzcb14jhJHyhz6d"
                ],
                "license": "BSD-3-Clause-Clear"
            },
            "node_modules/@fhenixprotocol/contracts/access/Permissioned.sol": {
                "keccak256": "0xfff6f7f1a33a83c578c93464dd936e6bda2ca619cfe298a0c5d76d6bb79a25f7",
                "urls": [
                    "bzz-raw://b36f83d530bfa4d4bd550fb7cbc179d210ae39293e4963254933e267cec010ad",
                    "dweb:/ipfs/Qmes5Y3rAZSFHW5vh1d8aYW8Nx4BP2t6CrvQLRAP9UvXi5"
                ],
                "license": "BSD-3-Clause-Clear"
            },
            "src/BettleFhenix.sol": {
                "keccak256": "0x2eb0ed90e30ae754d8f9f89a380f512cdc8eecaa64e6ab4e91dd68cca2ff5835",
                "urls": [
                    "bzz-raw://12e51d8b978af477bacfaab2595ededc16da8b2c10a87e6cb922ddb33d872389",
                    "dweb:/ipfs/QmWsPbfCb1vcTbYqHnXZ1BVJWdGqBDKJQbWVZoXmUBzJ6o"
                ],
                "license": "MIT"
            }
        },
        "version": 1
    },
    "id": 16
}


export const BattleFhenixAbi = BattleFhenixByteCode.abi;