'use client';

import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export function Projects() {
  const Projects = [
    {
      name: 'Advaned Ortho Labs',
      description: 'A San Francisco based Orthodontic Lab',
      image: '/scroll3.png',
      href: 'https://www.advancedortholabsf.com/',
    },
    {
      name: 'Kodama',
      description: 'Family friendly NFT vesting software',
      image: '/scroll7.png',
      href: 'https://www.kodamanft.io/',
    },
    {
      name: 'JennyCo',
      description: 'AI-driven healthcare data marketplace',
      image: '/scroll1.png',
      href: 'https://www.jennyco.io/',
    },
  ];

  return (
    <div className=' bg-white px-4' id='showcase'>
      <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 py-20 md:py-28 text-center'>
        <SectionTitle
          title='Selected Projects'
          text='We take pride in building custom solutions that help
          Busienss owners turn their dreams into reality!'
        />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-6 text-left w-full'>
          {Projects.map((item) => (
            <div key={item.name} className='group'>
              <a href={item.href} target='blank'>
                <div className='p-2 w-full bg-[#F9F9F9] border-[#f0f0f0] border-x-2 border-t-2'>
                  <Image
                    src={item.image}
                    alt='project'
                    width='500'
                    height='500'
                    className='w-full'
                  />
                </div>
                <div className='px-6 pb-6 border-x-2 border-b-2 border-[#f0f0f0] bg-[#F9F9F9]'>
                  <div className='text-base font-semibold text-black pb-2 group-hover:text-[#2568FF]'>
                    {item.name}
                  </div>
                  <div className='text-sm text-gray-400'>
                    {item.description}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
