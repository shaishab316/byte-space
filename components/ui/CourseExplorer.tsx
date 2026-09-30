'use client';

import { useMemo } from 'react';
import { useCourseFilters } from '@/lib/hooks/use-course-filters';
import { useGetCoursesQuery, type CoursesQueryArgs } from '@/lib/store/api';
import { CategoryPills } from './CategoryPills';
import { CourseCard } from './CourseCard';
import { CourseCardSkeleton } from './CourseCardSkeleton';
import { CourseExplorerSkeleton } from './CourseExplorerSkeleton';
import { FilterBar } from './FilterBar';
import { Pagination } from './Pagination';

const PAGE_SIZE = 6;

interface CourseExplorerProps {
  instructor?: string;
  cardWidthClassName?: string;
}

export function CourseExplorer({
  instructor,
  cardWidthClassName,
}: CourseExplorerProps) {
  const { filters, setFilters } = useCourseFilters();

  const queryArgs = useMemo<CoursesQueryArgs>(
    () => ({
      ...(filters.q && { q: filters.q }),
      ...(filters.category && { category: filters.category }),
      ...(filters.level && { level: filters.level }),
      ...(filters.price && { price: filters.price }),
      sort: filters.sort,
      page: filters.page,
      limit: PAGE_SIZE,
      ...(instructor && { instructor }),
    }),
    [filters, instructor],
  );

  const { data, isLoading, isFetching } = useGetCoursesQuery(queryArgs);

  if (isLoading) {
    return <CourseExplorerSkeleton cardWidthClassName={cardWidthClassName} />;
  }

  const courses = data?.courses ?? [];
  const pagination = data?.pagination;

  return (
    <main className="flex-1 max-w-7xl w-full mx-auto px-4 py-10 space-y-8 sm:px-6 lg:px-0">
      <FilterBar
        categories={data?.categories ?? []}
        levels={data?.levels ?? []}
      />

      <CategoryPills categories={data?.categories ?? []} />

      <div
        aria-busy={isFetching}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4"
      >
        {isFetching
          ? Array.from({ length: PAGE_SIZE }, (_, index) => (
              <CourseCardSkeleton key={index} className={cardWidthClassName} />
            ))
          : courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                className={cardWidthClassName}
              />
            ))}
      </div>

      <Pagination
        page={pagination?.page ?? 1}
        totalPages={pagination?.totalPages ?? 0}
        onPageChange={(page) => setFilters({ page })}
      />
    </main>
  );
}
