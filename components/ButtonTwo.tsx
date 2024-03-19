'use-client';

interface ButtonTwoProps {
  text: string;
}

export function ButtonTwo({ text }: ButtonTwoProps) {
  return (
    <button className='bg-[#fff] py-2 px-6 text-[#000] rounded border-2 border-black'>
      {text}
    </button>
  );
}
