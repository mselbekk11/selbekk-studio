import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6'>
      <Image
        src='/logo-white.svg'
        alt='logo'
        width='50'
        height='50'
        className='pb-6'
      />
      <p className='text-gray-500 pb-2 text-xs lg:text-base'>
        Copyright © 2024 Selbekk Solutions. All rights reserved.
      </p>
      <div className='text-gray-500 text-xs lg:text-base'>
        <Link href='/terms-and-conditions' className='hover:underline'>
          Terms & Conditions
        </Link>{' '}
        |{' '}
        <Link href='/privacy-policy' className='hover:underline'>
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
