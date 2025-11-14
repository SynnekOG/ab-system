// ./src/components/MintBadge.tsx
'use client';

import { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseAbi } from 'viem';

const CONTRACT_ADDRESS = '0x239Bf2aEaA0227befF5bC283f24b49B6C2DFf9BC'; // Replace with your deployed contract address

const contractAbi = parseAbi([
  'function mintBadge(address to, uint256 achievementId, string badgeName, string description, uint8 rarity) returns (uint256)',
  'event BadgeMinted(address indexed to, uint256 indexed tokenId, uint256 indexed achievementId)'
]);

export function MintBadge() {
  const { address, isConnected } = useAccount();
  const [recipient, setRecipient] = useState('');
  const [achievementId, setAchievementId] = useState('');
  const [badgeName, setBadgeName] = useState('');
  const [description, setDescription] = useState('');
  const [rarity, setRarity] = useState('5');

  const { data: hash, isPending, writeContract, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isConnected) {
      alert('Please connect your wallet first');
      return;
    }

    const targetAddress = recipient || address;
    if (!targetAddress) {
      alert('Please specify a recipient address');
      return;
    }

    try {
      writeContract({
        address: CONTRACT_ADDRESS,
        abi: contractAbi,
        functionName: 'mintBadge',
        args: [
          targetAddress as `0x${string}`,
          BigInt(achievementId),
          badgeName,
          description,
          parseInt(rarity) as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
        ],
      });
    } catch (err) {
      console.error('Error minting badge:', err);
    }
  };

  return (
    <div className="mint-badge-container">
      <form onSubmit={handleMint} className="mint-form">
        <div className="input-group">
          <label htmlFor="recipient">
            Recipient Address (leave empty to mint to yourself)
          </label>
          <input
            id="recipient"
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            placeholder={address || '0x...'}
            className="mint-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="achievementId">
            Achievement ID <span className="required">*</span>
          </label>
          <input
            id="achievementId"
            type="number"
            value={achievementId}
            onChange={(e) => setAchievementId(e.target.value)}
            placeholder="e.g., 1"
            required
            className="mint-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="badgeName">
            Badge Name <span className="required">*</span>
          </label>
          <input
            id="badgeName"
            type="text"
            value={badgeName}
            onChange={(e) => setBadgeName(e.target.value)}
            placeholder="e.g., Test Completion Master"
            required
            className="mint-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="description">
            Description <span className="required">*</span>
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe the achievement..."
            required
            className="mint-textarea"
            rows={3}
          />
        </div>

        <div className="input-group">
          <label htmlFor="rarity">
            Rarity (1-9) <span className="required">*</span>
          </label>
          <input
            id="rarity"
            type="number"
            min="1"
            max="9"
            value={rarity}
            onChange={(e) => setRarity(e.target.value)}
            required
            className="mint-input"
          />
          <small className="rarity-hint">
            1 = Common, 5 = Rare, 9 = Legendary
          </small>
        </div>

        <button
          type="submit"
          disabled={!isConnected || isPending || isConfirming}
          className="mint-button"
        >
          {isPending ? 'Confirming...' : isConfirming ? 'Minting...' : 'Mint Badge'}
        </button>

        {error && (
          <div className="error-message">
            Error: {error.message.split('\n')[0]}
          </div>
        )}

        {hash && (
          <div className="success-message">
            <p>Transaction Hash: <code>{hash}</code></p>
            {isConfirming && <p>Waiting for confirmation...</p>}
            {isConfirmed && <p>✅ Badge minted successfully!</p>}
          </div>
        )}
      </form>
    </div>
  );
}