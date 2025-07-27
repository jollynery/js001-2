import React from 'react';
import { Coins, Bell, Menu, BookOpen, Plus } from 'lucide-react';
import { mockUser } from '../data/mockData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
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
    </header>
  );
}