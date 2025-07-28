import React from 'react';

const Landing: React.FC = () => (
  <div style={{ textAlign: 'center', marginTop: 60 }}>
    <h1>Welcome to JS001 Learn-to-Earn!</h1>
    <p>Connect your wallet, enroll in courses, and earn crypto as you learn.</p>
    <ul style={{ maxWidth: 400, margin: '2rem auto', textAlign: 'left' }}>
      <li>📚 Browse and enroll in interactive courses</li>
      <li>📝 Create your own courses and share knowledge</li>
      <li>💰 Earn tokens for learning and teaching</li>
      <li>🔗 Connect your crypto wallet (MetaMask)</li>
      <li>📊 Track your progress and earnings in your dashboard</li>
    </ul>
    <p style={{ color: '#888' }}>Use the navigation bar to get started!</p>
  </div>
);

export default Landing;
