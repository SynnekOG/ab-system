// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ABContract is ERC721, ERC721URIStorage, Ownable {

        constructor(string memory name, string memory symbol, address initialOwner)
        ERC721(name, symbol)
        Ownable(initialOwner)
    {
        // Start token IDs at 1
        _tokenIds = 1;
    }
}
