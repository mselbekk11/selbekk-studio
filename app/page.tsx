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



export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>

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
