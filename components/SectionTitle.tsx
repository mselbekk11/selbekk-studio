'use client';

interface SectionTitleProps {
  loop: string;
  text: string;
  title: string;
}

export function SectionTitle({ loop, text, title }: SectionTitleProps) {
  return (
    <>
    <div className="inline-block rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
      {loop}
    </div>
      <h2 className='text-2xl md:text-3xl font-semibold py-6'>{title}</h2>
      <p className='text-base md:text-lg font-semibold text-gray-500 pb-24 max-w-[500px]'>{text}</p>
    </>
  );
}
