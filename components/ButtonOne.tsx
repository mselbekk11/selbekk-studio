'use client';

interface ButtonOneProps {
  text: string;
}

export function ButtonOne({ text }: ButtonOneProps) {
  return (
    <button className='bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300'>
      {text}
    </button>
  );
}
