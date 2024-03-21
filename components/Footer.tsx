import Image from 'next/image';

export function Footer() {
  return (
    <div className='w-full bg-[#000] flex flex-col items-center py-20 px-6'>
      <Image src='/logo-white.svg' alt='logo' width='50' height='50' className='pb-6'/>
      <p className='text-gray-500 pb-2 text-xs lg:text-base'>
        Copyright © 2024 Selbekk Solutions. All rights reserved.
      </p>
      <p className='text-gray-500 text-xs lg:text-base'>
        Terms & Conditions | Privacy Policy | Refund Policy
      </p>
    </div>
  );
}
