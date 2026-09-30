import { CheckCircleIcon } from '@/components/icons';

const features = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
];

export default function CreateCourses() {
  return (
    <section className="">
      <div className="mx-auto grid max-w-7xl items-center justify-between gap-12 lg:grid-cols-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero/ManageCourses.png" alt="" />

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
                <CheckCircleIcon />
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
}
