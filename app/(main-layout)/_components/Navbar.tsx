'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiShoppingBag, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';
import navLinks from '../_constants/navLinks';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            >
              <Image
                src="/images/logo/logo-light.svg"
                alt="ByteSpace Logo"
                width={128}
                height={32}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          <nav
            aria-label="Main Navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`text-label-md rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    isActive
                      ? 'font-medium text-secondary'
                      : 'font-light text-white hover:text-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              href="/login"
              className="text-label-md font-light text-white transition-colors hover:text-secondary"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="text-label-md font-light text-white transition-colors hover:text-secondary"
            >
              Join Us
            </Link>
            <button
              type="button"
              className="rounded-full p-2 text-white transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="View Shopping Bag"
            >
              <FiShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              className="p-2 text-white transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label="View Shopping Bag"
            >
              <FiShoppingBag className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={toggleMobileMenu}
              className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-white backdrop-blur-md transition-all hover:border-secondary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
              aria-label={mobileMenuOpen ? 'Close main menu' : 'Open main menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <FiX className="h-5 w-5 text-secondary" aria-hidden="true" />
              ) : (
                <FiMenu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="mx-4 my-2 space-y-6 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group flex items-center justify-between text-label-md rounded-xl px-4 py-3 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary ${
                    isActive
                      ? 'bg-secondary font-semibold text-neutral-950 shadow-md shadow-secondary/20'
                      : 'font-light text-white hover:bg-white/10 hover:text-secondary'
                  }`}
                >
                  <span>{link.label}</span>
                  <FiArrowRight
                    className={`h-4 w-4 transition-transform group-hover:translate-x-1 ${
                      isActive
                        ? 'text-neutral-950'
                        : 'opacity-0 group-hover:opacity-100'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              );
            })}
          </nav>

          <div className="grid grid-cols-2 gap-2.5 border-t border-white/15 pt-4">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="text-label-md rounded-xl border border-white/15 py-3 text-center font-light text-white transition-all hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="text-label-md rounded-xl border border-white/15 py-3 text-center font-light text-white transition-all hover:bg-white/10"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
