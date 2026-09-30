import Link from 'next/link';

interface AuthShellProps {
  heading: string;
  description: string;
  children: React.ReactNode;
}

export function AuthShell({ heading, description, children }: AuthShellProps) {
  return (
    <div className="relative min-h-screen bg-primary text-primary-foreground flex flex-col justify-between font-sans overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />

      <nav className="max-w-7xl w-full mx-auto my-6 px-4 sm:px-6 lg:px-0">
        <Link href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo/logo.svg" alt="" className="size-7.5" />
        </Link>
      </nav>

      <main className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center z-10 my-auto py-18 px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col gap-6">
          <div className="max-w-md">
            <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              {heading}
            </h1>
            <p className="text-blue-200 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero/part-223.png" alt="" />
        </div>

        {children}
      </main>

      <footer />
    </div>
  );
}
