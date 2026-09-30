'use client';

import { Suspense } from 'react';
import { CourseExplorer } from '@/components/ui/CourseExplorer';
import Header from './Header';

interface InstructorViewProps {
  instructorId: string;
}

export function InstructorView({ instructorId }: InstructorViewProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header instructorId={instructorId} />

      <Suspense>
        <CourseExplorer
          instructor={instructorId}
          cardWidthClassName="max-w-7xl"
        />
      </Suspense>
    </div>
  );
}
