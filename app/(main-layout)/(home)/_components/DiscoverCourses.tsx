'use client';

import { useState } from 'react';
import { CourseCard } from '@/components/ui/CourseCard';
import { useGetCoursesQuery } from '@/lib/store/api';

export default function DiscoverCourses() {
  const [active, setActive] = useState('Featured');
  const { data } = useGetCoursesQuery();

  const categories = data?.categories ?? [];
  const courses = data?.courses.slice(0, 6) ?? [];

  return (
    <section className="bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-neutral-500 md:text-base">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${
                active === category
                  ? 'bg-secondary text-neutral-600'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {category}
            </button>
          ))}
          <button className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-medium text-neutral-600 hover:bg-neutral-200">
            + More
          </button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
