import React from 'react';
import { 
  Users, 
  Star, 
  TrendingUp, 
  Eye, 
  Edit3, 
  MoreVertical,
  Calendar,
  DollarSign,
  BookOpen,
  Play,
  Pause,
  Settings
} from 'lucide-react';
import type { CreatedCourse } from '../types';

interface CreatedCourseCardProps {
  course: CreatedCourse;
}

export default function CreatedCourseCard({ course }: CreatedCourseCardProps) {
  const getDifficultyColor = () => {
    switch (course.difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800 flex items-center gap-1';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-900 flex items-center gap-1';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = () => {
    return course.isPublished 
      ? 'bg-green-100 text-green-800 flex items-center gap-1'
     : 'bg-yellow-100 text-yellow-900 flex items-center gap-1';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <img
          src={course.image}
          alt={`Course cover for ${course.title}`}
          width={400}
          height={192}
          loading="lazy"
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-4 left-4 flex space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {course.difficulty === 'Beginner' && <Play className="w-3 h-3" />}
            {course.difficulty === 'Intermediate' && <TrendingUp className="w-3 h-3" />}
            {course.difficulty === 'Advanced' && <Settings className="w-3 h-3" />}
            {course.difficulty}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
            {course.isPublished ? <BookOpen className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
            {course.isPublished ? 'Published' : 'Draft'}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button
            className="bg-white/90 backdrop-blur-sm rounded-lg p-2 hover:bg-white transition-colors"
            aria-label="More options"
          >
            <MoreVertical className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full ml-2">
            <DollarSign className="w-3 h-3 text-white" />
            <span className="text-white text-xs font-bold">{course.earnings.toLocaleString()}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        {/* Course Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">Students</span>
            </div>
            <p className="text-lg font-bold text-blue-900 mt-1">{course.studentsEnrolled}</p>
          </div>
          
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-900">Rating</span>
            </div>
            <p className="text-lg font-bold text-green-900 mt-1">
              {course.averageRating?.toFixed(1) || 'N/A'} ({course.totalReviews?.toLocaleString() || 0})
            </p>
          </div>
        </div>

        {/* Course Content Overview */}
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <div className="grid grid-cols-4 gap-2 text-center">
            <div>
              <p className="text-xs text-gray-600">Modules</p>
              <p className="font-semibold text-gray-900">{course.courseContent.modules}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Videos</p>
              <p className="font-semibold text-gray-900">{course.courseContent.videos}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Assignments</p>
              <p className="font-semibold text-gray-900">{course.courseContent.assignments}</p>
            </div>
            <div>
              <p className="text-xs text-gray-600">Quizzes</p>
              <p className="font-semibold text-gray-900">{course.courseContent.quizzes}</p>
            </div>
          </div>
        </div>

        {/* Last Activity */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>Updated {course.lastActivity ? new Date(course.lastActivity).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never'}</span>
          </div>
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-4 h-4" />
            <span>JSC {course.reward} reward</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <button
            className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label="Edit course"
          >
            <Edit3 className="w-4 h-4" />
            <span>Edit Course</span>
          </button>
          
          <button
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Preview course"
          >
            <Eye className="w-4 h-4" />
            <span>Preview</span>
          </button>
          
          <button
            className="flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors"
            aria-label="Course settings"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}