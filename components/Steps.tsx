'use client';

import IconOne from '../assets/binoculars-telescope.json';
import IconTwo from '../assets/compass.json';
import IconThree from '../assets/web-design.json';
import IconFour from '../assets/interface-settings.json';
import IconFive from '../assets/launcher-bazooka.json';
import IconSix from '../assets/support-service.json';
import Lottie from 'lottie-react';
import { SectionTitle } from './SectionTitle';

export function Steps() {
  const Services = [
    {
      name: 'Discovery & Research',
      description:
        'Through a discovery call, you tell us about your company origin, your message and your product. We then research your industry and the competition',
      icon: IconOne,
      number: '1',
    },
    {
      name: 'Visual Direction',
      description:
        'We reimagine the brand identity through various experiments with colors, graphics, animations, composition patterns and UI shapes',
      icon: IconTwo,
      number: '2',
    },
    {
      name: 'UI Design',
      description:
        'We create design systems which every page will follow under its guidelines. We iterate on each section until the mockup begins to shine',
      icon: IconThree,
      number: '3',
    },
    {
      name: 'Development',
      description:
        'We proceed with a pixel-perfect implementation of our designs using the latest development best practices, making them performant and secure',
      icon: IconFour,
      number: '4',
    },
    {
      name: 'Launch & Scale',
      description:
        'We will get your site live and help with your launch. We will also help your business grow with optimised SEO & support',
      icon: IconFive,
      number: '5',
    },
    {
      name: 'Maintenance',
      description:
        'At this point your website is live, but we are still here in case you need anything. We will make sure the project stays up-to-date, and help fix any issues',
      icon: IconSix,
      number: '6',
    },
  ];

  return (
    <div
      className='px-4 bg-[#F3F4F5] mt-12 border-y-2 border-[#D9D9D9]'
      id='services'
    >
      <div className=''>
        <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 py-20 md:py-28 text-center'>
          <SectionTitle
          loop='Process'
            title='How this works'
            text='Discover our streamlined process, designed to guide you effortlessly from initial concept to final launch'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left'>
            {Services.map((item) => (
              <div
                key={item.name}
                className='border-2 border-[#D9D9D9] p-6 bg-white rounded-md'
              >
                <div className='pb-2'>
                  {/* <Lottie animationData={item.icon} className='w-10 h-10' /> */}
                  <div className='w-10 h-10 rounded-full flex justify-center items-center border-2 border-[#D9D9D9] font-semibold text-[#215DFF]'>
                    {item.number}
                  </div>
                </div>
                {/* <div className='pb-2'>
                <Icon />
              </div> */}
                <div className='text-base font-semibold text-gray-600 pb-2'>
                  {item.name}
                </div>
                <div className='text-sm text-gray-400'>{item.description}</div>
              </div>
            ))}
          </div>
          {/* <Icon /> */}
        </div>
      </div>
    </div>
  );
}
