import { Skeleton, SkeletonText } from '@/components/ui/Skeleton';

function CourseSidebarSkeleton() {
  return (
    <div className="w-full max-w-95 bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-xs font-sans sm:p-8">
      <div>
        <Skeleton className="h-7 w-48 rounded-lg" />

        <ul className="mt-5 space-y-4">
          {Array.from({ length: 3 }, (_, index) => (
            <li
              key={index}
              className="flex items-baseline justify-between gap-3"
            >
              <div className="flex items-baseline gap-3 flex-1 min-w-0">
                <Skeleton className="h-5 w-6 rounded-md" />
                <Skeleton className="h-5 w-2/3 rounded-md" />
              </div>
              <Skeleton className="h-5 w-16 rounded-md shrink-0" />
            </li>
          ))}
        </ul>

        <Skeleton className="h-5 w-28 rounded-md mt-4" />
      </div>

      <div className="mt-7">
        <Skeleton className="h-5 w-full rounded-md" />
        <Skeleton className="mt-1 h-5 w-2/3 rounded-md" />
      </div>

      <div className="flex items-baseline gap-1 mt-5 mb-5">
        <Skeleton className="h-9 w-24 rounded-lg" />
        <Skeleton className="h-5 w-20 rounded-md" />
      </div>

      <Skeleton className="w-full h-13 rounded-full" />

      <div className="mt-8">
        <Skeleton className="h-6 w-44 rounded-lg mb-5" />

        <ul className="space-y-4">
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton key={index} className="h-5.5 w-full rounded-md" />
          ))}
        </ul>
      </div>

      <hr className="my-7 border-slate-200/70" />

      <div>
        <div className="flex items-center gap-3.5 mb-5">
          <Skeleton circle className="w-12 h-12 shrink-0" />
          <div className="min-w-0 flex-1 space-y-1">
            <Skeleton className="h-5 w-40 rounded-md" />
            <Skeleton className="h-4 w-28 rounded-md" />
          </div>
        </div>

        <div className="mb-5">
          <Skeleton className="h-5 w-full rounded-md" />
          <Skeleton className="mt-1 h-5 w-3/4 rounded-md" />
        </div>

        <Skeleton className="h-9 w-32 rounded-full" />
      </div>
    </div>
  );
}

function CourseHeroSkeleton() {
  return (
    <div className="relative bg-primary text-primary-foreground px-4 pt-34 pb-17 sm:px-6 lg:px-0">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />

      <div className="max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-4 w-full">
          <div className="flex flex-wrap justify-between items-start gap-3 w-full">
            <div className="max-w-xl w-full space-y-1">
              <Skeleton tone="inverse" className="h-8 w-full rounded-lg" />
              <Skeleton tone="inverse" className="h-8 w-2/3 rounded-lg" />
            </div>
            <Skeleton tone="inverse" className="h-7 w-20 rounded-full" />
          </div>

          <Skeleton tone="inverse" className="h-5 w-2/3 rounded-md" />
          <Skeleton tone="inverse" className="h-4 w-40 rounded-md" />

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Skeleton tone="inverse" className="h-10 w-32 rounded-full" />
            <Skeleton tone="inverse" className="h-10 w-44 rounded-full" />
            <Skeleton tone="inverse" className="h-10 w-36 rounded-full" />
          </div>

          <div className="relative rounded-2xl overflow-y-visible grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 lg:gap-16 lg:h-120">
            <Skeleton
              tone="inverse"
              className="w-full aspect-video lg:aspect-auto lg:h-full rounded-2xl lg:col-span-2"
            />

            <div>
              <CourseSidebarSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CourseDetailsSkeleton() {
  return (
    <div className="space-y-8 mt-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-2">
        <Skeleton className="h-7 w-20 rounded-full" />
        <Skeleton className="h-7 w-24 rounded-full" />
        <Skeleton className="h-7 w-24 rounded-full" />
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-6 w-32 rounded-md" />

          <div className="space-y-4">
            {Array.from({ length: 3 }, (_, index) => (
              <SkeletonText key={index} lines={4} lastLineClassName="w-3/5" />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Skeleton className="h-6 w-28 rounded-md" />

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
            {Array.from({ length: 5 }, (_, index) => (
              <Skeleton key={index} className="aspect-video rounded-lg" />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Skeleton className="h-6 w-28 rounded-md" />

          <ul className="space-y-2">
            {['w-3/5', 'w-2/5', 'w-1/2', 'w-2/5', 'w-3/5', 'w-1/3'].map(
              (width, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Skeleton circle className="h-5 w-5 shrink-0" />
                  <Skeleton className={`h-4 ${width} rounded-md`} />
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function CourseDetailSkeleton() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="min-h-screen flex flex-col bg-slate-50"
    >
      <span className="sr-only">Loading course</span>

      <main aria-hidden="true" className="flex-1">
        <CourseHeroSkeleton />

        <div className="max-w-7xl mx-auto relative z-10 px-4 pb-16 sm:px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CourseDetailsSkeleton />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
