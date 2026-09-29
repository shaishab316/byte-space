import { courses } from '../_data/coursesData';
import { Course } from '../_types';
import { CourseDetails } from './_components/CourseDetails';
import { CourseHero } from './_components/CourseHero';
import { notFound } from 'next/navigation';

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

const mockPreviewLessons = [
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

const mockFeatures = [
  'Learning Resources',
  'Quality Lesson Videos',
  'Certificate of Completion',
  'Private Consultation',
];

const mockDescription = [
  "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Asset: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content.",
  "In main-line modules, you'll establish a solid foundation by immersing yourself in the fundamental concepts that form the backbone of digital asset creation. Understand the key principles that govern compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
  "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights.",
];

const mockSneakPeekImages = [
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80',
];

const mockKeyPoints = [
  'Foundational Concepts',
  'Design Principles Mastery',
  'Advanced Techniques in Digital Creation',
  'Project Showcase and Critique',
  'Optimizing for Various Platforms',
  'Digital Asset Management Best Practices',
  'Monetization Strategies',
  'Capstone Project: Building Your Portfolio',
];

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;

  const course = courses.find((item: Course) => String(item.id) === String(id));

  if (!course) {
    notFound();
  }

  const instructorData = {
    id: 'inst-1',
    name: course.instructor,
    title: 'Professional Creator',
    avatarUrl: course.image || '',
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1">
        <CourseHero
          title={course.title}
          subtitle="Unlock the Power of Digital Creation with Expert Guidance"
          instructorName={course.instructor}
          level={course.level}
          rating={course.rating}
          reviewCount={parseInt(course.comments || '0', 10)}
          studentCount={parseInt(course.enrolledCount || '0', 10)}
          totalLessons={parseInt(course.lessons || '0', 10)}
          totalHours={parseInt(course.duration || '0', 10)}
          previewLessons={mockPreviewLessons}
          price={parseFloat((course.price || '0').replace('$', ''))}
          features={mockFeatures}
          instructor={instructorData}
        />

        <div className="max-w-7xl mx-auto relative z-10 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CourseDetails
                description={mockDescription}
                sneakPeekImages={mockSneakPeekImages}
                keyPoints={mockKeyPoints}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
