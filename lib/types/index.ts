export interface CourseInstructor {
  id: string;
  name: string;
}

export interface InstructorSummary extends CourseInstructor {
  title: string;
  avatarUrl: string;
}

export interface Course {
  id: string;
  title: string;
  instructor: CourseInstructor;
  rating: number;
  price: string;
  period: string;
  lessons: string;
  duration: string;
  comments: string;
  level: string;
  image: string;
  enrolledAvatars?: string[];
  enrolledCount?: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface CoursesResponse {
  courses: Course[];
  categories: string[];
  levels: string[];
  pagination: Pagination;
}

export interface LessonPreview {
  id: string;
  order: number;
  title: string;
  duration: string;
}

export interface ModuleItem {
  id: number | string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: number | string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface RatingBreakdown {
  stars: number;
  count: number;
}

export interface CourseDetail extends Course {
  subtitle: string;
  instructor: InstructorSummary;
  previewLessons: LessonPreview[];
  priceValue: number;
  totalLessons: number;
  totalHours: number;
  reviewCount: number;
  studentCount: number;
  features: string[];
  description: string[];
  keyPoints: string[];
  sneakPeekImages: string[];
  modules: ModuleItem[];
  progressPercent: number;
  averageRating: number;
  ratingBreakdown: RatingBreakdown[];
  reviews: ReviewItem[];
}

export interface InstructorProfile {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  bio: string;
  products: number;
  followers: number;
}
