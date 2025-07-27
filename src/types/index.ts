export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  reward: number;
  enrolled: number;
  rating: number;
  image: string;
  lessons: number;
  category: string;
  status: 'active' | 'completed' | 'locked';
  progress?: number;
  createdAt?: string;
  updatedAt?: string;
  isPublished?: boolean;
  totalRevenue?: number;
  completionRate?: number;
}

export interface CreatedCourse extends Course {
  creatorId: string;
  earnings: number;
  studentsEnrolled: number;
  averageRating: number;
  totalReviews: number;
  lastActivity: string;
  courseContent: {
    modules: number;
    videos: number;
    assignments: number;
    quizzes: number;
  };
}

export interface CourseStats {
  totalCourses: number;
  publishedCourses: number;
  draftCourses: number;
  totalStudents: number;
  totalEarnings: number;
  averageRating: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  jscoinBalance: number;
  totalEarned: number;
  coursesCompleted: number;
  currentStreak: number;
  level: number;
  xp: number;
}

export interface TokenomicsData {
  totalSupply: number;
  circulatingSupply: number;
  rewardsPool: number;
  tgeDate: string;
  currentPrice: number;
  marketCap: number;
}

export interface LeaderboardEntry {
  rank: number;
  user: string;
  avatar: string;
  jscoinEarned: number;
  coursesCompleted: number;
}