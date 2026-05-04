import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import ServicesSection from '@/app/components/ServicesSection';
import AboutSection from '@/app/components/AboutSection';
import ProcessSection from '@/app/components/ProcessSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ScrollPopup from '@/app/components/ScrollPopup';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <ScrollPopup />
    </>
  );
}