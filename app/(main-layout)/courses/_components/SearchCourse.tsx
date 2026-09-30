'use client';

import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FiChevronDown } from 'react-icons/fi';

export const SearchCourse: React.FC = ({
  placeholder = 'Search',
  defaultQuery = '',
}: SearchFormProps) => {
  const [query, setQuery] = useState(defaultQuery);
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query.trim()) return;

    router.push(`/courses?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md w-full"
    >
      <div className="relative flex-1 flex items-center">
        <svg
          className="w-5 h-5 text-neutral-400 absolute left-5 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="search"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search courses"
          placeholder={placeholder}
          className="w-full pl-12 pr-5 py-3 rounded-full border border-border bg-background text-body-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-secondary text-[#242528] text-label-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer text-center shrink-0"
      >
        <span>Courses</span>
        <FiChevronDown className="w-4 h-4" />
      </button>
    </form>
  );
};

export default SearchCourse;

export interface SearchFormProps {
  placeholder?: string;
  defaultQuery?: string;
}
