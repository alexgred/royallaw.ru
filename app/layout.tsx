import '@/app/globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navigation from '@/components/Navigation/Navigation';
import Footer from '@/components/Footer/Footer';
import localFont from 'next/font/local';

const fontAwesome = localFont({
  src: '../assets/fonts/fontawesome-webfont.woff2',
  display: 'swap',
  variable: '--font-icon',
});

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
      <body className={`${fontAwesome.variable} ${openSans.className}`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
