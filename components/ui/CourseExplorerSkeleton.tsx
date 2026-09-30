import { CourseCardSkeleton } from './CourseCardSkeleton';
import { Skeleton } from './Skeleton';

const PAGE_SIZE = 6;

const CATEGORY_PILL_WIDTHS = [
  'w-24',
  'w-20',
  'w-44',
  'w-28',
  'w-28',
  'w-32',
  'w-32',
  'w-40',
  'w-24',
];

function FilterBarSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <Skeleton className="h-11 w-32 rounded-4xl" />
        <Skeleton className="h-11 w-30 rounded-4xl" />
        <Skeleton className="h-11 w-38 rounded-4xl" />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Skeleton className="h-11 w-40 rounded-4xl" />
      </div>
    </div>
  );
}

function CategoryPillsSkeleton() {
  return (
    <div className="flex items-center gap-2 overflow-hidden pb-2">
      {CATEGORY_PILL_WIDTHS.map((width, index) => (
        <Skeleton key={index} className={`h-9 ${width} rounded-full shrink-0`} />
      ))}
    </div>
  );
}

function PaginationSkeleton({ pages = 3 }: { pages?: number }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-1 py-8 sm:gap-2">
      <Skeleton className="h-9 w-12 rounded-4xl" />

      <div className="flex items-center gap-4 px-2">
        {Array.from({ length: pages }, (_, index) => (
          <Skeleton key={index} className="h-4 w-4 rounded-sm" />
        ))}
      </div>

      <Skeleton className="h-9 w-12 rounded-4xl" />
    </div>
  );
}

interface CourseExplorerSkeletonProps {
  cardWidthClassName?: string;
}

export function CourseExplorerSkeleton({
  cardWidthClassName,
}: CourseExplorerSkeletonProps) {
  return (
    <main
      role="status"
      aria-busy="true"
      className="flex-1 max-w-7xl w-full mx-auto px-4 py-10 sm:px-6 lg:px-0"
    >
      <span className="sr-only">Loading courses</span>

      <div aria-hidden="true" className="space-y-8">
        <FilterBarSkeleton />
        <CategoryPillsSkeleton />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {Array.from({ length: PAGE_SIZE }, (_, index) => (
            <CourseCardSkeleton key={index} className={cardWidthClassName} />
          ))}
        </div>

        <PaginationSkeleton />
      </div>
    </main>
  );
}
