
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Simulator from '../components/Simulator';
import Download from '../components/Download';
import Footer from '../components/Footer';
import LoginPreview from '../components/LoginPreview';
import PlatformSelect from '../components/PlatformSelect';

const Index: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Features />
      <LoginPreview />
      <PlatformSelect />
      <Simulator />
      <Download />
      <Footer />
    </div>
  );
};

export default Index;
