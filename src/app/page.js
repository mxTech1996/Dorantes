'use client';

import AboutPsychology from '@/components/organisms/About';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import ProductsSection from '@/components/organisms/Products';
import TestimonialsSection from '@/components/organisms/Testimonials';
import ValuesSection from '@/components/organisms/Values';
import WhyChooseUs from '@/components/organisms/whyChoose';
import { dataSite } from '@/data';
import { FeaturesV2 } from 'ecommerce-mxtech';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutPsychology />
      <ValuesSection />
      <ProductsSection />
      <div id='services'>
        <FeaturesV2
          styleImage={{
            height: 300,
          }}
          onClickButton={() => {
            router.push('/more-information');
          }}
          version='v2'
          features={dataSite.services.map((item) => ({
            ...item,
            src: item.image,
          }))}
        />
      </div>
      <WhyChooseUs />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
