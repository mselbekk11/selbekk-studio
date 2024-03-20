'use client';

import Icon from './Icon';
import IconFive from './IconFive';
import IconFour from './IconFour';
import IconSix from './IconSix';
import IconThree from './IconThree';
import IconTwo from './IconTwo';
import { SectionTitle } from './SectionTitle';

export function Services() {
  const Services = [
    {
      name: 'Website Design',
      description:
        'Our website design services create visually captivating, intuitive interfaces that reflect your brands essence and engage your audience',
      image: <Icon />,
    },
    {
      name: 'Website Development',
      description:
        'We deliver cutting-edge website development, building seamless, dynamic, and responsive sites tailored to your unique requirements',
      image: <IconTwo />,
    },
    {
      name: 'Hosting, deployment & maintenance',
      description:
        'Rely on us for hassle-free hosting, quick deployment, and meticulous maintenance, ensuring your websites optimal performance and security',
      image: <IconThree />,
    },
    {
      name: 'Get Found on Google',
      description:
        'Our website design services create visually captivating, intuitive interfaces that reflect your brands essence and engage your audience',
      image: <IconFour />,
    },
    {
      name: 'Regular Updates & Progress Tracking',
      description:
        'We deliver cutting-edge website development, building seamless, dynamic, and responsive sites tailored to your unique requirements',
      image: <IconFive />,
    },
    {
      name: 'And Everything Else',
      description:
        'Rely on us for hassle-free hosting, quick deployment, and meticulous maintenance, ensuring your websites optimal performance and security',
      image: <IconSix />,
    },
  ];

  return (
    <div className=' bg-[#F6F6F6] mt-12 border-y-2 border-[#D9D9D9]'>
      <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 py-28 text-center'>
        <SectionTitle
          title='We handle just about everything'
          text='We handle everything from design to deployment to get your website shipped and ready to go!'
        />
        <div className='grid grid-cols-3 gap-6 text-left'>
          {Services.map((item) => (
            <div
              key={item.name}
              className='border-2 border-[#AAAAAA] p-6 bg-white'
            >
              <div className='pb-2'>{item.image}</div>
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
  );
}
