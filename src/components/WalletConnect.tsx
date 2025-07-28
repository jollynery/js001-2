import React from 'react';
import { ethers } from 'ethers';

type WalletConnectProps = {
  wallet: string | null;
  setWallet: (address: string | null) => void;
};

const WalletConnect: React.FC<WalletConnectProps> = ({ wallet, setWallet }) => {
  const connectWallet = async () => {
    if ((window as any).ethereum) {
      try {
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        setWallet(accounts[0]);
      } catch (err) {
        alert('Wallet connection failed.');
      }
    } else {
      alert('MetaMask not detected. Please install MetaMask.');
    }
  };

  const disconnectWallet = () => setWallet(null);

  return wallet ? (
    <span>
      <span style={{ color: '#4285F4', fontWeight: 600 }}>{wallet.slice(0, 6)}...{wallet.slice(-4)}</span>
      <button onClick={disconnectWallet} style={{ marginLeft: 10, padding: '0.3rem 0.7rem', borderRadius: 4, border: 'none', background: '#eee', cursor: 'pointer' }}>Disconnect</button>
    </span>
  ) : (
    <button onClick={connectWallet} style={{ padding: '0.5rem 1.2rem', borderRadius: 4, background: '#4285F4', color: '#fff', border: 'none', cursor: 'pointer' }}>
      Connect Wallet
    </button>
  );
};

export default WalletConnect;
