import React from 'react';
import { Coins, TrendingUp, Calendar, PieChart, Users, Zap } from 'lucide-react';
import { tokenomicsData } from '../data/mockData';

export default function Tokenomics() {
  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const tgeDate = new Date(tokenomicsData.tgeDate);
  const now = new Date();
  const daysUntilTGE = Math.ceil((tgeDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <div className="space-y-6">
      {/* TGE Announcement */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Token Generation Event (TGE)</h2>
            <p className="text-purple-100 mb-4">
              JSCoin will be officially launched and tradeable on exchanges
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">{tgeDate.toLocaleDateString()}</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">
                  {daysUntilTGE > 0 ? `${daysUntilTGE} days remaining` : 'TGE Live!'}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white/20 p-4 rounded-lg">
            <Zap className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Token Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Coins className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-sm text-gray-500">Total Supply</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(tokenomicsData.totalSupply)}
          </div>
          <div className="text-sm text-gray-600 mt-1">JSC Tokens</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <span className="text-sm text-gray-500">Circulating</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(tokenomicsData.circulatingSupply)}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {((tokenomicsData.circulatingSupply / tokenomicsData.totalSupply) * 100).toFixed(1)}% of total
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <span className="text-sm text-gray-500">Rewards Pool</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            {formatNumber(tokenomicsData.rewardsPool)}
          </div>
          <div className="text-sm text-gray-600 mt-1">For learners</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <PieChart className="w-6 h-6 text-yellow-600" />
            </div>
            <span className="text-sm text-gray-500">Market Cap</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">
            ${formatNumber(tokenomicsData.marketCap)}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            ${tokenomicsData.currentPrice.toFixed(4)} per JSC
          </div>
        </div>
      </div>

      {/* Token Distribution */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Token Distribution</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Learning Rewards</span>
              </div>
              <span className="font-bold text-blue-600">50%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Team & Development</span>
              </div>
              <span className="font-bold text-green-600">20%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Public Sale</span>
              </div>
              <span className="font-bold text-purple-600">15%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-yellow-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Ecosystem Fund</span>
              </div>
              <span className="font-bold text-yellow-600">10%</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                <span className="font-medium text-gray-900">Advisors</span>
              </div>
              <span className="font-bold text-gray-600">5%</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Key Features</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Earn JSC tokens by completing courses and achieving milestones</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                <span>Stake tokens to unlock premium courses and features</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Governance rights for platform decisions</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                <span>Deflationary mechanism through course purchases</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Roadmap */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Roadmap to TGE</h3>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-green-900">Phase 1: Platform Launch ✓</h4>
              <p className="text-sm text-green-700">Learning platform with JSC rewards system</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-blue-900">Phase 2: Community Building (Current)</h4>
              <p className="text-sm text-blue-700">Growing user base and course library</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-yellow-900">Phase 3: TGE Preparation</h4>
              <p className="text-sm text-yellow-700">Smart contract audits and exchange partnerships</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
            <div>
              <h4 className="font-semibold text-purple-900">Phase 4: Token Launch</h4>
              <p className="text-sm text-purple-700">JSC goes live on major exchanges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}