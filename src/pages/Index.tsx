import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Officers } from '@/components/Officers';
import { Activities } from '@/components/Activities';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Officers />
      <Activities />
      <Footer />
    </div>
  );
};

export default Index;
