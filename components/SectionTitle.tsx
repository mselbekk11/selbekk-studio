'use client';

interface SectionTitleProps {
  text: string;
  title: string;
}

export function SectionTitle({ text, title }: SectionTitleProps) {
  return (
    <>
      <h2 className='text-2xl md:text-3xl font-semibold py-6'>{title}</h2>
      <p className='text-base md:text-lg font-semibold text-gray-500 pb-24 max-w-[500px]'>{text}</p>
    </>
  );
}
