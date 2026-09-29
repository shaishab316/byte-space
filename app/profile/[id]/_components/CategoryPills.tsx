export default function CategoryPills({ categories }: CategoryPillsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition ${
            idx === 0
              ? 'bg-secondary text-secondary-foreground'
              : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100 cursor-pointer'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

interface CategoryPillsProps {
  categories: string[];
}
