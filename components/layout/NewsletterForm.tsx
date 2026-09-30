'use client';

import { useState, type FormEvent } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Subscribed with email:', email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md"
    >
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-5 py-3 rounded-full border border-border bg-background text-body-sm text-foreground placeholder:text-neutral-400 focus:outline-none focus:border-primary transition-colors"
        required
      />
      <button
        type="submit"
        className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground text-label-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer text-center"
      >
        Subscribe
      </button>
    </form>
  );
}
