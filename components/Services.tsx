'use client';

// import Icon from './Icon';
// import IconFive from './IconFive';
// import IconFour from './IconFour';
// import IconSix from './IconSix';
// import IconThree from './IconThree';
// import IconTwo from './IconTwo';
import IconOne from '../assets/web-design.json';
import IconTwo from '../assets/interface-settings.json';
import IconThree from '../assets/servers.json';
import IconFour from '../assets/magnifier-plus.json';
import IconFive from '../assets/chat-message.json';
import IconSix from '../assets/approve-checked-simple.json';
import Lottie from 'lottie-react';
import { SectionTitle } from './SectionTitle';

export function Services() {
  const Services = [
    {
      name: 'Website Design',
      description:
        'Our website design services create visually captivating, intuitive interfaces that reflect your brands essence and engage your audience',
      icon: IconOne,
    },
    {
      name: 'Website Development',
      description:
        'We deliver cutting-edge website development, building seamless, dynamic, and responsive sites tailored to your unique requirements',
      icon: IconTwo,
    },
    {
      name: 'Hosting, deployment & maintenance',
      description:
        'Rely on us for hassle-free hosting, quick deployment, and meticulous maintenance, ensuring your websites optimal performance and security',
      icon: IconThree,
    },
    {
      name: 'Get Found on Google',
      description:
        'Boost your online visibility with our SEO expertise, helping your website achieve top rankings on Google and attract more visitors',
      icon: IconFour,
    },
    {
      name: 'Regular Updates & Progress Tracking',
      description:
        'Stay up-to date with your websites progress with consistent updates and detailed tracking, ensuring continuous improvement & alignment with your goals.',
      icon: IconFive,
    },
    {
      name: 'And Everything Else',
      description:
        'Whether its launching an ecommerce website or executing email marketing campaigns, we cater to all your online business needs.',
      icon: IconSix,
    },
  ];

  return (
    <div
      className='px-4 bg-[#F6F6F6] mt-12 border-y-2 border-[#D9D9D9]'
      id='services'
    >
      <div className=''>
        <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 py-20 md:py-28 text-center'>
          <SectionTitle
            title='We handle just about everything'
            text='We handle everything from design to deployment to get your website shipped and ready to go!'
          />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left'>
            {Services.map((item) => (
              <div
                key={item.name}
                className='border-2 border-[#f0f0f0] p-6 bg-white '
              >
                <div className='pb-2'>
                  <Lottie animationData={item.icon} className='w-12 h-12' />
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
