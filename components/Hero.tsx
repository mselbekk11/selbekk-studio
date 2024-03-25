import Link from 'next/link';
import { ButtonOne } from './ButtonOne';
import { ButtonTwo } from './ButtonTwo';
import { ClientList } from './ClientList';

export function Hero() {
  return (
    <div className='px-4'>
      <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 pt-10 lg:pt-28 text-center'>
        <div className='border-dotted border-y-2 border-gray-200 flex flex-col items-center w-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold py-6 '>
            Custom High-Performance Websites
            <br className='hidden lg:block' /> with
            <span className='text-[#215DFF]'> Stunning Design & Speed</span>
          </h1>
        </div>
        <div className='border-dotted border-b-2 border-gray-200 w-full flex flex-col items-center'>
          <div className='py-12 max-w-2xl'>
            <h3 className='text-sm md:text-lg font-medium text-gray-500 pb-6'>
              We design & build websites that drive <br /> results and help your
              Business grow. No BS. Just Results.
            </h3>
            <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4'>
              <ButtonOne text='Book a Discovery Call' />
              <Link href='/#showcase'>
                <ButtonTwo text='See Previous Work' />
              </Link>
            </div>
          </div>
        </div>
        <div className='border-dotted border-b-2 border-gray-200 flex flex-col items-center w-full'>
          <div className='py-8 px-8 max-w-2xl flex flex-col items-center md:border-dotted md:border-x-2 border-gray-200'>
            <h3 className='text-sm font-medium text-gray-500 pb-4'>
              Trusted by Founders and Small Business owners globally
            </h3>
            <ClientList />
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mb-10 w-full'></div>
      </div>
    </div>
  );
}
