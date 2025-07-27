import React from 'react';
import { Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import { leaderboardData } from '../data/mockData';

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getRankBg = (rank: number) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-400 to-yellow-500';
      case 2:
        return 'bg-gradient-to-r from-gray-300 to-gray-400';
      case 3:
        return 'bg-gradient-to-r from-amber-400 to-amber-500';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-2 rounded-lg">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Global Leaderboard</h2>
            <p className="text-gray-600">Top JSCoin earners this season</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {leaderboardData.map((entry) => (
            <div
              key={entry.rank}
              className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                entry.rank <= 3 
                  ? `${getRankBg(entry.rank)} text-white border-transparent shadow-lg` 
                  : 'bg-white border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
                    {getRankIcon(entry.rank)}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <img
                      src={entry.avatar}
                      alt={entry.user}
                      className="w-10 h-10 rounded-full object-cover border-2 border-white/50"
                    />
                    <div>
                      <h3 className={`font-semibold ${entry.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                        {entry.user}
                      </h3>
                      <p className={`text-sm ${entry.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                        {entry.coursesCompleted} courses completed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-lg font-bold ${entry.rank <= 3 ? 'text-white' : 'text-gray-900'}`}>
                    {entry.jscoinEarned.toLocaleString()} JSC
                  </div>
                  <div className={`text-sm ${entry.rank <= 3 ? 'text-white/80' : 'text-gray-600'}`}>
                    Total Earned
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Season Rewards</h3>
              <p className="text-sm text-gray-600">
                Top 100 learners will receive bonus JSC tokens at TGE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}