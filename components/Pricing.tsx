'use client';

import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { CirclePlus } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export function Pricing() {
  return (
    <div className='px-4 bg-white' id='pricing'>
      <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 py-20 md:py-28 text-center'>
        <SectionTitle
          title='The right price for you'
          text='Simple and affordable pricing that makes sense for your business.
          No hidden fees'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 w-full'>
          <div className='border-2 border-[#000]'>
            <div className='border-b-2 border-[#000] grid grid-cols-2 p-6 bg-[#fff]'>
              <div className='flex flex-col text-left'>
                <div className='text-xl md:text-2xl font-bold pb-2'>
                  Website
                </div>
                <div className='text-base md:text-lg text-gray-500'>
                  One off Payment
                </div>
              </div>
              <div className='flex flex-col justify-center text-3xl md:text-4xl font-semibold text-[#2568FF] text-right'>
                $1,999
              </div>
            </div>
            <div className='text-sm md:text-base border-b-2 border-[#000] p-6 text-left text-gray-500'>
              Best for early-stage startups and small businesses that need a
              marketing site that drives leads and business{' '}
            </div>
            <div className='p-6'>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Custom Design
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Development
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Mobile Responsive
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  CMS integration
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Deployment
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Search Engine Optimization
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  24 hour support
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Private Communication channel
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  7-14 day turn around
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Up to 3 design revisions
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Contact form
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Custom illustrations
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Logo
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Branding Package
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Database creation & Management
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Customer Portal
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Recieve Payments
                </p>
              </div>
              <div className='flex items-center w-full pb-6'>
                <CirclePlus color='#ccc' size={20} className='mr-2 rotate-45' />
                <p className='text-sm md:text-base leading-8 text-[#ccc]'>
                  Custom Fonts
                </p>
              </div>
              <button className='bg-[#2568FF] py-2 px-6 text-[#fff] rounded third_button hover:duration-300 w-full'>
                Buy Now
              </button>
            </div>
          </div>
          <div className='border-2 border-[#000]'>
            <div className='border-b-2 border-[#000] grid grid-cols-2 p-6 bg-[#000]'>
              <div className='flex flex-col text-left'>
                <div className='text-xl md:text-2xl font-bold pb-2 text-white'>
                  Website Plus
                </div>
                <div className='text-base md:text-lg text-gray-300'>
                  Prices Start from:
                </div>
              </div>
              <div className='flex flex-col justify-center text-3xl md:text-4xl font-semibold text-[#fff] text-right'>
                $2,999
              </div>
            </div>
            <div className='text-sm md:text-base border-b-2 border-[#000] p-6 text-left text-gray-500'>
              Best for companies that want something custom made from start to
              finish.
            </div>
            <div className='p-6'>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Custom Design
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Development
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Mobile Responsive
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  CMS integration
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Deployment
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Search Engine Optimization
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  24 hour support
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Private Communication channel
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  7-14 day turn around
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Up to 3 design revisions
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Contact form
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Custom illustrations
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Logo
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Branding Package
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-baseleading-8 text-black'>
                  Database creation & Management
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Customer Portal
                </p>
              </div>
              <div className='flex items-center w-full pb-2'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Recieve Payments
                </p>
              </div>
              <div className='flex items-center w-full pb-6'>
                <CheckCircle2 color='#000' size={20} className='mr-2' />
                <p className='text-sm md:text-base leading-8 text-black'>
                  Custom Fonts
                </p>
              </div>
              <button className='bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300 w-full'>
                Book a Discovery Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
