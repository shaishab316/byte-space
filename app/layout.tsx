import type { Metadata } from 'next';
import { poppins, satoshi } from '@/lib/fonts';
import { StoreProvider } from '@/lib/store/provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'ByteSpace — Courses, Creators and Learning Paths',
  description:
    'Discover courses, follow creators and grow your skills with ByteSpace.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${satoshi.variable}`}>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
