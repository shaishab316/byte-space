import React from 'react';

const logos = [
  '/images/logo-strip/1.svg',
  '/images/logo-strip/2.svg',
  '/images/logo-strip/3.svg',
  '/images/logo-strip/4.svg',
  '/images/logo-strip/5.svg',
];

export const LogoStrip: React.FC = () => {
  return (
    <section className="w-full border-b border-neutral-100 bg-neutral-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-18 gap-y-4">
        {logos.map((logoSrc, i) => (
          <div key={i} className="flex items-center gap-2 text-neutral-500">
            <img src={logoSrc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
