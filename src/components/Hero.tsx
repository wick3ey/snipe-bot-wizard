
import React from 'react';
import { ArrowRight, Twitter, MessageCircle } from 'lucide-react';
import { useScrollAnimation, useTypewriterEffect } from '../lib/animations';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { displayText } = useTypewriterEffect("Instantly snipe tokens on Twitter and Telegram", 50);
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-soft"></div>
      </div>
      
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-[calc(20%+5vw)] left-[calc(10%+5vw)] w-16 h-16 bg-accent/10 backdrop-blur-xl rounded-xl border border-accent/20 animate-float"></div>
          <div className="absolute top-[calc(50%-10vw)] right-[calc(15%+10vw)] w-20 h-20 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[calc(20%+5vw)] left-[calc(20%+15vw)] w-24 h-24 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            ref={ref} 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full glass mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span>Windows Sniper Bot • Version 2.0</span>
            </span>
            
            <h1 className="heading-xl mb-4">
              <span className="block">Lightning-Fast</span> 
              <span className="text-gradient">Token Sniper Bot</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 min-h-[3.5rem]">
              {displayText}<span className="animate-pulse">|</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a href="#download" className="primary-button">
                <span className="primary-button-content">
                  Download Now <ArrowRight size={18} />
                </span>
              </a>
              <a href="#how-it-works" className="secondary-button">
                <span className="flex items-center justify-center space-x-2">
                  Learn More
                </span>
              </a>
            </div>
            
            <div className="glass-card p-4 inline-flex items-center space-x-5 mb-10">
              <div className="flex items-center">
                <Twitter size={20} className="text-accent mr-2" />
                <span>Twitter</span>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="flex items-center">
                <MessageCircle size={20} className="text-accent mr-2" />
                <span>Telegram</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative w-full max-w-3xl h-64 sm:h-80 md:h-96 glass-card overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-black/40 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center animate-pulse-soft">
                    <div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center">
                      <span className="text-white text-xs font-mono">BOT</span>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium">Bot Interface Preview</p>
                <p className="text-sm text-white/60">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
