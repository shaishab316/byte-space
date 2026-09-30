export interface Course {
  id: number;
  title: string;
  instructor: string;
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
