import { Skeleton } from './Skeleton';

interface CourseCardSkeletonProps {
  className?: string;
}

export function CourseCardSkeleton({
  className = 'max-w-105',
}: CourseCardSkeletonProps) {
  return (
    <div
      className={`w-full ${className} bg-white rounded-3xl p-4 border border-neutral-200 shadow-[0_2px_16px_rgba(0,0,0,0.04)] font-sans`}
    >
      <div className="relative h-62.5 w-full rounded-2xl overflow-hidden bg-gray-100">
        <Skeleton className="h-full w-full rounded-2xl" />
      </div>

      <div className="pt-6 px-1 pb-2 flex flex-col space-y-5">
        <div className="flex items-baseline justify-between gap-3">
          <div className="space-y-1 min-w-0 flex-1">
            <Skeleton className="h-7 w-4/5 rounded-lg" />
            <Skeleton className="h-5.5 w-2/5 rounded-md" />
          </div>
          <Skeleton className="h-7 w-12 rounded-md shrink-0" />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Skeleton className="h-10 w-27 rounded-full" />
          <div className="flex items-center -space-x-2 overflow-hidden">
            {Array.from({ length: 5 }, (_, index) => (
              <Skeleton
                key={index}
                circle
                className="h-10 w-10 ring-2 ring-white shrink-0"
              />
            ))}
          </div>
        </div>

        <div className="pt-2 flex items-baseline space-x-0.5">
          <Skeleton className="h-8 w-14 rounded-lg" />
          <Skeleton className="h-5 w-16 rounded-md" />
        </div>
      </div>
    </div>
  );
}
