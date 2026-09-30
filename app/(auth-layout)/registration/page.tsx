'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="relative min-h-screen bg-primary text-primary-foreground flex flex-col justify-between font-sans overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />
      {/* Main Container */}
      <nav className="max-w-7xl w-full mx-auto my-5.5">
        <img src="/images/logo/logo.svg" alt="" className="size-7.5" />
      </nav>
      <main className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 my-auto py-18">
        {/* Left Side: Branding & Decorative UI Cards */}
        <div className="flex flex-col gap-6">
          <div className="max-w-md">
            <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              Sign up and come in
            </h1>
            <p className="text-blue-200 text-sm md:text-base leading-relaxed">
              The registration process is straightforward, uncomplicated, and
              efficient, allowing users to sign up quickly, easily, and at no
              cost.
            </p>
          </div>

          {/* Graphical / UI Mockup Overlay Section */}
          <img src="/images/hero/part-223.png" alt="" />
        </div>

        {/* Right Side: Sign-Up Form Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl max-w-md w-full mx-auto">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Create an Account
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
            Welcome to ByteSpace
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Jamie Davis"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="designer@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold px-8 py-3 rounded-full transition-all text-sm shadow-md hover:shadow-lg active:scale-95"
              >
                Continue
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-xs text-slate-500">
            Already have an account?{' '}
            <Link
              href="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </div>
        </div>
      </main>

      <footer />
    </div>
  );
}
