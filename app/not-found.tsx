import Link from 'next/link';
import Navbar from './(main-layout)/_components/Navbar';
import Footer from './(main-layout)/_components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen w-full bg-primary text-primary-foreground flex flex-col justify-between overflow-hidden font-sans py-12">
        <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />

        <main className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 py-12">
          <div
            className="w-4xl h-89.25 max-w-full bg-secondary"
            style={{
              maskImage: 'url(/images/svg/404.svg)',
              WebkitMaskImage: 'url(/images/svg/404.svg)',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
          />

          <h2 className="font-heading text-heading-sm sm:text-heading-md md:text-heading-lg font-semibold max-w-2xl -mt-4 sm:-mt-8 leading-tight relative z-20">
            The page you are looking for doesn’t exist
          </h2>

          <p className="font-body text-body-xs sm:text-body-sm text-primary-foreground/80 mt-4 max-w-md">
            Try to use a correct url or go back to homepage to start again
          </p>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-heading text-label-sm font-semibold hover:brightness-105 active:scale-95 transition-all shadow-md"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
