import type { ReactNode } from 'react';
import Image from 'next/image';
import { BiFolder } from 'react-icons/bi';
import type { InstructorSummary, LessonPreview } from '@/lib/types';

const featureIcons: Record<string, ReactNode> = {
  'Learning Resources': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 6H12L10 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM20 18H4V6H9.17L11.17 8H20V18ZM18 12H6V10H18V12ZM14 16H6V14H14V16Z"
        fill="#003BE2"
      />
    </svg>
  ),
  'Quality Lesson Videos': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 8V16H5V8H15ZM16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5V7C17 6.45 16.55 6 16 6Z"
        fill="#003BE2"
      />
    </svg>
  ),
  'Certificate of Completion': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 12H14V13.5H18V12Z" fill="#003BE2" />
      <path d="M18 15H14V16.5H18V15Z" fill="#003BE2" />
      <path
        d="M20 7H15V4C15 2.9 14.1 2 13 2H11C9.9 2 9 2.9 9 4V7H4C2.9 7 2 7.9 2 9V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V9C22 7.9 21.1 7 20 7ZM11 4H13V9H11V4ZM20 20H4V9H9C9 10.1 9.9 11 11 11H13C14.1 11 15 10.1 15 9H20V20Z"
        fill="#003BE2"
      />
      <path
        d="M9 15C9.82843 15 10.5 14.3284 10.5 13.5C10.5 12.6716 9.82843 12 9 12C8.17157 12 7.5 12.6716 7.5 13.5C7.5 14.3284 8.17157 15 9 15Z"
        fill="#003BE2"
      />
      <path
        d="M11.08 16.18C10.44 15.9 9.74 15.75 9 15.75C8.26 15.75 7.56 15.9 6.92 16.18C6.36 16.42 6 16.96 6 17.57V18H12V17.57C12 16.96 11.64 16.42 11.08 16.18Z"
        fill="#003BE2"
      />
    </svg>
  ),
  'Private Consultation': (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 14H9C9 9.03 13.03 5 18 5V7C14.13 7 11 10.13 11 14ZM18 11V9C15.24 9 13 11.24 13 14H15C15 12.34 16.34 11 18 11ZM7 4C7 2.89 6.11 2 5 2C3.89 2 3 2.89 3 4C3 5.11 3.89 6 5 6C6.11 6 7 5.11 7 4ZM11.45 4.5H9.45C9.21 5.92 7.99 7 6.5 7H3.5C2.67 7 2 7.67 2 8.5V11H8V8.74C9.86 8.15 11.25 6.51 11.45 4.5ZM19 17C20.11 17 21 16.11 21 15C21 13.89 20.11 13 19 13C17.89 13 17 13.89 17 15C17 16.11 17.89 17 19 17ZM20.5 18H17.5C16.01 18 14.79 16.92 14.55 15.5H12.55C12.75 17.51 14.14 19.15 16 19.74V22H22V19.5C22 18.67 21.33 18 20.5 18Z"
        fill="#003BE2"
      />
    </svg>
  ),
};

export interface CourseSidebarProps {
  totalLessons: number;
  totalHours: number;
  previewLessons: LessonPreview[];
  price: number;
  features: string[];
  instructor: InstructorSummary;
  onEnroll?: () => void;
  onSeeProfile?: () => void;
}

export function CourseSidebar({
  totalLessons,
  totalHours,
  previewLessons,
  price,
  features,
  instructor,
  onEnroll,
  onSeeProfile,
}: CourseSidebarProps) {
  const remainingCount = Math.max(0, totalLessons - previewLessons.length);

  return (
    <div className="w-full max-w-95 bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-xs font-sans text-slate-800 sm:p-8">
      <div>
        <h3 className="text-[22px] font-bold text-slate-900 tracking-tight leading-snug">
          {totalLessons} Lessons ({totalHours} hours)
        </h3>

        <ul className="mt-5 space-y-4">
          {previewLessons.map((lesson) => (
            <li
              key={lesson.id}
              className="flex items-baseline justify-between text-[15px]"
            >
              <div className="flex items-baseline gap-3 pr-2">
                <span className="text-slate-900 font-normal">
                  {String(lesson.order).padStart(2, '0')}
                </span>
                <span className="text-slate-800 font-medium leading-snug">
                  {lesson.title}
                </span>
              </div>
              <span className="text-primary font-normal whitespace-nowrap text-[14px]">
                {lesson.duration}
              </span>
            </li>
          ))}
        </ul>

        {remainingCount > 0 && (
          <p className="text-[14px] text-slate-500 mt-4 font-normal">
            {remainingCount} more videos
          </p>
        )}
      </div>

      <p className="text-[14px] text-slate-600 leading-relaxed mt-7">
        Ready to Dive In? Enroll Now and Start Building Your Digital Future!
      </p>

      <div className="flex items-baseline gap-1 mt-5 mb-5">
        <span className="text-[36px] font-bold text-primary leading-none tracking-tight">
          ${price}
        </span>
        <span className="text-[14px] text-slate-600 font-normal">
          /lifetime
        </span>
      </div>

      <button
        type="button"
        onClick={onEnroll}
        className="w-full bg-secondary hover:bg-secondary/50 active:scale-[0.99] text-neutral-700 font-medium py-3.5 px-6 rounded-full text-[16px] transition-colors text-center cursor-pointer"
      >
        Enroll Now
      </button>

      <div className="mt-8">
        <h4 className="text-[20px] font-bold text-slate-900 mb-5 tracking-tight">
          This course include
        </h4>
        <ul className="space-y-4">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 text-slate-700 text-[15px]"
            >
              {featureIcons[feature] ?? (
                <BiFolder className="size-5.5 text-primary shrink-0" />
              )}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="my-7 border-slate-200/70" />

      <div>
        <div className="flex items-center gap-3.5 mb-5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0">
            {instructor.avatarUrl ? (
              <Image
                src={instructor.avatarUrl}
                alt={instructor.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-500 text-xs">
                N/A
              </div>
            )}
          </div>
          <div>
            <h5 className="text-[16px] font-bold text-slate-900 leading-tight">
              {instructor.name}
            </h5>
            <p className="text-[13px] text-slate-500 mt-0.5">
              {instructor.title}
            </p>
          </div>
        </div>

        <p className="text-[14px] text-slate-600 leading-relaxed mb-5">
          Ready to Dive In? Enroll Now and Start Building Your Digital Future!
        </p>

        <button
          type="button"
          onClick={onSeeProfile}
          className="px-5 py-2 rounded-full border border-slate-300 text-slate-800 text-[13px] font-medium hover:bg-slate-50 active:bg-slate-100 transition-colors cursor-pointer"
        >
          See Full Profile
        </button>
      </div>
    </div>
  );
}
