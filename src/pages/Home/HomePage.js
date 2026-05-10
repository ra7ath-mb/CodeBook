import React from 'react';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Testimonials  from './components/Testimonial';
import Faq from './components/Faq';
import useTitle from '../../hooks/useTitle';

const HomePage = () => {
  useTitle('Home');
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}

export default HomePage;