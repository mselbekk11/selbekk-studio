'use client';

interface ButtonOneProps {
  text: string;
}

export function ButtonOne({ text }: ButtonOneProps) {
  return (
    <button className='text-base bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300 w-full'>
      <a href='https://cal.com/morgan-selbekk-9fhtxr'> {text}</a>
    </button>
  );
}
