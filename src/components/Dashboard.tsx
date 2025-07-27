import React from 'react';
import { TrendingUp, Award, Flame, Star, Target } from 'lucide-react';
import { mockUser } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" role="region" aria-label="Dashboard metrics">
      {/* JSCoin Balance */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-yellow-100 text-sm font-medium">JSCoin Balance</p>
            <p className="text-2xl font-bold">{mockUser.jscoinBalance.toLocaleString()}</p>
          </div>
          <div className="bg-white/20 p-3 rounded-lg" aria-hidden="true">
            <TrendingUp className="w-6 h-6" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-yellow-100 text-sm">
          <span>+{(mockUser.totalEarned > 0 ? ((mockUser.jscoinBalance / mockUser.totalEarned) * 100).toFixed(1) : 'N/A')}% this week</span>
        </div>
      </div>

      {/* Total Earned */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Earned</p>
            <p className="text-2xl font-bold text-gray-900">{mockUser.totalEarned.toLocaleString()}</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg" aria-hidden="true">
            <Award className="w-6 h-6 text-green-600" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-green-600 text-sm">
          <span>JSC Lifetime Earnings</span>
        </div>
      </div>

      {/* Current Streak */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Current Streak</p>
            <p className="text-2xl font-bold text-gray-900">{mockUser.currentStreak} days</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg" aria-hidden="true">
            <Flame className="w-6 h-6 text-orange-600" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4 flex items-center text-orange-600 text-sm">
          <span>Keep learning daily!!</span>
        </div>
      </div>

      {/* Level & XP */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Level {mockUser.level}</p>
            <p className="text-2xl font-bold text-gray-900">{mockUser.xp} XP</p>
          </div>
          <div className="bg-purple-100 p-3 rounded-lg" aria-hidden="true">
            <Star className="w-6 h-6 text-purple-600" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(mockUser.xp % 1000) / 10}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            {(1000 - (mockUser.xp % 1000)) === 1000 ? 'Level Complete!' : `${1000 - (mockUser.xp % 1000)} XP to next level`}
          </p>
        </div>
      </div>
    </div>
  );
}