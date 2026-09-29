'use client';

import { useState } from 'react';
import Image from 'next/image';

interface CourseDetailsProps {
  description: string[];
  sneakPeekImages: string[];
  keyPoints: string[];
}

export function CourseDetails({
  description,
  sneakPeekImages,
  keyPoints,
}: CourseDetailsProps) {
  const [activeTab, setActiveTab] = useState<'about' | 'lessons' | 'reviews'>(
    'about',
  );

  return (
    <div className="space-y-8 mt-10">
      <div className="flex items-center gap-2">
        {(['about', 'lessons', 'reviews'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
              activeTab === tab
                ? 'bg-[#C4F934] text-black'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-base font-bold text-slate-900">Description</h3>
        {description.map((paragraph, index) => (
          <p key={index} className="text-xs text-slate-600 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">Sneak Peak</h3>
        <div className="grid grid-cols-5 gap-3">
          {sneakPeekImages.map((src, idx) => (
            <div
              key={idx}
              className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden"
            >
              <Image
                src={src}
                alt={`Sneak peak ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 20vw, 15vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-base font-bold text-slate-900">Key Points</h3>
        <ul className="space-y-2">
          {keyPoints.map((point, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-700"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
                  fill="#003BE2"
                />
              </svg>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
