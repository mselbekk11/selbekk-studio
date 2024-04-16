// SuccessMessage.tsx

import IconOne from '../assets/paperplane-send.json';
import Lottie from 'lottie-react';

const SuccessMessage = () => {
  return (
    <div className='text-center p-6'>
      <h1 className='text-lg md:text-3xl font-semibold pb-6 lg:pb-12 text-gray-900'>
        Thank you for getting in Contact.
        <br /> We will be in touch Shortly!
      </h1>
      <div className='flex flex-col items-center'>
        <Lottie animationData={IconOne} className='w-20 h-20' />
      </div>
    </div>
  );
};

export default SuccessMessage;
