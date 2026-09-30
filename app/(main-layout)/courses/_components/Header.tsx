import { SearchForm } from '@/components/ui/SearchForm';

export default function Header() {
  return (
    <header className="relative bg-primary text-primary-foreground pt-34 pb-17">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />
      <div>
        <div className="flex flex-col items-center text-center py-8 max-w-2xl mx-auto space-y-9 px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Find Your Next Course
          </h1>

          <SearchForm submitLabel="Courses" showSubmitIcon />
        </div>
      </div>
    </header>
  );
}
