import { Suspense } from 'react';
import { CourseExplorer } from '@/components/ui/CourseExplorer';
import Header from './_components/Header';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <Suspense>
        <CourseExplorer />
      </Suspense>
    </div>
  );
}
