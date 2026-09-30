import Image from 'next/image';
import React from 'react';
import { avatarImages } from '../_constants/avatarImages';

const features = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export const CreateCourses: React.FC = () => {
  return (
    <section className="">
      <div className="mx-auto grid max-w-7xl items-center justify-between gap-12 lg:grid-cols-2">
        <img src="/images/hero/ManageCourses.png" />

        <div className="order-1 lg:order-2">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Create & Manage
            <br />
            Courses Easily.
          </h2>
          <p className="mb-8 max-w-md text-sm text-neutral-500 md:text-base">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <ul className="space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
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

                <span className="text-sm font-medium text-neutral-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreateCourses;
