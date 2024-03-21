'use client';

import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

export function Projects() {
  const Projects = [
    {
      name: 'Advaned Ortho Labs',
      description: 'A San Francisco based Orthodontic Lab',
      image: '/scroll3.png',
    },
    {
      name: 'JennyCo',
      description: 'AI-driven healthcare data marketplace',
      image: '/scroll1.png',
    },
    {
      name: 'Kodama',
      description: 'Family friendly NFT vesting software',
      image: '/scroll7.png',
    },
  ];

  return (
    <div className=' bg-white px-4'>
      <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 py-28 text-center'>
        <SectionTitle
          title='Selected Projects'
          text='We take pride in building custom solutions that help
          Busienss owners turn their dreams into reality!'
        />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 text-left w-full'>
          {Projects.map((item) => (
            <div key={item.name} className='bg-white'>
              <div className='p-2 w-full bg-[#2F2F2F]'>
                <Image
                  src={item.image}
                  alt='project'
                  width='500'
                  height='500'
                />
              </div>
              <div className='p-6 border-x-2 border-b-2 border-[#AAAAAA] bg-[#F9F9F9]'>
                <div className='text-base font-semibold text-gray-600 pb-2'>
                  {item.name}
                </div>
                <div className='text-sm text-gray-400'>{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
