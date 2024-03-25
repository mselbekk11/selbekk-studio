import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

const space = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Selbekk Studio',
  description:
    'We design & build websites that drive results and help your Business grow. No BS. Just Results.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const CrispWithNoSSR = dynamic(() => import('../components/crisp'));

  return (
    <html lang='en' className='!scroll-smooth'>
      <CrispWithNoSSR />
      <body className={space.className}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
