'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import Link from 'next/link';

export interface AuthField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder: string;
}

interface AuthFormProps {
  eyebrow: string;
  title: string;
  fields: AuthField[];
  submitLabel: string;
  submitClassName: string;
  showSocialProviders?: boolean;
  footerText: string;
  footerLink: { href: string; label: string };
}

export function AuthForm({
  eyebrow,
  title,
  fields,
  submitLabel,
  submitClassName,
  showSocialProviders = false,
  footerText,
  footerLink,
}: AuthFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleSocialLogin = (provider: 'facebook' | 'google') => {
    console.log('social login ', provider);
  };

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 shadow-2xl max-w-md w-full mx-auto">
      <span className="text-[18px] font-semibold text-blue-600 uppercase tracking-wider block mb-1">
        {eyebrow}
      </span>
      <h2 className="text-[44px] leading-[120%] tracking-[-0.44px] font-extrabold text-slate-900 mb-8">
        {title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-xs font-semibold text-slate-500 mb-2">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] ?? ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
        ))}

        <div className="pt-4 flex justify-end">
          <button
            type="submit"
            className={`${submitClassName} font-semibold px-8 py-3 rounded-full transition-all text-sm active:scale-95 cursor-pointer`}
          >
            {submitLabel}
          </button>
        </div>
      </form>

      {showSocialProviders && (
        <>
          <div className="relative my-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative bg-white px-4 text-sm text-slate-400">
              or
            </div>
          </div>

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
        </>
      )}

      <div
        className={`${
          showSocialProviders ? '' : 'mt-12 '
        }text-center text-[16px] text-slate-500`}
      >
        {footerText}{' '}
        <Link
          href={footerLink.href}
          className="text-blue-600 font-semibold hover:underline"
        >
          {footerLink.label}
        </Link>
      </div>
    </div>
  );
}
