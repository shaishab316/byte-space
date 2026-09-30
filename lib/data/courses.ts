import type {
  Course,
  CourseDetail,
  LessonPreview,
  ModuleItem,
  RatingBreakdown,
  ReviewItem,
} from '@/lib/types';

const courses: Course[] = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    instructor: { id: '1', name: 'purepearl studio' },
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
    instructor: { id: '1', name: 'purepearl studio' },
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
    instructor: { id: '2', name: 'data lab' },
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
    instructor: { id: '3', name: 'mindset hub' },
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
    instructor: { id: '4', name: 'finance hero' },
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
    instructor: { id: '5', name: 'venture lab' },
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

const allCourses: Course[] = [...courses, ...courses, ...courses];

const categories: string[] = [
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

const previewLessons: LessonPreview[] = [
  {
    id: '1',
    order: 1,
    title: 'Introduction to Digital Assets',
    duration: '12 mins',
  },
  {
    id: '2',
    order: 2,
    title: 'Design Principles for Impact',
    duration: '21 mins',
  },
  {
    id: '3',
    order: 3,
    title: 'Advanced Techniques in Digital Creation',
    duration: '11 mins',
  },
];

const features: string[] = [
  'Learning Resources',
  'Quality Lesson Videos',
  'Certificate of Completion',
  'Private Consultation',
];

const description: string[] = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Asset: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.",
  "In main-line modules, you'll establish a solid foundation by immersing yourself in the fundamental concepts that form the backbone of digital asset creation. Understand the key principles that govern compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.",
];

const sneakPeekImages: string[] = [
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
];

const keyPoints: string[] = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

const modules: ModuleItem[] = [
  {
    id: 1,
    title: 'Module 1: Introduction to Digital Assets',
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    id: 2,
    title: 'Module 2: Design Principles for Impact',
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    id: 4,
    title: 'Module 4: User-Centric Design Strategies',
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    id: 5,
    title: 'Module 5: Interactive Media and Engagement',
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    id: 6,
    title: 'Module 6: Project Showcase and Critique',
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    id: 7,
    title: 'Module 7: Optimizing Digital Assets for Various Platforms',
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, count: 720 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
];

const reviews: ReviewItem[] = [
  {
    id: 1,
    author: 'PurePearl Studio',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
  },
  {
    id: 2,
    author: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    id: 3,
    author: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    id: 4,
    author: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    rating: 5,
    date: 'a year ago',
    content:
      'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
  },
];

const toNumber = (value: string | undefined) =>
  parseInt(value ?? '', 10) || 0;

export function getCourses() {
  return { courses: allCourses, categories };
}

export function getCourseDetail(id: string): CourseDetail | undefined {
  const course = courses.find((item) => String(item.id) === String(id));

  if (!course) return undefined;

  return {
    ...course,
    subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
    instructor: {
      ...course.instructor,
      title: 'Professional Creator',
      avatarUrl: course.image,
    },
    previewLessons,
    priceValue: parseFloat(course.price.replace('$', '')) || 0,
    totalLessons: toNumber(course.lessons),
    totalHours: toNumber(course.duration),
    reviewCount: toNumber(course.comments),
    studentCount: toNumber(course.enrolledCount),
    features,
    description,
    keyPoints,
    sneakPeekImages,
    modules,
    progressPercent: 55,
    averageRating: 4.7,
    ratingBreakdown,
    reviews,
  };
}
