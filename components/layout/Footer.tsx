import { NewsletterForm } from '@/components/layout/NewsletterForm';

const courseLinks = [
  'Featured Courses',
  'Featured Categories',
  'Business',
  'IT',
  'Design',
];

const exploreLinks = [
  'Development',
  'Marketing',
  'Photography',
  'Finance',
  'Sport',
];

const companyLinks = [
  'Become a Creator',
  'Affiliate Program',
  'Contact',
  'Help',
  'About',
];

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookies Settings'];

export function Footer() {
  return (
    <footer className="w-full bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 md:pb-16">
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <a
              href="#"
              className="flex items-center gap-2 text-heading-xs font-heading font-bold text-foreground"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo/logo-dark.svg" alt="logo" />
            </a>

            <p className="text-body-sm text-neutral-600 max-w-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <NewsletterForm />

            <p className="text-body-xs text-neutral-500 max-w-xs">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2 lg:pt-0">
            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              {courseLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              {exploreLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              {companyLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-body-xs text-neutral-600">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
