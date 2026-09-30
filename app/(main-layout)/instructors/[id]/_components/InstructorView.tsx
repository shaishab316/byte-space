'use client';

import { CourseListing } from '@/components/ui/CourseListing';
import { useGetCoursesQuery } from '@/lib/store/api';
import Header from './Header';

interface InstructorViewProps {
  instructorId: string;
}

export function InstructorView({ instructorId }: InstructorViewProps) {
  const { data } = useGetCoursesQuery();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header instructorId={instructorId} />

      <CourseListing
        courses={data?.courses ?? []}
        categories={data?.categories ?? []}
        cardWidthClassName="max-w-7xl"
      />
    </div>
  );
}
