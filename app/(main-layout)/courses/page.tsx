'use client';

import { CourseListing } from '@/components/ui/CourseListing';
import { useGetCoursesQuery } from '@/lib/store/api';
import Header from './_components/Header';

export default function CoursesPage() {
  const { data } = useGetCoursesQuery();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <CourseListing
        courses={data?.courses ?? []}
        categories={data?.categories ?? []}
      />
    </div>
  );
}
