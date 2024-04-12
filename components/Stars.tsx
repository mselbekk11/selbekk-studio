import Image from 'next/image';

export function Stars() {
  return (
    <div className='flex items-center mt-4 gap-1'>
      <Image className='' src='/star2.png' alt='star' width='15' height='15' />
      <Image className='' src='/star2.png' alt='star' width='15' height='15' />
      <Image className='' src='/star2.png' alt='star' width='15' height='15' />
      <Image className='' src='/star2.png' alt='star' width='15' height='15' />
      <Image className='' src='/star2.png' alt='star' width='15' height='15' />
    </div>
  );
}
