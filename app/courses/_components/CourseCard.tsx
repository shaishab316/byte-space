'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaStar } from 'react-icons/fa';
import { Course } from '../_types';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/courses/${course.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group w-full max-w-105 bg-white rounded-3xl p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-neutral-200 hover:border-neutral-300 font-sans cursor-pointer transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image container with subtle zoom on hover */}
      <div className="relative h-62.5 w-full rounded-2xl overflow-hidden bg-gray-100">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(max-width: 420px) 100vw, 420px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          priority
        />

        {/* Badges on image with crisp backdrop */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-1.5 z-10">
          <span className="bg-white/60 group-hover:bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[13px] font-normal text-gray-700 shadow-xs transition-colors duration-200">
            {course.lessons}
          </span>
          <span className="bg-white/60 group-hover:bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[13px] font-normal text-gray-700 shadow-xs transition-colors duration-200">
            {course.duration}
          </span>
          <span className="bg-white/60 group-hover:bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[13px] font-normal text-gray-700 shadow-xs transition-colors duration-200">
            {course.comments}
          </span>
        </div>
      </div>

      <div className="pt-6 px-1 pb-2 flex flex-col space-y-5">
        <div className="flex items-baseline justify-between gap-3">
          <div className="space-y-1">
            {/* Title hover effect */}
            <h3 className="font-extrabold text-[22px] text-gray-900 tracking-tight leading-snug transition-colors duration-200 group-hover:text-primary">
              {course.title}
            </h3>
            <p className="text-[15px] text-gray-500 font-normal">
              by{' '}
              <Link
                href={`/instructors/${course.instructor}`}
                onClick={(e) => e.stopPropagation()}
                className="text-primary hover:underline relative z-10 font-medium"
              >
                {course.instructor}
              </Link>
            </p>
          </div>

          <div className="flex items-center space-x-1.5 text-xl font-normal text-gray-600 shrink-0">
            <span>{course.rating.toFixed(1)}</span>
            <FaStar className="size-4.5 text-amber-400 fill-amber-400" />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center space-x-2 bg-[#F3F4F6] px-4 py-2.5 rounded-full text-[14px] font-medium text-gray-700 transition-colors duration-200 group-hover:bg-gray-200/80">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-gray-800"
            >
              <rect
                x="0"
                y="8"
                width="3"
                height="6"
                rx="0.5"
                fill="currentColor"
              />
              <rect
                x="5.5"
                y="4"
                width="3"
                height="10"
                rx="0.5"
                fill="currentColor"
              />
              <rect
                x="11"
                y="0"
                width="3"
                height="14"
                rx="0.5"
                fill="currentColor"
              />
            </svg>
            <span>{course.level}</span>
          </div>

          <div className="flex items-center -space-x-2 overflow-hidden">
            {course.enrolledAvatars?.map((avatar, index) => (
              <div
                key={index}
                className="relative h-10 w-10 rounded-full ring-2 ring-white overflow-hidden shrink-0 transition-transform duration-200 group-hover:scale-105"
              >
                <Image
                  src={avatar}
                  alt={`Enrolled user ${index + 1}`}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
            ))}
            {course.enrolledCount && (
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-[#CCFF00] ring-2 ring-white text-[13px] font-semibold text-gray-900 z-10 shrink-0 transition-transform duration-200 group-hover:scale-105">
                {course.enrolledCount}
              </div>
            )}
          </div>
        </div>

        <div className="pt-2 flex items-baseline space-x-0.5">
          <span className="text-[26px] font-black text-primary">
            {course.price}
          </span>
          <span className="text-[14px] text-gray-500 font-normal">
            {course.period}
          </span>
        </div>
      </div>
    </div>
  );
}
