import Image from 'next/image';

export function ClientList() {
  return (
    <div className='flex -space-x-4 rtl:space-x-reverse'>
      <Image
        className='w-10 h-10 rounded-full'
        src='/profile-shot-celina.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full'
        src='/profile-shot-chris.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full'
        src='/profile-shot-jack.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full '
        src='/profile-shot-joe.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full '
        src='/profile-shot-alex.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full '
        src='/profile-shot-per.png'
        alt='/'
        width='100'
        height='100'
      />
      <Image
        className='w-10 h-10 rounded-full '
        src='/luba-profile-shot-luba.png'
        alt='/'
        width='100'
        height='100'
      />
    </div>

    // <div className='flex -space-x-2'>
    //   <div className='hs-tooltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    //   <div className='hs-tolltip inline-block'>
    //     <Image
    //       className='hs-tooltip-toggle relative inline-block size-[46px] rounded-full ring-2 ring-white hover:z-10'
    //       src='/morgan.png'
    //       alt='/'
    //       width='100'
    //       height='100'
    //     />
    //     <span
    //       className='hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700'
    //       role='tooltip'
    //     >
    //       Morgan
    //     </span>
    //   </div>
    // </div>
    // <div className='flex -space-x-2'>
    //   <Image
    //     className='inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800'
    //     src='/morgan.png'
    //     alt='/'
    //     width='100'
    //     height='100'
    //   />
    //   <Image
    //     className='inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800'
    //     src='/morgan.png'
    //     alt='/'
    //     width='100'
    //     height='100'
    //   />
    //   <Image
    //     className='inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800'
    //     src='/morgan.png'
    //     alt='/'
    //     width='100'
    //     height='100'
    //   />
    //   <Image
    //     className='inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800'
    //     src='/morgan.png'
    //     alt='/'
    //     width='100'
    //     height='100'
    //   />
    //   <Image
    //     className='inline-block size-8 rounded-full ring-2 ring-white dark:ring-gray-800'
    //     src='/morgan.png'
    //     alt='/'
    //     width='100'
    //     height='100'
    //   />
    // </div>
  );
}
