'use client';

import Link from 'next/link';
import { ButtonOne } from './ButtonOne';
import { SectionTitle } from './SectionTitle';

// import React from 'react';
// import Drawer from 'react-modern-drawer';
// import 'react-modern-drawer/dist/index.css';
// import ContactForm from './ContactForm';

export function Book() {
  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

  return (
    <div className=' bg-[#F3F4F5] px-4'>
      <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 pb-20 text-center'>
        <div className='flex flex-col w-full bg-[#2568FF] py-20 px-6 rounded-lg'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-white pb-6'>
            Want a website that converts?
          </h1>
          <h3 className='text-sm lg:text-lg font-medium text-[#E4E4E4] pb-6'>
            We design & build websites that drive results and help your Business
            grow. <br className='hidden lg:block' /> No Calls. No BS. Just
            Results.
          </h3>
          <div>
            {/* <a href='https://cal.com/morgan-selbekk-9fhtxr'>
              <button className='bg-[#000] py-2 px-6 text-[#fff] rounded secondary_button hover:duration-300'>
                Book a Discovery Call
              </button>
            </a> */}
            <Link href='/contact'>
              <button
                className='font-semibold text-base bg-[#000] py-2 px-6 text-[#fff] rounded secondary_button hover:duration-300'
                // onClick={toggleDrawer}
              >
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
