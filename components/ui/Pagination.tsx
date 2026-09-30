'use client';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="flex items-center justify-center space-x-2 py-8 text-xs font-medium text-muted-foreground">
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        className="hover:text-foreground px-3.5 py-2.5 border rounded-4xl border-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((item) => (
        <button
          key={item}
          onClick={() => onPageChange(item)}
          className={`cursor-pointer px-1 ${
            item === page ? 'text-primary font-semibold' : 'hover:text-foreground'
          }`}
        >
          {item}
        </button>
      ))}

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPages}
        className="p-1 hover:text-foreground cursor-pointer px-3.5 py-2.5 border rounded-4xl border-neutral-200 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
