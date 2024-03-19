import Image from 'next/image';
import Link from 'next/link';
import { ButtonOne } from './ButtonOne';

export function Header() {
  const navigation = [
    { name: 'Services', href: '/' },
    { name: 'Showcase', href: '/appliances' },
    { name: 'Pricing', href: '/digital-printing' },
  ];

  return (
    <header className='w-full border-b-2'>
      <nav className=' mx-auto max-w-7xl flex justify-between p-6 items-center'>
        <div className='min-w-[120px]'>
          <Image src='/logo_black.png' alt='logo' width='40' height='100' />
        </div>
        <div className='flex gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='text-base font-semibold text-gray-600'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='min-w-[120px]'>
          <ButtonOne text='Book a call' />
        </div>
      </nav>
    </header>
  );
}
