'use client';

import IconOne from '../assets/binoculars-telescope.json';
import IconTwo from '../assets/paint-bucket.json';
import IconThree from '../assets/launcher-bazooka.json';
import Lottie from 'lottie-react';

import { SectionTitle } from './SectionTitle';

export function HowThisWorks() {
  const Howthisworks = [
    {
      name: 'Discovery',
      description: 'Discovery call or email thread exploring your requirements',
      icon: IconOne,
    },
    {
      name: 'Design & Build',
      description: 'Design and Develop your custom website together',
      icon: IconTwo,
    },
    {
      name: 'Launch & Scale',
      description:
        'Get your site live and grow your business with optimised SEO & support',
      icon: IconThree,
    },
  ];

  return (
    <div className='px-4 bg-[#F6F6F6] border-y-2 border-[#D9D9D9]'>
      <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 py-20 md:py-28 text-center'>
        <SectionTitle
          title='How this works'
          text='Discover our streamlined process, designed to guide you
          effortlessly from initial concept to final launch'
        />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-left'>
          {Howthisworks.map((item) => (
            <div
              key={item.name}
              className='border-2 border-[#AAAAAA] p-6 bg-white flex flex-col items-center text-center'
            >
              {/* <div className='pb-2'>{item.image}</div> */}
              <div className='pb-4'>
                <Lottie animationData={item.icon} className='w-28 h-28' />
              </div>
              <div className='text-lg font-semibold text-black pb-4'>
                {item.name}
              </div>
              <div className='text-base text-gray-400 px-6'>
                {item.description}
              </div>
            </div>
          ))}
        </div>
        {/* <Icon /> */}
      </div>
    </div>
  );
}
