interface CategoryPillsProps {
  categories: string[];
  activeIndex?: number;
}

export function CategoryPills({
  categories,
  activeIndex = 0,
}: CategoryPillsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((category, index) => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
            index === activeIndex
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
