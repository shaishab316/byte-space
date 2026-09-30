import React from 'react';
import HeroSection from './_components/HeroSection';
import LogoStrip from './_components/LogoStrip';
import DiscoverCourses from './_components/DiscoverCourses';
import LearningPaths from './_components/LearningPaths';
import GrowthSection from './_components/GrowthSection';
import CreateCourses from './_components/CreateCourses';
import CreatorCTA from './_components/CreatorCTA';

export const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <LogoStrip />
      <DiscoverCourses />
      <LearningPaths />
      <div className="relative bg-[url(/images/svg/bg-12.svg)] bg-no-repeat bg-cover">
        <GrowthSection />
        <CreateCourses />
      </div>
      <CreatorCTA />
      {/* <Testimonials /> */}
    </>
  );
};

export default HomePage;
