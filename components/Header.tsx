'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ButtonOne } from './ButtonOne';
import { AlignJustify } from 'lucide-react';
import MobileMenu from './MobileMenu';

import Drawer from 'react-modern-drawer';
import ContactForm from './ContactForm';
import React from 'react';

export function Header() {
  const navigation = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#showcase' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className='w-full bg-[#fff] sticky top-0 z-50 shadow-md shadow-slate-300'>
      <nav className=' mx-auto max-w-7xl flex justify-between py-4 px-4 items-center'>
        <Link href='/'>
          <div className='min-w-[120px]'>
            <Image src='/logo_black.png' alt='logo' width='35' height='100' />
          </div>
        </Link>
        <div className='flex lg:hidden'>
          <MobileMenu />
        </div>
        <div className='hidden lg:flex gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-base font-semibold text-gray-600 hover:text-[#215DFF]'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex min-w-[120px]'>
          <button
            className='font-semibold text-base bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300'
            onClick={toggleDrawer}
          >
            Contact Now
          </button>
          <Drawer
            open={isOpen}
            size='40vw'
            onClose={toggleDrawer}
            direction='right'
            className='hidden lg:block'
          >
            <ContactForm />
          </Drawer>
          {/* <ButtonOne text='Contact Now'  /> */}
        </div>
      </nav>
    </header>
  );
}
