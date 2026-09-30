import { CheckCircleIcon } from '@/components/icons';

const features = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export default function CreateCourses() {
  return (
    <section className="px-4 sm:px-6 py-8 md:py-12">
      <div className="mx-auto grid max-w-7xl items-center justify-between gap-8 md:gap-12 lg:grid-cols-2">
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero/ManageCourses.png"
            alt="Manage Courses"
            className="w-full max-w-md lg:max-w-none object-contain"
          />
        </div>

        <div className="-mt-15 mb-10 lg:m-0">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-neutral-950 md:text-4xl">
            Create & Manage
            <br className="hidden sm:inline" /> Courses Easily.
          </h2>
          <p className="mb-8 max-w-md text-sm text-neutral-500 md:text-base">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <ul className="space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircleIcon className="shrink-0" />
                <span className="text-sm font-medium text-neutral-800 md:text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
