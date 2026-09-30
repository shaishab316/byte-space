'use client';

import { useCourseFilters } from '@/lib/hooks/use-course-filters';

interface CategoryPillsProps {
  categories: string[];
}

export function CategoryPills({ categories }: CategoryPillsProps) {
  const { filters, setFilters } = useCourseFilters();
  const activeCategory = filters.category || 'Featured';

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            setFilters({ category: category === 'Featured' ? '' : category })
          }
          className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
            category === activeCategory
              ? 'bg-secondary text-secondary-foreground'
              : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 cursor-pointer'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
