
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position for potential parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-cyber-background text-cyber-foreground">
      <Header />
      
      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CallToAction />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
