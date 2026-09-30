const logos = [
  '/images/logo-strip/1.svg',
  '/images/logo-strip/2.svg',
  '/images/logo-strip/3.svg',
  '/images/logo-strip/4.svg',
  '/images/logo-strip/5.svg',
];

export default function LogoStrip() {
  return (
    <section className="w-full border-b border-neutral-100 bg-neutral-50 py-20">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-4 sm:gap-x-18 sm:px-6 lg:px-0">
        {logos.map((logoSrc) => (
          <div key={logoSrc} className="flex items-center gap-2 text-neutral-500">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
