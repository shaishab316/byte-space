import Image from 'next/image';
import React from 'react';

export const GrowthSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-7xl justify-between items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p className="mb-8 max-w-md text-sm text-neutral-500 md:text-base">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-neutral-950">12K</div>
              <div className="text-sm text-neutral-500">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-950">70+</div>
              <div className="text-sm text-neutral-500">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-950">16</div>
              <div className="text-sm text-neutral-500">Creators</div>
            </div>
          </div>
        </div>

        <img src="/images/hero/ProfessionalGrowth.png" />
      </div>
    </section>
  );
};

export default GrowthSection;
