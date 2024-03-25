'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { AlignJustify, X } from 'lucide-react';
import { ButtonOne } from './ButtonOne';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Services', href: '/#services' },
    { name: 'Showcase', href: '/#showcase' },
    { name: 'Pricing', href: '/#pricing' },
  ];

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className='lg:hidden flex flex-col items-center'>
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls='mobile-nav'
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className='sr-only'>Menu</span>
        {mobileNavOpen ? (
          <X className='w-8 h-8 fill-current text-black' />
        ) : (
          <AlignJustify className='w-8 h-8 fill-current text-black' />
        )}
      </button>

      {/*Mobile navigation */}
      <nav
        id='mobile-nav'
        ref={mobileNav}
        className='absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out mt-4'
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className='bg-white px-6 py-6 border-2 border-gray-200 flex flex-col items-center'>
          {navigation.map((item) => (
            <li key={item.name} className='pb-6'>
              <Link
                key={item.name}
                href={item.href}
                className='text-base font-semibold text-gray-600'
                onClick={() => setMobileNavOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <a href='https://cal.com/morgan-selbekk-9fhtxr'>
              <button
                className='bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300'
                onClick={() => setMobileNavOpen(false)}
              >
                Book a Call
              </button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
