import Link from 'next/link';
import { ButtonOne } from './ButtonOne';
import { ButtonTwo } from './ButtonTwo';
import { ClientList } from './ClientList';
import { Stars } from './Stars';

export function Hero() {
  return (
    <div className='px-4'>
      <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 pt-10 lg:pt-28 text-center'>
        <div className='border-dotted border-y-2 border-gray-200 flex flex-col items-center w-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-semibold py-6 '>
            High-Performance <br className='block lg:hidden' /> Websites with
            <br className='lg:block' />
            <span className='animate'> Stunning Design & Speed</span>
          </h1>
        </div>
        <div className='border-dotted border-b-2 border-gray-200 w-full flex flex-col items-center'>
          <div className='py-6 max-w-2xl'>
            <h3 className='text-sm md:text-lg font-medium text-gray-500 pb-6'>
              We design & build websites that drive results <br /> and help your
              business grow.
            </h3>
            {/* <div className='grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-x-4'>
              <ButtonOne text='Book a Discovery Call' />
              <Link href='/#showcase'>
                <ButtonTwo text='See Previous Work' />
              </Link>
            </div> */}
            <div className='flex justify-center'>
              <ButtonOne text='Contact Now' />
            </div>
          </div>
        </div>
        <div className='border-dotted border-b-2 border-gray-200 flex flex-col items-center w-full'>
          <div className='py-6 px-8 max-w-2xl flex flex-col items-center md:border-dotted md:border-x-2 border-gray-200'>
            <h3 className='text-sm font-medium text-gray-400 pb-4'>
              Trusted by founders globally.
            </h3>
            <ClientList />
            <Stars />
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mb-10 w-full'></div>
      </div>
    </div>
  );
}
