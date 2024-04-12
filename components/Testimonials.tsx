import { SectionTitle } from './SectionTitle';
import Script from 'next/script';

export function Testimonials() {
  return (
    <>
      <div className='px-4 bg-[#fff] border-b-2 border-[#D9D9D9]'>
        <div className=''>
          <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 pt-20 md:pt-28 text-center'>
            <SectionTitle
              loop='Testimonials'
              title='What our clients have to say'
              text='Hear directly from our valued clients, whose testimonials reflect
        the exceptional service and transformative results we consistently deliver'
            />
          </div>
          <div className='mx-auto max-w-7xl md:border-dotted md:border-x-2 pb-24'>
            <div
              className='senja-embed'
              data-id='e90a76ee-eafd-4c03-9ae7-02c99bcb20d0'
              data-lazyload='false'
              data-mode='shadow'
            ></div>
            {/* This changed from <script> to <Script> */}
            <Script
              async
              type='text/javascript'
              src='https://static.senja.io/dist/platform.js'
            ></Script>
          </div>
        </div>
      </div>
    </>
  );
}
