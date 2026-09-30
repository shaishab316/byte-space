import Link from 'next/link';
import { CiShare2 } from 'react-icons/ci';
import { BarChartIcon } from '@/components/icons';
import { CourseSidebar, type CourseSidebarProps } from './CourseSidebar';

interface CourseHeroProps extends CourseSidebarProps {
  title: string;
  subtitle: string;
  level: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
}

export function CourseHero({
  title,
  subtitle,
  level,
  rating,
  reviewCount,
  studentCount,
  features,
  instructor,
  previewLessons,
  price,
  totalHours,
  totalLessons,
}: CourseHeroProps) {
  return (
    <div className="relative bg-primary text-primary-foreground px-4 pt-34 pb-17 sm:px-6 lg:px-0">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />

      <div className="max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-4 w-full">
          <div className="flex flex-wrap justify-between items-start gap-3 w-full">
            <h1 className="text-3xl font-bold max-w-xl">{title}</h1>
            <button
              type="button"
              className="bg-[#C4F934] text-black px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
            >
              <CiShare2 className="w-3.5 h-3.5" />
              Share
            </button>
          </div>

          <p className="text-blue-100 text-sm">{subtitle}</p>
          <p className="text-xs text-blue-200">
            by{' '}
            <Link
              href={`/instructors/${instructor.id}`}
              onClick={(event) => event.stopPropagation()}
              className="text-primary hover:underline relative z-10 font-medium"
            >
              {instructor.name}
            </Link>
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="bg-white text-foreground px-5 py-2 rounded-full flex items-center gap-2">
              <BarChartIcon color="#003BE2" />
              {level}
            </span>
            <span className="bg-white text-foreground px-5 py-2 rounded-full flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.43 9.61158L12.96 4.77158C12.67 3.82158 11.33 3.82158 11.05 4.77158L9.56996 9.61158H5.11996C4.14996 9.61158 3.74996 10.8616 4.53996 11.4216L8.17996 14.0216L6.74996 18.6316C6.45996 19.5616 7.53996 20.3116 8.30996 19.7216L12 16.9216L15.69 19.7316C16.46 20.3216 17.54 19.5716 17.25 18.6416L15.82 14.0316L19.46 11.4316C20.25 10.8616 19.85 9.62158 18.88 9.62158H14.43V9.61158Z"
                  fill="#003BE2"
                />
              </svg>
              {rating} ({reviewCount} reviews)
            </span>
            <span className="bg-white text-foreground px-5 py-2 rounded-full flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.67 13.13C18.04 14.06 19 15.32 19 17V20H23V17C23 14.82 19.43 13.53 16.67 13.13Z"
                  fill="#003BE2"
                />
                <path
                  d="M15 12C17.21 12 19 10.21 19 8C19 5.79 17.21 4 15 4C14.53 4 14.09 4.1 13.67 4.24C14.5 5.27 15 6.58 15 8C15 9.42 14.5 10.73 13.67 11.76C14.09 11.9 14.53 12 15 12Z"
                  fill="#003BE2"
                />
                <path
                  d="M9 12C11.21 12 13 10.21 13 8C13 5.79 11.21 4 9 4C6.79 4 5 5.79 5 8C5 10.21 6.79 12 9 12ZM9 6C10.1 6 11 6.9 11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6Z"
                  fill="#003BE2"
                />
                <path
                  d="M9 13C6.33 13 1 14.34 1 17V20H17V17C17 14.34 11.67 13 9 13ZM15 18H3V17.01C3.2 16.29 6.3 15 9 15C11.7 15 14.8 16.29 15 17V18Z"
                  fill="#003BE2"
                />
              </svg>
              {studentCount} Students
            </span>
          </div>

          <div className="relative rounded-2xl overflow-y-visible grid grid-cols-1 gap-8 mt-10 lg:grid-cols-3 lg:gap-16 lg:h-120">
            <video
              className="w-full lg:col-span-2"
              controls
              preload="metadata"
              playsInline
            >
              <source
                src="https://media.istockphoto.com/id/497375361/video/super-mother-and-daughter-running-to-the-sun.mp4?s=mp4-640x640-is&k=20&c=7RwPyzlurnRxyriCTKqzFMqgT6XrqIHNScD9C9esT38="
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div>
              <CourseSidebar
                totalLessons={totalLessons}
                totalHours={totalHours}
                previewLessons={previewLessons}
                price={price}
                features={features}
                instructor={instructor}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
