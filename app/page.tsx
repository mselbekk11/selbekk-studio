import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { HowThisWorks } from '@/components/HowThisWorks';
import { InfiniteMovingCardsDemo } from '@/components/Infinite-moving-cards-demo';
import { Pricing } from '@/components/Pricing';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main className='min-h-screen'>
        <Hero />
        <InfiniteMovingCardsDemo />
        <Services />
        <Projects />
        <HowThisWorks />
        <Pricing />
      </main>
    </>
  );
}
