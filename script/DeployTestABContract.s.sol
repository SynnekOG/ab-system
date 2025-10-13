// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {TestABContract} from "../src/onchain/TestABContract.sol";

contract DeployTestABContract is Script {
    TestABContract public testABContract;

    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        testABContract = new TestABContract("TestAB", "TAB");

        vm.stopBroadcast();
    }
}
