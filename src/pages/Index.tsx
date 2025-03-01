
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Simulator from '../components/Simulator';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Simulator />
        <Download />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
