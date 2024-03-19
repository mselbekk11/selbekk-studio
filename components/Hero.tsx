import { ButtonOne } from './ButtonOne';
import { ButtonTwo } from './ButtonTwo';
import { ClientList } from './ClientList';

export function Hero() {
  return (
    <div className='mx-auto max-w-7xl flex flex-col items-center border-dotted border-x-2 py-28 text-center'>
      <div className='border-dotted border-y-2 border-gray-200 flex flex-col items-center w-full'>
      <h1 className='text-6xl font-semibold py-6 '>
        Custom High-Performance Websites<br /> with
        <span className='text-[#215DFF]'> Stunning Design & Speed</span>
      </h1>
      </div>
      <div className='border-dotted border-b-2 border-gray-200 w-full flex flex-col items-center'>
        <div className='py-12 max-w-2xl'>
          <h3 className='text-lg font-semibold text-gray-500 pb-12'>
            We design & build websites that drive <br /> results and help your
            Business grow. No BS. Just Results.
          </h3>
          <div className='grid grid-cols-2 gap-x-4'>
            <ButtonOne text='Book a Discovery Call' />
            <ButtonTwo text='See Previous Work' />
          </div>
        </div>
      </div>
      <div className='border-dotted border-b-2 border-gray-200 flex flex-col items-center w-full'>
        <div className='py-8 px-8 max-w-2xl flex flex-col items-center border-dotted border-x-2 border-gray-200'>
          <h3 className='text-sm font-semibold text-gray-500 pb-4'>
            Trusted by Founders and Small Business owners globally
          </h3>
          <ClientList />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center mb-10 w-full'></div>
    </div>
  );
}
