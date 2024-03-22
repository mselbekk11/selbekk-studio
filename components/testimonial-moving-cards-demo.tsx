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
      'The Selbekk Studio  team delivered our project with astonishing speed and quality, far exceeding our expectations. Since the launch, our business has seen a noticeable increase in traffic and sales.',
    name: 'Per Selbekk',
    title: 'Founder & CEO - Renevo Capital ',
    image: '/profile-shot-per.png',
  },
  {
    quote:
      'Their cost-effective solutions and rapid delivery set them apart in the web development industry. The responsiveness and attention to detail have directly contributed to our significant business growth post-launch.',
    name: 'Greg Cussell',
    title: 'Founder & CEO - Nokpay',
    image: '/greg.png',
  },
  {
    quote:
      'They exceeded every expectation with their swift and efficient website delivery, offering incredible value for money. Our business has experienced substantial growth thanks to their exceptional work.',
    name: 'Ben Putley',
    title: 'Founder & CEO - Alkimi',
    image: '/ben.png',
  },
  {
    quote:
      'The speed at which they delivered our high-quality website was simply remarkable. Their constant availability and the subsequent business growth weve seen is a testament to their outstanding service.',
    name: 'Joe D’Cunha',
    title: 'Co-Founder & Director - Nielson Place',
    image: '/profile-shot-joe.png',
  },
  {
    quote:
      'Unmatched in speed and efficiency, their team provided a top-notch website that boosted our online presence and business revenue. Their responsiveness and dedication to our needs were truly exceptional.',
    name: 'Danik Budovsky',
    title: 'Founder & Owner - Advanced Ortho Labs SF',
    image: '/danik.png',
  },
  {
    quote:
      'Opting for their web development services resulted in a fantastic website delivered quickly and cost-effectively. Weve observed a remarkable uptick in our business, all thanks to their skillful and attentive work.',
    name: 'Andrew Miller',
    title: 'Co-Founder & CEO - Kodama',
    image: '/andrew.png',
  },
];
