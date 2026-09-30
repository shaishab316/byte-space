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

  const handleSocialLogin = (provider: 'facebook' | 'google') => {
    console.log('social login ', provider);
  };

  return (
    <div className="relative min-h-screen bg-primary text-primary-foreground flex flex-col justify-between font-sans overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-grid-[80px] opacity-20 bg-grid-color-white bg-grid-line-[1px]" />
      {/* Main Container */}
      <nav className="max-w-7xl w-full mx-auto my-6">
        <Link href="/">
          <img src="/images/logo/logo.svg" alt="" className="size-7.5" />
        </Link>
      </nav>
      <main className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 my-auto py-18">
        {/* Left Side: Branding & Decorative UI Cards */}
        <div className="flex flex-col gap-6">
          <div className="max-w-md">
            <h1 className="text-xl md:text-2xl font-medium tracking-tight mb-3">
              Sign in with ease
            </h1>
            <p className="text-blue-200 text-sm md:text-base leading-relaxed">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>

          {/* Graphical / UI Mockup Overlay Section */}
          <img src="/images/hero/part-223.png" alt="" />
        </div>

        {/* Right Side: Sign-Up Form Card */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl max-w-md w-full mx-auto">
          <span className="text-[18px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">
            Sign In
          </span>
          <h2 className="text-[44px] leading-[120%] tracking-[-0.44px] font-extrabold text-slate-900 mb-8">
            Welcome Back
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                required
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#CCFF00] hover:bg-[#b8e600] text-black font-semibold px-8 py-3 rounded-full transition-all text-sm active:scale-95 cursor-pointer"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Social Auth Divider */}
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative bg-white px-4 text-sm text-slate-400">
              or
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => handleSocialLogin('facebook')}
              className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current text-slate-900"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => handleSocialLogin('google')}
              className="w-14 h-14 rounded-2xl border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <svg
                className="w-6 h-6 fill-current text-slate-900"
                viewBox="0 0 24 24"
              >
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2 C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z" />
              </svg>
            </button>
          </div>

          <div className="text-center text-[16px] text-slate-500">
            New user?{' '}
            <Link
              href="/registration"
              className="text-blue-600 font-semibold hover:underline"
            >
              Create an account
            </Link>
          </div>
        </div>
      </main>

      <footer />
    </div>
  );
}
