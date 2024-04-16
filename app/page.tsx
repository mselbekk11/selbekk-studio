'use client';

import { Book } from '@/components/Book';
import Hero from '@/components/Hero';
import { InfiniteMovingCardsDemo } from '@/components/Infinite-moving-cards-demo';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Steps } from '@/components/Steps';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/faq';

import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import ContactForm from '../components/ContactForm';

import Head from 'next/head';
import Logo from '@/public/selbekk-studio.png';

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <meta property='og:title' content='Selbekk Studio' />
        <meta
          property='og:description'
          content='We design & build websites that drive results and help your Business grow. No BS. Just Results.'
        />
        <meta
          property='og:image'
          content={`https://www.selbekk.studio/${Logo}`}
        />
        {/* Add additional Open Graph tags as needed */}
      </Head>

      <main className='min-h-screen'>
        <Hero />
        <InfiniteMovingCardsDemo />
        <Services />
        <Projects />
        <Steps />
        <Testimonials />
        <Faq />
        <Book />
        {/* <Drawer
          open={isOpen}
          size='40vw'
          lockBackgroundScroll={true}
          onClose={toggleDrawer}
          direction='right'
          className='hidden lg:block'
        >
          <ContactForm />
        </Drawer> */}
      </main>
    </>
  );
}
