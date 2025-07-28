import React, { useState } from 'react';
import { Coins, Bell, Menu, BookOpen, Plus } from 'lucide-react';
import { mockUser } from '../data/mockData';
import WalletConnect from './WalletConnect';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [walletModal, setWalletModal] = useState(false);
  const [wallet, setWallet] = useState<string | null>(null);
  return (
    <header className="bg-white shadow-sm border-b border-gray-200" role="banner" aria-label="Main header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Jolly Scholar</h1>
              <p className="text-xs text-gray-500">Powered by JSCoin</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8" aria-label="Main navigation">
            <button
              onClick={() => setActiveTab('courses')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'courses'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              aria-current={activeTab === 'courses' ? 'page' : undefined}
            >
              <span>My Courses</span>
              {activeTab === 'courses' && <span className="sr-only">(current page)</span>}
            </button>
            <button
              onClick={() => setActiveTab('created-courses')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'created-courses'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Created Courses</span>
              {activeTab === 'created-courses' && <span className="sr-only">(current page)</span>}
            </button>
            <button
              onClick={() => setActiveTab('create-course')}
              className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'create-course'
                  ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600'
                  : 'text-blue-600 bg-blue-50 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Create Course</span>
              {activeTab === 'create-course' && <span className="sr-only">(current page)</span>}
            </button>
            <button
              onClick={() => setActiveTab('leaderboard')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'leaderboard'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Leaderboard</span>
              {activeTab === 'leaderboard' && <span className="sr-only">(current page)</span>}
            </button>
            <button
              onClick={() => setActiveTab('tokenomics')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === 'tokenomics'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              <span>Tokenomics</span>
              {activeTab === 'tokenomics' && <span className="sr-only">(current page)</span>}
            </button>
          </nav>

          {/* User Info */}
          <div className="flex items-center space-x-4">
            {/* JSCoin Balance */}
            <div className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1.5 rounded-full">
              <Coins className="w-4 h-4 text-white" aria-hidden="true" />
              <span className="text-white font-semibold text-sm">
                {mockUser.jscoinBalance.toLocaleString()}
              </span>
            </div>

            {/* Notifications */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
            </button>

            {/* Connect Wallet Button */}
            <div>
              {wallet ? (
                <button className="px-3 py-2 bg-green-100 text-green-700 rounded-lg font-semibold mr-2 cursor-default">
                  {wallet.slice(0, 6)}...{wallet.slice(-4)}
                </button>
              ) : (
                <button
                  className="px-3 py-2 bg-blue-600 text-white rounded-lg font-semibold mr-2 hover:bg-blue-700"
                  onClick={() => setWalletModal(true)}
                >
                  Connect Wallet
                </button>
              )}
            </div>
            {/* User Avatar */}
            <div className="flex items-center space-x-2">
              <img
                src={mockUser.avatar}
                alt={`Profile picture of ${mockUser.name}`}
                role="img"
                loading="lazy"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {mockUser.name}
              </span>
            </div>

            {/* Mobile Menu */}
            <button
              className="md:hidden p-2 text-gray-400 hover:text-gray-600"
              aria-label="Mobile menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div
                id="mobile-menu"
                className="absolute top-16 right-0 w-full bg-white shadow-lg md:hidden"
                role="menu"
              >
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {/* Mobile navigation items */}
                  {['courses', 'created-courses', 'create-course', 'leaderboard', 'tokenomics'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => {
                        setActiveTab(tab);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-base font-medium rounded-md ${
                        activeTab === tab
                          ? 'text-white bg-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      role="menuitem"
                    >
                      {tab.split('-').join(' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    {/* Wallet Modal */}
    {walletModal && (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-xs w-full relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
            onClick={() => setWalletModal(false)}
            aria-label="Close"
          >
            ×
          </button>
          <h3 className="text-lg font-bold mb-4">Select Wallet</h3>
          <div className="space-y-3">
            <WalletConnect wallet={wallet} setWallet={(addr) => { setWallet(addr); setWalletModal(false); }} walletType="metamask" />
            <button className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center justify-between" onClick={() => alert('WalletConnect support coming soon!')}>
              <span>WalletConnect</span>
              <img src="https://walletconnect.com/_next/static/media/logo_mark.4c4876b0.svg" alt="WalletConnect" className="w-6 h-6" />
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center justify-between" onClick={() => alert('Coinbase Wallet support coming soon!')}>
              <span>Coinbase Wallet</span>
              <img src="https://avatars.githubusercontent.com/u/1885080?s=200&v=4" alt="Coinbase Wallet" className="w-6 h-6" />
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center justify-between" onClick={() => alert('Trust Wallet support coming soon!')}>
              <span>Trust Wallet</span>
              <img src="https://trustwallet.com/assets/images/media/assets/TWT.png" alt="Trust Wallet" className="w-6 h-6" />
            </button>
            <button className="w-full px-4 py-2 bg-gray-100 rounded-lg flex items-center justify-between" onClick={() => alert('Telegram Wallet (TON) support coming soon!')}>
              <span>Telegram Wallet (TON)</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="Telegram Wallet" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    )}
    </header>
  );
}