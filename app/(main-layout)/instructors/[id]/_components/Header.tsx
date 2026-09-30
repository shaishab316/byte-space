'use client';

import Image from 'next/image';
import { useGetInstructorQuery } from '@/lib/store/api';

interface HeaderProps {
  instructorId: string;
}

export default function Header({ instructorId }: HeaderProps) {
  const { data: instructor } = useGetInstructorQuery(instructorId);

  if (!instructor) return null;

  return (
    <header className="relative bg-primary text-white px-6 pt-10 pb-16 font-sans">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-10 bg-grid-color-white bg-grid-line-[1px]" />

      <div className="relative z-10 max-w-7xl mx-auto mt-30">
        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10">
          <Image
            src={instructor.avatarUrl}
            alt={instructor.name}
            width={96}
            height={96}
            className="size-24 rounded-2xl"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">{instructor.name}</h1>
              <span className="bg-[#D4FF00] text-black text-xs font-semibold px-3 py-1 rounded-full">
                Creator
              </span>
            </div>
            <p className="text-white/80 text-sm mt-1">{instructor.title}</p>
          </div>
        </div>

        <p className="text-white/90 text-sm max-w-3xl leading-relaxed mb-10">
          {instructor.bio}
        </p>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
              <span className="text-primary">{instructor.products}</span>{' '}
              Products
            </div>
            <div className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium">
              <span className="text-primary">{instructor.followers}</span>{' '}
              Followers
            </div>
          </div>

          <button className="bg-[#D4FF00] text-black font-semibold px-8 py-2 rounded-full text-sm hover:opacity-90 transition-opacity">
            Follow
          </button>
        </div>
      </div>
    </header>
  );
}
