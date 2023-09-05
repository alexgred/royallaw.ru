import './globals.css';
import './bootstrap/css/bootstrap.min.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royal Law',
  description: 'Royal Law site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`front-page ${openSans.className}`}>{children}</body>
    </html>
  );
}
