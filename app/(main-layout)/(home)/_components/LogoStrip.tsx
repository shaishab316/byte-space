import React from 'react';

const logos = ['Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum', 'Logoipsum'];

export const LogoStrip: React.FC = () => {
  return (
    <section className="w-full border-b border-neutral-100 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 opacity-60">
        {logos.map((name, i) => (
          <div key={i} className="flex items-center gap-2 text-neutral-500">
            <span className="text-lg font-semibold tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;
