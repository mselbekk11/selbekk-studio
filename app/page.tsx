import { Book } from '@/components/Book';
import { Hero } from '@/components/Hero';
import { HowThisWorks } from '@/components/HowThisWorks';
import { InfiniteMovingCardsDemo } from '@/components/Infinite-moving-cards-demo';
// import { Pricing } from '@/components/Pricing';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Faq } from '@/components/faq';
import { TestimonialMovingCardsDemo } from '@/components/testimonial-moving-cards-demo';

export default function Home() {
  return (
    <>
      <main className='min-h-screen'>
        <Hero />
        <InfiniteMovingCardsDemo />
        <Services />
        <Projects />
        <HowThisWorks />
        {/* <Pricing /> */}
        <Testimonials />
        <TestimonialMovingCardsDemo />
        <Faq />
        <Book />
      </main>
    </>
  );
}
