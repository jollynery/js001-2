import { Course, User, TokenomicsData, LeaderboardEntry } from '../types';
import type { CreatedCourse, CourseStats } from '../types';

const useMockData = import.meta.env.VITE_USE_MOCK_DATA === 'true';

// Mock Data
const _mockUser: User = {
  id: '1',
  name: 'Sir Johnson',
  email: 'sir.johnson@example.com',
  avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
  jscoinBalance: 2450,
  totalEarned: 5680,
  coursesCompleted: 12,
  currentStreak: 7,
  level: 8,
  xp: 3420
};

const _mockCourses: Course[] = [
  {
    id: '1',
    title: 'JavaScript Fundamentals',
    description: 'Master the basics of JavaScript programming with hands-on exercises and real-world projects.',
    instructor: 'Sarah Chioma',
    duration: '6 weeks',
    difficulty: 'Beginner',
    reward: 500,
    enrolled: 1234,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 24,
    category: 'Programming',
    status: 'active',
    progress: 65
  },
  {
    id: '2',
    title: 'React Development Mastery',
    description: 'Build modern web applications with React, hooks, and state management.',
    instructor: 'Mike Ramota',
    duration: '8 weeks',
    difficulty: 'Intermediate',
    reward: 750,
    enrolled: 892,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 32,
    category: 'Web Development',
    status: 'active',
    progress: 30
  },
  {
    id: '3',
    title: 'Blockchain Fundamentals',
    description: 'Understand blockchain technology, smart contracts, and decentralized applications.',
    instructor: 'Dr. Emily wale-soyinka',
    duration: '10 weeks',
    difficulty: 'Advanced',
    reward: 1000,
    enrolled: 567,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 40,
    category: 'Blockchain',
    status: 'locked'
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Learn Python programming for data analysis, visualization, and machine learning.',
    instructor: 'David Kamsiyochukwu',
    duration: '12 weeks',
    difficulty: 'Intermediate',
    reward: 850,
    enrolled: 1456,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 48,
    category: 'Data Science',
    status: 'completed',
    progress: 100,
    createdAt: '2024-01-01',
    updatedAt: '2024-01-30',
    isPublished: true
  }
];

const _mockCreatedCourses: CreatedCourse[] = [
  {
    id: 'created-1',
    title: 'Advanced JavaScript Patterns',
    description: 'Deep dive into advanced JavaScript concepts, design patterns, and best practices for professional development.',
    instructor: 'sir Johnson',
    duration: '8 weeks',
    difficulty: 'Advanced',
    reward: 800,
    enrolled: 456,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 36,
    category: 'Programming',
    status: 'active',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-25',
    isPublished: true,
    creatorId: '1',
    earnings: 36480,
    studentsEnrolled: 456,
    averageRating: 4.9,
    totalReviews: 89,
    lastActivity: '2024-01-25',
    courseContent: {
      modules: 8,
      videos: 36,
      assignments: 12,
      quizzes: 8
    }
  },
  {
    id: 'created-2',
    title: 'React Performance Optimization',
    description: 'Learn how to build lightning-fast React applications with advanced optimization techniques.',
    instructor: 'sir Johnson',
    duration: '6 weeks',
    difficulty: 'Intermediate',
    reward: 650,
    enrolled: 234,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 28,
    category: 'Web Development',
    status: 'active',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-10',
    isPublished: true,
    creatorId: '1',
    earnings: 15210,
    studentsEnrolled: 234,
    averageRating: 4.7,
    totalReviews: 45,
    lastActivity: '2024-02-10',
    courseContent: {
      modules: 6,
      videos: 28,
      assignments: 8,
      quizzes: 6
    }
  },
  {
    id: 'created-3',
    title: 'Web3 Development Fundamentals',
    description: 'Build decentralized applications with Ethereum, Solidity, and modern Web3 tools.',
    instructor: 'sir Johnson',
    duration: '10 weeks',
    difficulty: 'Advanced',
    reward: 1200,
    enrolled: 89,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
    lessons: 45,
    category: 'Blockchain',
    status: 'active',
    createdAt: '2024-01-20',
    updatedAt: '2024-02-15',
    isPublished: false,
    creatorId: '1',
    earnings: 10680,
    studentsEnrolled: 89,
    averageRating: 4.8,
    totalReviews: 23,
    lastActivity: '2024-02-15',
    courseContent: {
      modules: 10,
      videos: 45,
      assignments: 15,
      quizzes: 10
    }
  }
];

const _mockCourseStats: CourseStats = {
  totalCourses: 3,
  publishedCourses: 2,
  draftCourses: 1,
  totalStudents: 779,
  totalEarnings: 62370,
  averageRating: 4.8
};

const _tokenomicsData: TokenomicsData = {
  totalSupply: 1000000000,
  circulatingSupply: 250000000,
  rewardsPool: 500000000,
  tgeDate: '2024-06-15',
  currentPrice: 0.0045,
  marketCap: 1125000
};

const _leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    user: 'Sir Johnson',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    jscoinEarned: 15420,
    coursesCompleted: 28
  },
  {
    rank: 2,
    user: 'DevMaster',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    jscoinEarned: 12890,
    coursesCompleted: 24
  },
  {
    rank: 3,
    user: 'BlockchainPro',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    jscoinEarned: 11250,
    coursesCompleted: 22
  },
  {
    rank: 4,
    user: 'Alex Joe',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop',
    jscoinEarned: 5680,
    coursesCompleted: 12
  }
];

// Empty Data
const emptyUser: User = {
  id: '',
  name: '',
  email: '',
  avatar: '',
  jscoinBalance: 0,
  totalEarned: 0,
  coursesCompleted: 0,
  currentStreak: 0,
  level: 0,
  xp: 0
};

const emptyCourses: Course[] = [];
const emptyCreatedCourses: CreatedCourse[] = [];
const emptyCourseStats: CourseStats = {
  totalCourses: 0,
  publishedCourses: 0,
  draftCourses: 0,
  totalStudents: 0,
  totalEarnings: 0,
  averageRating: 0
};
const emptyTokenomicsData: TokenomicsData = {
  totalSupply: 0,
  circulatingSupply: 0,
  rewardsPool: 0,
  tgeDate: '',
  currentPrice: 0,
  marketCap: 0
};
const emptyLeaderboardData: LeaderboardEntry[] = [];

// Export based on environment
export const mockUser = useMockData ? _mockUser : emptyUser;
export const mockCourses = useMockData ? _mockCourses : emptyCourses;
export const mockCreatedCourses = useMockData ? _mockCreatedCourses : emptyCreatedCourses;
export const mockCourseStats = useMockData ? _mockCourseStats : emptyCourseStats;
export const tokenomicsData = useMockData ? _tokenomicsData : emptyTokenomicsData;
export const leaderboardData = useMockData ? _leaderboardData : emptyLeaderboardData;
