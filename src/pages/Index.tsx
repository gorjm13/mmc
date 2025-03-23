
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import ServersSection from '../components/ServersSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-minecraft-darker text-white">
      <Header />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ServersSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
