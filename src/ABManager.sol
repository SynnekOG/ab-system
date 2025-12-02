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

    // Achievement types
    enum AchievementType {
        ACTIVITY_COUNT, // Complete X activities
        VALUE_THRESHOLD, // Reach X value in activities
        STREAK, // Complete activities X days in a row
        COMBO, // Complete multiple different activities
        TIME_BASED // Complete activity within timeframe

    }

        // Achievement structure
    struct Achievement {
        uint256 id;
        string name;
        string description;
        AchievementType achievementType;
        address[] requiredTrackers; // Activity tracker contracts to check
        uint256[] thresholds; // Required values for completion
        uint256 timeLimit; // Time limit in seconds (0 = no limit)
        uint8 rarity; // 1=Common, 2=Rare, 3=Epic, 4=Legendary
        bool isActive; // Whether achievement can be earned
        bool soulbound; // Whether resulting badge is soul-bound
        uint256 maxEarners; // Max users who can earn (0 = unlimited)
        uint256 currentEarners; // Current number of users who earned it
    }

    constructor() Ownable(msg.sender) {
        // Start achievement IDs at 1
        _achievementIdCounter = 1;
    }

    /**
     * @dev Set the badge contract address
     * @param _badgeContract Address of the AchievementBadge contract
     */
        function setBadgeContract(address _badgeContract) external onlyOwner {
        address oldContract = address(badgeContract);
        badgeContract = AchievementBadge(_badgeContract);
        emit BadgeContractUpdated(oldContract, _badgeContract);
    }

        function setTrackerAuthorization(address tracker, bool authorized) external onlyOwner {
        authorizedTrackers[tracker] = authorized;
        emit TrackerAuthorized(tracker, authorized);
    }
}
