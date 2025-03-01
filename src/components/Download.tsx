
import React, { useState } from 'react';
import { Download, CheckCircle, Cpu, Shield, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../lib/animations';

const Download: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      setIsDownloaded(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsDownloaded(false);
      }, 3000);
    }, 2000);
  };
  
  return (
    <section id="download" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/30"></div>
      
      <div className="section-container">
        <div 
          ref={ref}
          className={`max-w-4xl mx-auto text-center glass-card p-12 border border-white/10 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="heading-lg mb-4">
            Ready to <span className="text-gradient">Supercharge</span> Your Trading?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Download our Windows Sniper Bot now and gain the competitive edge in token trading with lightning-fast execution and professional tools.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass p-6 rounded-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Cpu size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">High Performance</h3>
              <p className="text-white/70 text-sm">Optimized for Windows systems with minimal resource usage</p>
            </div>
            
            <div className="glass p-6 rounded-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Secure & Private</h3>
              <p className="text-white/70 text-sm">Your API keys and wallet data never leave your computer</p>
            </div>
            
            <div className="glass p-6 rounded-lg">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Advanced Analytics</h3>
              <p className="text-white/70 text-sm">In-depth trading reports and performance metrics</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {!isDownloading && !isDownloaded && (
                <>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-soft"></div>
                  <button
                    className="relative primary-button px-8 py-4"
                    onClick={handleDownload}
                  >
                    <span className="primary-button-content">
                      <Download size={20} className="mr-2" />
                      Download for Windows
                    </span>
                  </button>
                </>
              )}
              
              {isDownloading && (
                <button className="relative primary-button px-8 py-4 opacity-80" disabled>
                  <span className="primary-button-content">
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin mr-2"></div>
                    Downloading...
                  </span>
                </button>
              )}
              
              {isDownloaded && (
                <button className="relative bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg transition-colors">
                  <span className="flex items-center justify-center">
                    <CheckCircle size={20} className="mr-2" />
                    Download Started
                  </span>
                </button>
              )}
            </div>
          </div>
          
          <p className="mt-6 text-white/50 text-sm">Version 2.0.3 for Windows 10/11 • 24MB</p>
        </div>
      </div>
    </section>
  );
};

export default Download;
