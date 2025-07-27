import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  BookOpen, 
  Users, 
  Star, 
  DollarSign,
  TrendingUp,
  Eye,
  BarChart3
} from 'lucide-react';
import CreatedCourseCard from './CreatedCourseCard';
import CreateCourseModal from './CreateCourseModal';
import { mockCreatedCourses, mockCourseStats } from '../data/mockData';

export default function CreatedCourses() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredCourses = mockCreatedCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || 
      (filterStatus === 'published' && course.isPublished) ||
      (filterStatus === 'draft' && !course.isPublished);
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">My Created Courses</h1>
          <p className="text-gray-600 mt-1">Manage and track your educational content</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Create New Course</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Courses</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.totalCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-lg">
              <Eye className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Published</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.publishedCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Drafts</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.draftCourses}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Students</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.totalStudents}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-orange-100 p-2 rounded-lg">
              <DollarSign className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Earnings</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.totalEarnings.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="bg-pink-100 p-2 rounded-lg">
              <Star className="w-5 h-5 text-pink-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg Rating</p>
              <p className="text-xl font-bold text-gray-900">{mockCourseStats.averageRating}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search your courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Courses</option>
                <option value="published">Published</option>
                <option value="draft">Drafts</option>
              </select>
            </div>

            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>Sort by: Recent</option>
              <option>Sort by: Title</option>
              <option>Sort by: Students</option>
              <option>Sort by: Earnings</option>
              <option>Sort by: Rating</option>
            </select>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CreatedCourseCard key={course.id} course={course} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterStatus !== 'all' 
              ? 'Try adjusting your search or filters'
              : 'Create your first course to get started'
            }
          </p>
          {!searchTerm && filterStatus === 'all' && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Create Your First Course</span>
            </button>
          )}
        </div>
      )}

      {/* Create Course Modal */}
      {showCreateModal && (
        <CreateCourseModal onClose={() => setShowCreateModal(false)} />
      )}
    </div>
  );
}