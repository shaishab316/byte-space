import React from 'react';

export const learningPaths = [
  { name: 'Design', icon: 'design' },
  { name: 'Development', icon: 'development' },
  { name: 'IT & Software', icon: 'it' },
  { name: 'Business', icon: 'business' },
  { name: 'Marketing', icon: 'marketing' },
  { name: 'Photography', icon: 'photography' },
];

const iconMap: Record<string, React.ReactNode> = {
  design: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  ),
  development: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  it: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  business: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  marketing: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  photography: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  ),
};

export const LearningPaths: React.FC = () => {
  return (
    <section className="bg-neutral-50 px-4 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-sm text-neutral-500 md:text-base">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring
          there&apos;s something for everyone. Unleash your potential and
          explore our carefully curated categories.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {learningPaths.map((path) => (
            <button
              key={path.name}
              className="flex h-28 w-28 flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-primary hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                {iconMap[path.icon]}
              </span>
              <span className="text-sm font-medium text-neutral-800">
                {path.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPaths;
