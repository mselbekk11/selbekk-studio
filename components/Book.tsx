import { ButtonOne } from './ButtonOne';
import { SectionTitle } from './SectionTitle';

export function Book() {
  return (
    <div className=' bg-white px-4'>
      <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 pb-20 text-center'>
        <div className='flex flex-col w-full bg-[#2568FF] py-20 px-6'>
          <h1 className='text-2xl lg:text-4xl font-semibold text-white pb-6'>
            Want a website that converts?
          </h1>
          <h3 className='text-sm lg:text-lg font-medium text-[#E4E4E4] pb-6'>
            We design & build websites that drive results and help your Business
            grow. <br className='hidden lg:block' /> No Calls. No BS. Just
            Results.
          </h3>
          <div>
            <a href='https://cal.com/morgan-selbekk-9fhtxr'>
              <button className='bg-[#000] py-2 px-6 text-[#fff] rounded secondary_button hover:duration-300'>
                Book a Discovery Call
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
