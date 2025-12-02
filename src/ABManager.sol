// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./ABContract.sol";
import "./interface/IActivityTracker.sol";

/**
 * @title ABManager
 * @dev Central manager for all achievements and badge minting
 */
contract ABManager is Ownable, ReentrancyGuard {
    uint256 private _achievementIdCounter;

    constructor() Ownable(msg.sender) {
        // Start achievement IDs at 1
        _achievementIdCounter = 1;
    }

        function setBadgeContract(address _badgeContract) external onlyOwner {
        address oldContract = address(badgeContract);
        badgeContract = AchievementBadge(_badgeContract);
        emit BadgeContractUpdated(oldContract, _badgeContract);
    }
}
