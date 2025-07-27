import React from 'react';
import { Clock, Users, Star, BookOpen, Lock, CheckCircle, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const getStatusIcon = () => {
    switch (course.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'locked':
        return <Lock className="w-5 h-5 text-gray-400" />;
      default:
        return <Play className="w-5 h-5 text-blue-500" />;
    }
  };

  const getStatusColor = () => {
    switch (course.status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'locked':
        return 'border-gray-200 bg-gray-50 opacity-75';
      default:
        return 'border-gray-200 bg-white hover:shadow-lg';
    }
  };

  const getDifficultyColor = () => {
    switch (course.difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800';
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'Advanced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`rounded-xl border-2 transition-all duration-300 cursor-pointer ${getStatusColor()}`}>
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor()}`}>
            {course.difficulty}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
          {getStatusIcon()}
        </div>
        {course.progress !== undefined && course.status === 'active' && (
          <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Progress</span>
              <span className="font-medium text-gray-900">{course.progress}%</span>
            </div>
            <div className="mt-1 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {course.title}
          </h3>
          <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-2 py-1 rounded-full ml-2">
            <span className="text-white text-xs font-bold">+{course.reward}</span>
            <span className="text-white text-xs">JSC</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessons} lessons</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{course.enrolled.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{course.rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">by {course.instructor}</p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <button 
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              course.status === 'locked'
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : course.status === 'completed'
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            disabled={course.status === 'locked'}
          >
            {course.status === 'locked' ? 'Locked' : 
             course.status === 'completed' ? 'Review Course' : 
             course.progress ? 'Continue Learning' : 'Start Course'}
          </button>
        </div>
      </div>
    </div>
  );
}