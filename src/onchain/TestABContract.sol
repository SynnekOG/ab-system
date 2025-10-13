// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/// @title TestABContract
/// @notice A minimal badge contract focusing on minting functionality
contract TestABContract {
    string public name;
    string public symbol;
    uint256 private _tokenIds;
    string private version = "1.0.0";
    
    struct Badge {
        string badgeName;
        string description;
        uint256 achievementId;
        uint256 earnedTimestamp;
        uint8 rarity;
    }
    
    // Token ID => Badge metadata
    mapping(uint256 => Badge) public badges;
    
    // Token ID => Owner address
    mapping(uint256 => address) public ownerOf;
    
    // Owner => Token count
    mapping(address => uint256) public balanceOf;
    
    // User address => Array of token IDs
    mapping(address => uint256[]) public userBadges;
    
    // User => Achievement ID => Has earned
    mapping(address => mapping(uint256 => bool)) public hasEarnedAchievement;
    
    event BadgeMinted(address indexed to, uint256 indexed tokenId, uint256 indexed achievementId);
    
    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;
    }
    
    /// @notice Mint a new badge to an address
    /// @param to The recipient address
    /// @param achievementId Unique achievement identifier
    /// @param badgeName Name of the badge
    /// @param description Description of the achievement
    /// @param rarity Rarity level (1-9)
    /// @return tokenId The newly minted token ID
    function mintBadge(
        address to,
        uint256 achievementId,
        string memory badgeName,
        string memory description,
        uint8 rarity
    ) external returns (uint256) {
        require(to != address(0), "invalid address");
        require(rarity >= 1 && rarity <= 9, "invalid rarity");
        
        _tokenIds++;
        uint256 tokenId = _tokenIds;
        
        // Store badge metadata
        badges[tokenId] = Badge({
            badgeName: badgeName,
            description: description,
            achievementId: achievementId,
            earnedTimestamp: block.timestamp,
            rarity: rarity
        });
        
        // Update ownership
        ownerOf[tokenId] = to;
        balanceOf[to]++;
        userBadges[to].push(tokenId);
        hasEarnedAchievement[to][achievementId] = true;
        
        emit BadgeMinted(to, tokenId, achievementId);
        return tokenId;
    }
    
    /// @notice Get all badge IDs owned by a user
    /// @param user The user address
    /// @return Array of token IDs
    function getUserBadges(address user) external view returns (uint256[] memory) {
        return userBadges[user];
    }
    
    /// @notice Get the number of badges a user owns
    /// @param user The user address
    /// @return Number of badges
    function getUserBadgeCount(address user) external view returns (uint256) {
        return userBadges[user].length;
    }
    
    /// @notice Check if a user has earned a specific achievement
    /// @param user The user address
    /// @param achievementId The achievement ID
    /// @return True if earned
    function hasUserEarnedAchievement(address user, uint256 achievementId) external view returns (bool) {
        return hasEarnedAchievement[user][achievementId];
    }
    
    /// @notice Get badge metadata
    /// @param tokenId The token ID
    /// @return Badge metadata struct
    function getBadge(uint256 tokenId) external view returns (Badge memory) {
        require(ownerOf[tokenId] != address(0), "token does not exist");
        return badges[tokenId];
    }
    
    /// @notice Get total supply of badges
    /// @return Total number of badges minted
    function totalSupply() external view returns (uint256) {
        return _tokenIds;
    }
}