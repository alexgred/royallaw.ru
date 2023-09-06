import './bootstrap/css/bootstrap.min.css';
import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';


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
      <body className={`front-page ${openSans.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
