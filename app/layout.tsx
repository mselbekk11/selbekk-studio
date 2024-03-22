import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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
  return (
    <html lang='en'>
      <body className={space.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
