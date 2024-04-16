'use client';

import Image from 'next/image';
import { SectionTitle } from './SectionTitle';

import { Disclosure } from '@headlessui/react';
// import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import { Plus, Minus } from 'lucide-react';
import Link from 'next/link';

// import React from 'react';
// import Drawer from 'react-modern-drawer';
// import 'react-modern-drawer/dist/index.css';
// import ContactForm from './ContactForm';

export function Faq() {
  const faqs = [
    {
      question: 'What is the turnaround time?',
      answer:
        'It depends on the size of the Project, but for the basic website package, We usually deliver the first design draft within 1 week. Once approved, we start to build and The final website will be delivered within 2 weeks.',
    },
    {
      question: 'How do you communicate?',
      answer:
        'We use email, Slack and WhatsApp to communicate. We strongly prefer slack and keep the conversations async so that we can focus on building your website.',
    },
    {
      question: 'What is the process of working with you?',
      answer:
        'Our process involves adding you to a communication channel where you describe your requirements (a call is optional). We then dive deep into your project which involves research, ideation and iterations -- all this whilst working closely with you for instant feedback.',
    },
    {
      question: "What happens if I don't like the design?",
      answer:
        'We provide unlimited revisions until you are happy with the design. We will work with you to make sure you are happy with the design.',
    },
    {
      question: 'Are there any refunds?',
      answer:
        'Due to the high quality nature of the work, there will be no refunds issued.',
    },
    {
      question: 'What is your Tech Stack?',
      answer:
        'We are comfortable with all the major frameworks and technologies there are (since we are engineers). But yes, we have our favourites. We use Next.js and Tailwind CSS to build out your website. Next.js because it has SEO benefits, Tailwind because it makes us fast.',
    },
    {
      question:
        'What happens if I have to change the website after it is delivered?',
      answer:
        'We provide you with a video tutorial on how to make changes to your website. If you still need help, we can make changes for you at an hourly rate OR you can sign up for our retainer services. Contact us on the website chat for more details',
    },
  ];

  // const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  // };

  return (
    <div className=' bg-[#F3F4F5] px-4' id='faq'>
      <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 py-20 md:py-28 text-center'>
        <SectionTitle
          loop='FAQ'
          title='Frequently Asked Questions'
          text='Find answers to common inquiries,
          where we address your most pressing questions'
        />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-6 text-left w-full'>
          <div className='lg:col-span-2 border-[#000] border-2 px-6 pb-6 bg-[#fff] rounded-lg'>
            <dl className='space-y-6 divide-y divide-gray-900/10'>
              {faqs.map((faq) => (
                <Disclosure as='div' key={faq.question} className='pt-6'>
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className='flex w-full items-start justify-between text-left text-gray-900'>
                          <span className='text-sm md:text-base font-semibold leading-7'>
                            {faq.question}
                          </span>
                          <span className='ml-6 flex h-7 items-center'>
                            {open ? (
                              <Minus className='h-6 w-6' aria-hidden='true' />
                            ) : (
                              <Plus className='h-6 w-6' aria-hidden='true' />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as='dd' className='mt-2 pr-12'>
                        <p className='text-sm md:text-base leading-7 text-gray-600'>
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
          <div className='bg-[#000] text-white p-6 max-h-[300px] lg:flex flex-col items-center justify-center hidden rounded-lg'>
            <Image src='/logo_white-2.png' alt='logo' width='70' height='70' />
            <div className='py-4'>
              <p>Have more Questions?</p>
              <p>Book a free Intro Call</p>
            </div>
            {/* <a href='https://cal.com/morgan-selbekk-9fhtxr'>
              <button className='bg-[#fff] py-2 px-6 text-[#000] rounded primary_button hover:duration-300 w-full'>
                Book a Discovery Call
              </button>
            </a> */}
            <Link href='/contact'>
              <button
                className='font-semibold text-base bg-[#fff] py-2 px-6 text-[#000] rounded primary_button hover:duration-300'
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
