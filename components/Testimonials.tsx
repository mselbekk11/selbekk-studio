import { SectionTitle } from './SectionTitle';

export function Testimonials() {
  return (
    <>
      <div className='px-4 bg-[#fff]'>
        <div className=''>
          <div className='mx-auto max-w-7xl flex flex-col items-center md:border-dotted md:border-x-2 pt-20 md:pt-28 text-center'>
            <SectionTitle
              title='What our clients have to say'
              text='Hear directly from our valued clients, whose testimonials reflect
        the exceptional service and transformative results we consistently deliver'
            />
          </div>
        </div>
      </div>
    </>
  );
}
