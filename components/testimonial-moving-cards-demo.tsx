'use client';

import React, { useEffect, useState } from 'react';
import { TestimonialMovingCards } from '@/components/testimonial-moving-cards';

export function TestimonialMovingCardsDemo() {
  return (
    <div className='h-[20rem] rounded-md flex flex-col antialiased bg-[#F6F6F6] items-center justify-center relative overflow-hidden border-b-2 border-[#D9D9D9]'>
      <TestimonialMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Celina Shi',
    title: 'Director of X',
    image: '/profile-shot-celina.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Chris Osborne',
    title: 'Director of X',
    image: '/profile-shot-chris.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Luba Ismakov',
    title: 'Director of X',
    image: '/luba-profile-shot-luba.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Jack Crowe',
    title: 'Director of X',
    image: '/profile-shot-jack.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Joe DCunha',
    title: 'Director of X',
    image: '/profile-shot-joe.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Alex Cochrane',
    title: 'Director of X',
    image: '/profile-shot-alex.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'Per Selbekk',
    title: 'Director of X',
    image: '/profile-shot-per.png',
  },
];
