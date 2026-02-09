// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "./interface/IActivityTracker.sol";

/**
 * @title ABTracker
 * @dev Tracks DeFi-related activities like swaps, liquidity provision, lending, etc.
 */
contract ABTracker {
    // Activity type constants
    bytes32 public constant SWAP = keccak256("SWAP");
    bytes32 public constant LIQUIDITY_ADD = keccak256("LIQUIDITY_ADD");
    bytes32 public constant LIQUIDITY_REMOVE = keccak256("LIQUIDITY_REMOVE");
    bytes32 public constant LENDING = keccak256("LENDING");
    bytes32 public constant BORROWING = keccak256("BORROWING");
    bytes32 public constant STAKING = keccak256("STAKING");
    bytes32 public constant YIELD_FARMING = keccak256("YIELD_FARMING");
    bytes32 public constant NFT_TRADE = keccak256("NFT_TRADE");

    // User activity statistics
    struct UserActivity {
        uint256 totalCount;
        uint256 totalValue;
        uint256 currentStreak;
        uint256 lastActivityDate; // Date in days since epoch
        uint256 lastActivityTimestamp;
        mapping(uint256 => bool) activeDays; // Track active days for streak calculation
    }

    struct ActivityRecord {
        bytes32 activityType;
        uint256 value;
        uint256 timestamp;
        address user;
        string metadata;
    }

    struct ActivityConfig {
        bool enabled;
        uint256 minValue;
        uint256 pointsMultiplier;
    }

    // Nested mapping: user => activityType => UserActivity
    mapping(address => mapping(bytes32 => UserActivity)) private userActivities;
    mapping(address => bytes32[]) private userActivityTypes;
    ActivityRecord[] private activityHistory;
    mapping(bytes32 => ActivityConfig) public activityConfigs;
    mapping(address => bool) public authorizedRecorders;
    uint256 public totalUsers;
    mapping(address => bool) private userCounted;
    mapping(bytes32 => uint256) public globalActivityCount;
    mapping(bytes32 => uint256) public globalActivityValue;
    mapping(address => uint256) public userPoints;
    mapping(address => uint256) public userLevel;
    uint256 public maxHistorySize = 10000;
    
        // ============ Events ============

    event ActivityRecorded(address indexed user, bytes32 indexed activityType, uint256 value, uint256 timestamp, uint256 currentStreak);
    
}
