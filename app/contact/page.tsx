'use client';

import React, { useState } from 'react';
import ContactForm from '../../components/ContactForm';
import SuccessMessage from '../../components/SuccessMessage';

export default function TestTwo() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmission = () => {
    setIsSubmitted(true);
  };

  return (
    <div className='bg-[#F3F4F5]'>
      <div className='min-h-screen mx-auto max-w-[800px] flex flex-col items-center pt-12 px-6 text-left'>
        {isSubmitted ? (
          <SuccessMessage />
        ) : (
          <ContactForm onFormSubmit={handleSubmission} />
        )}
      </div>
    </div>
  );
}
