'use-client';

interface ButtonTwoProps {
  text: string;
}

export function ButtonTwo({ text }: ButtonTwoProps) {
  return (
    <button className='text-base bg-[#fff] py-2 px-6 text-[#000] rounded border-2 border-black primary_button hover:duration-300 w-full'>
      {text}
    </button>
  );
}
