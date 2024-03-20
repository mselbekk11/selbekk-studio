import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { InfiniteMovingCardsDemo } from '@/components/Infinite-moving-cards-demo';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Hero />
        <InfiniteMovingCardsDemo />
        <Services />
      </main>
    </>
  );
}
