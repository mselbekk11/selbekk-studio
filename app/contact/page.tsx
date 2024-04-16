'use client';
import ContactForm from '../../components/ContactForm';

export default function TestTwo() {
  return (
    <div className='bg-[#F3F4F5]'>
      <div className='min-h-screen mx-auto max-w-[800px] flex flex-col items-center pt-12 px-6 text-left'>
      <h1 className='text-lg md:text-3xl font-semibold pb-6 lg:pb-12 text-gray-900'>
        Building something new? Share a few details and we’ll get right back to
        you{' '}
      </h1>
        <ContactForm />
      </div>
    </div>
  );
}
