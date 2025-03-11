
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HowToUseContent from '../components/HowToUseContent';

const HowToUse: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <HowToUseContent />
      <Footer />
    </div>
  );
};

export default HowToUse;
