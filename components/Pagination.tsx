import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Pagination() {
  return (
    <div className="flex items-center justify-center space-x-2 py-8 text-xs font-medium text-muted-foreground">
      <button className="hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200">
        <FiChevronLeft className="w-4 h-4" />
      </button>
      <button className="text-neutral-300 px-1">1</button>
      <button className="hover:text-foreground cursor-pointer px-1">2</button>
      <button className="hover:text-foreground cursor-pointer px-1">3</button>
      <button className="hover:text-foreground cursor-pointer px-1">4</button>
      <button className="hover:text-foreground cursor-pointer px-1">5</button>
      <button className="p-1 hover:text-foreground cursor-pointer px-3.5 py-2.5 border rounded-4xl border-neutral-200">
        <FiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
