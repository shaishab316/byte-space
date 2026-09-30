import { Course } from '../_types';

export const courses: Course[] = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    instructor: 'purepearl studio',
    rating: 4.5,
    price: '$25',
    period: '/lifetime',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '26+',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    instructor: 'purepearl studio',
    rating: 4.8,
    price: '$30',
    period: '/lifetime',
    lessons: '12 Lessons',
    duration: '3 hours 10 mins',
    comments: '42 Comments',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '15+',
  },
  {
    id: 3,
    title: 'The Power of Big Data',
    instructor: 'data lab',
    rating: 4.7,
    price: '$45',
    period: '/lifetime',
    lessons: '24 Lessons',
    duration: '5 hours 45 mins',
    comments: '88 Comments',
    level: 'Advanced',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '40+',
  },
  {
    id: 4,
    title: 'Balancing Productivity and Life',
    instructor: 'mindset hub',
    rating: 4.9,
    price: '$18',
    period: '/lifetime',
    lessons: '10 Lessons',
    duration: '1 hour 45 mins',
    comments: '31 Comments',
    level: 'All Levels',
    image:
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '50+',
  },
  {
    id: 5,
    title: 'Mastering Money Management',
    instructor: 'finance hero',
    rating: 4.6,
    price: '$35',
    period: '/lifetime',
    lessons: '15 Lessons',
    duration: '3 hours 20 mins',
    comments: '64 Comments',
    level: 'Beginner',
    image:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '19+',
  },
  {
    id: 6,
    title: 'From Idea to Start-up Success',
    instructor: 'venture lab',
    rating: 4.8,
    price: '$50',
    period: '/lifetime',
    lessons: '20 Lessons',
    duration: '4 hours 50 mins',
    comments: '95 Comments',
    level: 'Intermediate',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    enrolledAvatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80',
    ],
    enrolledCount: '33+',
  },
];

export const allCourses: Course[] = [...courses, ...courses, ...courses];

export const categories: string[] = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];
