'use client';

import React, { useState } from 'react';
import { FiShoppingBag, FiMenu, FiX } from 'react-icons/fi';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a
              href="#"
              className="flex items-center gap-2 group focus:outline-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo/logo-light.svg"
                alt="ByteSpace Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-label-md font-medium text-foreground hover:text-secondary transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-label-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-label-md font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Creators
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-label-md font-medium text-foreground hover:text-secondary transition-colors"
            >
              Sign In
            </a>

            <a
              href="#"
              className="text-label-md font-medium text-foreground hover:text-secondary transition-colors"
            >
              Join Us
            </a>

            <button
              type="button"
              className="p-2 text-foreground hover:text-secondary transition-colors rounded-full hover:bg-muted focus:outline-none"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag className="w-5 h-5" />
            </button>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              className="p-2 text-foreground hover:text-secondary transition-colors focus:outline-none"
              aria-label="Shopping Bag"
            >
              <FiShoppingBag className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pt-4 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            <a
              href="#"
              className="text-label-md font-medium text-foreground py-2 px-3 rounded-lg hover:bg-muted transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-label-md font-medium text-muted-foreground py-2 px-3 rounded-lg hover:text-foreground hover:bg-muted transition-colors"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-label-md font-medium text-muted-foreground py-2 px-3 rounded-lg hover:text-foreground hover:bg-muted transition-colors"
            >
              Creators
            </a>
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="#"
              className="text-label-md font-medium text-center text-foreground py-2.5 rounded-lg hover:bg-muted transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-label-md font-medium text-center text-foreground py-2.5 rounded-lg hover:bg-muted transition-colors"
            >
              Join Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
