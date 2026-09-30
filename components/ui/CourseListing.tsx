import type { Course } from '@/lib/types';
import { CategoryPills } from './CategoryPills';
import { CourseCard } from './CourseCard';
import { FilterBar } from './FilterBar';
import { Pagination } from './Pagination';

interface CourseListingProps {
  courses: Course[];
  categories: string[];
  cardWidthClassName?: string;
}

export function CourseListing({
  courses,
  categories,
  cardWidthClassName,
}: CourseListingProps) {
  return (
    <main className="flex-1 max-w-7xl w-full mx-auto py-10 space-y-8">
      <FilterBar />

      <CategoryPills categories={categories} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            course={course}
            className={cardWidthClassName}
          />
        ))}
      </div>

      <Pagination />
    </main>
  );
}
