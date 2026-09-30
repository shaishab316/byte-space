import { Skeleton } from '@/components/ui/Skeleton';

export function InstructorHeaderSkeleton() {
  return (
    <header
      role="status"
      aria-busy="true"
      className="relative bg-primary text-white px-6 pt-10 pb-16 font-sans"
    >
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-10 bg-grid-color-white bg-grid-line-[1px]" />

      <span className="sr-only">Loading instructor profile</span>

      <div
        aria-hidden="true"
        className="relative z-10 max-w-7xl mx-auto mt-24 md:mt-30"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
          <Skeleton tone="inverse" className="size-24 rounded-2xl shrink-0" />

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <Skeleton tone="inverse" className="h-9 w-56 rounded-lg" />
              <Skeleton tone="inverse" className="h-6 w-16 rounded-full" />
            </div>
            <Skeleton tone="inverse" className="mt-2 h-5 w-48 rounded-md" />
          </div>
        </div>

        <div className="mb-10 space-y-1">
          <Skeleton tone="inverse" className="h-4 w-full max-w-3xl rounded-md" />
          <Skeleton tone="inverse" className="h-4 w-full max-w-2xl rounded-md" />
          <Skeleton tone="inverse" className="h-4 w-1/2 rounded-md" />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <Skeleton tone="inverse" className="h-10 w-32 rounded-full" />
            <Skeleton tone="inverse" className="h-10 w-32 rounded-full" />
          </div>

          <Skeleton tone="inverse" className="h-10 w-28 rounded-full" />
        </div>
      </div>
    </header>
  );
}
