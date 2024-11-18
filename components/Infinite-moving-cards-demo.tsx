'use client';

import React, { useEffect, useState } from 'react';
import { InfiniteMovingCards } from '@/components/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='h-[15rem] md:h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <InfiniteMovingCards
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
      'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.',
    name: 'one',
    title: 'A Tale of Two Cities',
    image: '/scroll1.png',
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: 'two',
    title: 'Hamlet',
    image: '/scroll9.png',
  },
  {
    quote: 'All that we see or seem is but a dream within a dream.',
    name: 'Edgar Allan Poe',
    title: 'A Dream Within a Dream',
    image: '/scroll3.png',
  },
  {
    quote:
      'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.',
    name: 'three',
    title: 'Pride and Prejudice',
    image: '/scroll4.png',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'four',
    title: 'Moby-Dick',
    image: '/scroll5.png',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'five',
    title: 'Moby-Dick',
    image: '/scroll6.png',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'six',
    title: 'Moby-Dick',
    image: '/scroll7.png',
  },
  {
    quote:
      'Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.',
    name: 'seven',
    title: 'Moby-Dick',
    image: '/scroll8.png',
  },
];
