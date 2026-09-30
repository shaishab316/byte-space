'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export interface CourseFilters {
  q: string;
  category: string;
  level: string;
  price: string;
  sort: string;
  page: number;
}

const DEFAULT_SORT = 'relevance';

export function useCourseFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filters = useMemo<CourseFilters>(
    () => ({
      q: searchParams.get('q') ?? '',
      category: searchParams.get('category') ?? '',
      level: searchParams.get('level') ?? '',
      price: searchParams.get('price') ?? '',
      sort: searchParams.get('sort') ?? DEFAULT_SORT,
      page: Number(searchParams.get('page')) || 1,
    }),
    [searchParams],
  );

  const setFilters = useCallback(
    (updates: Partial<CourseFilters>) => {
      const params = new URLSearchParams(searchParams.toString());

      Object.entries(updates).forEach(([key, value]) => {
        if (key !== 'page') {
          params.delete('page');
        }

        if (
          value === '' ||
          value === undefined ||
          (key === 'sort' && value === DEFAULT_SORT) ||
          (key === 'page' && Number(value) <= 1)
        ) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }
      });

      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, {
        scroll: false,
      });
    },
    [pathname, router, searchParams],
  );

  return { filters, setFilters };
}
