'use client';

import { NotFoundContent } from '@/components/ui/NotFoundContent';
import { useGetCourseQuery } from '@/lib/store/api';
import { CourseDetails } from './CourseDetails';
import { CourseDetailSkeleton } from './CourseDetailSkeleton';
import { CourseHero } from './CourseHero';

interface CoursePageViewProps {
  courseId: string;
}

export function CoursePageView({ courseId }: CoursePageViewProps) {
  const { data: course, isLoading, isError } = useGetCourseQuery(courseId);

  if (isLoading) return <CourseDetailSkeleton />;
  if (isError) return <NotFoundContent />;
  if (!course) return null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <main className="flex-1">
        <CourseHero
          title={course.title}
          subtitle={course.subtitle}
          level={course.level}
          rating={course.rating}
          reviewCount={course.reviewCount}
          studentCount={course.studentCount}
          previewLessons={course.previewLessons}
          price={course.priceValue}
          features={course.features}
          instructor={course.instructor}
          totalLessons={course.totalLessons}
          totalHours={course.totalHours}
        />

        <div className="max-w-7xl mx-auto relative z-10 px-4 pb-16 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CourseDetails
                description={course.description}
                sneakPeekImages={course.sneakPeekImages}
                keyPoints={course.keyPoints}
                modules={course.modules}
                progressPercent={course.progressPercent}
                averageRating={course.averageRating}
                ratingBreakdown={course.ratingBreakdown}
                reviews={course.reviews}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
