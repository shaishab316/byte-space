import { CourseCardSkeleton } from '@/components/ui/CourseCardSkeleton';
import { Skeleton } from '@/components/ui/Skeleton';

const HOME_COURSE_COUNT = 6;

const CATEGORY_PILL_WIDTHS = ['w-24', 'w-20', 'w-44', 'w-28', 'w-32', 'w-24'];

export function DiscoverCoursesSkeleton() {
  return (
    <section
      role="status"
      aria-busy="true"
      className="bg-white px-4 py-20 sm:px-6"
    >
      <span className="sr-only">Loading courses</span>

      <div aria-hidden="true" className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <div className="mb-3">
            <Skeleton className="mx-auto h-8 w-72 max-w-full rounded-xl md:h-9" />
            <Skeleton className="mx-auto mt-1 h-8 w-52 rounded-xl md:h-9" />
          </div>

          <div className="mx-auto max-w-2xl">
            <Skeleton className="h-5 w-full rounded-md" />
            <Skeleton className="mt-1 h-5 w-full rounded-md" />
            <Skeleton className="mt-1 h-5 w-3/5 rounded-md" />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {CATEGORY_PILL_WIDTHS.map((width, index) => (
            <Skeleton key={index} className={`h-8 ${width} rounded-full`} />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: HOME_COURSE_COUNT }, (_, index) => (
            <CourseCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
