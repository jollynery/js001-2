import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CourseCard from './components/CourseCard';
import Leaderboard from './components/Leaderboard';
import Tokenomics from './components/Tokenomics';
import CreatedCourses from './components/CreatedCourses';
import CreateCoursePage from './components/CreateCoursePage';
import { mockCourses } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('courses');

  const renderContent = () => {
    switch (activeTab) {
      case 'created-courses':
        return <CreatedCourses />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'tokenomics':
        return <Tokenomics />;
      default:
        return (
          <>
            <Dashboard />
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Learning Journey</h2>
                  <p className="text-gray-600">Continue your courses and earn JSC tokens</p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>All Categories</option>
                    <option>Programming</option>
                    <option>Web Development</option>
                    <option>Blockchain</option>
                    <option>CyberSecurity</option>
                    <option>Data Science</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen ${activeTab === 'create-course' ? 'bg-gray-50' : 'bg-gray-50'}`}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      {activeTab === 'create-course' ? (
        renderContent()
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      )}
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                  <span className="text-white font-bold text-lg">JSc</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Jolly-Scholar</h3>
                  <p className="text-sm text-gray-500">Powered by JSCoin</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The future of education is here. Learn, earn, and grow with our revolutionary 
                blockchain-powered learning platform.
              </p>
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-white">
                <p className="font-semibold">🚀 TGE Coming Soon!</p>
                <p className="text-sm opacity-90">Join thousands of learners earning JSC tokens</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Courses</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Instructors</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Rewards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">JSCoin</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Tokenomics</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Roadmap</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Community</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 flex items-center justify-between">
            <p className="text-sm text-gray-500">
              © 2024 Jolly Scholar. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;