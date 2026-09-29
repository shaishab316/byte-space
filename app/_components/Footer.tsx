import React from 'react';
import { NewsletterForm } from './NewsletterForm';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-background text-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
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
            {/* Column 1 */}
            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              <a href="#" className="hover:text-foreground transition-colors">
                Featured Courses
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Featured Categories
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Business
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                IT
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Design
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              <a href="#" className="hover:text-foreground transition-colors">
                Development
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Marketing
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Photography
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Finance
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Sport
              </a>
            </div>

            <div className="flex flex-col space-y-3 text-body-sm text-neutral-700">
              <a href="#" className="hover:text-foreground transition-colors">
                Become a Creator
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Affiliate Program
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Help
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-body-xs text-neutral-600">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
