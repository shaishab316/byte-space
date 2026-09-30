import Pagination from '@/components/Pagination';
import FilterBar from './_components/FilterBar';
import Header from './_components/Header';
import CategoryPills from './_components/CategoryPills';
import CourseCard from './_components/CourseCard';
import { allCourses, categories } from '@/app/courses/_data/coursesData';

export default function CoursesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto py-10 space-y-8">
        <FilterBar />

        <CategoryPills categories={categories} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {allCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        <Pagination />
      </main>
    </div>
  );
}
