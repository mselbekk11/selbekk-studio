'use client';

import { FormEvent, useState } from 'react';
import { supabase } from '@/app/config/supabaseClient';

export default function ContactForm() {
  let currentDate = new Date().toJSON().slice(0, 10);
  // console.log(supabase);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [launch, setLaunch] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log(name, company, email, budget, launch, message);

    const { data, error } = await supabase.from('selbekk').insert([
      {
        name,
        company,
        email,
        budget,
        launch,
        message,
      },
    ]);

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }
  };

  return (
    <div className='p-6 h-full border rounded-md border-x-2 border-y-2 bg-[#fff] w-full'>
      <form method='POST' onSubmit={onSubmit}>
        <div className='flex flex-col'>
          <div className='text-left pb-2 lg:pb-4'>
            <label
              htmlFor='name'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Name
            </label>
            <div className='mt-2'>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type='text'
                name='name'
                id='name'
                required
                placeholder='Chloe Smith'
                className='px-3.5 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='text-left pb-2 lg:pb-4'>
            <label
              htmlFor='company'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Company
            </label>
            <div className='mt-2'>
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                type='text'
                name='company'
                id='company'
                placeholder='New, co'
                className='px-3.5 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='text-left pb-2 lg:pb-4'>
            <label
              htmlFor='email'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Email
            </label>
            <div className='mt-2'>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
                id='email'
                required
                placeholder='chloe@new.co'
                className='px-3.5 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'
              />
            </div>
          </div>

          <div className='text-left pb-2 lg:pb-4'>
            <label
              htmlFor='budget'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Budget
            </label>
            <div className='mt-2'>
              <div className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'>
                <select
                  value={budget}
                  // value='$1,000 - $5,000'
                  onChange={(e) => setBudget(e.target.value)}
                  id='budget'
                  name='budget'
                  required
                  className='w-full'
                  // defaultValue='$1,000 - $5,000'
                >
                  <option value='' disabled selected hidden>
                    Choose a Budget
                  </option>
                  <option value='$1,000 - $5,000'>$1,000 - $5,000</option>
                  <option value='$5,000 - $10,000'>$5,000 - $10,000</option>
                  <option value='$10,000 +'>$10,000 +</option>
                </select>
              </div>
            </div>
          </div>

          <div className='text-left pb-2 lg:pb-4'>
            <label
              htmlFor='date'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Target Launch
            </label>
            <div className='mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'>
              <input
                value={launch}
                onChange={(e) => setLaunch(e.target.value)}
                type='date'
                name='date'
                id='date'
                className='block w-full'
                placeholder={currentDate}
              />
            </div>
          </div>

          <div className='text-left pb-4 lg:pb-4'>
            <label
              htmlFor='message'
              className='block text-xs lg:text-sm font-medium leading-6 text-gray-900'
            >
              Message
            </label>
            <div className='bg-white grid grid-cols-1 lg:max-w-none mt-2'>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name='message'
                id='message'
                placeholder='Please describe your project in a few sentences'
                rows={4}
                className='px-3.5 py-2 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-xs lg:text-sm sm:leading-6'
              />
            </div>
          </div>

          <button
            className='font-semibold text-base bg-[#000] py-2 px-6 text-[#fff] rounded primary_button hover:duration-300'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
