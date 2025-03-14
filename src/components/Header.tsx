
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 px-4 transition-all duration-300 ${
        isScrolled ? 'py-4 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">PW</span>
          </div>
          <span className="text-white font-bold text-xl">POWER</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/how-to-use" className="text-white/80 hover:text-white transition-colors">How to Use</Link>
          <a href="/#features" className="text-white/80 hover:text-white transition-colors">Features</a>
          <a href="/#configure" className="text-white/80 hover:text-white transition-colors">Config</a>
          <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-colors">Terms</Link>
          <a href="/#download" className="primary-button">
            <span className="primary-button-content">Download</span>
          </a>
        </nav>
        
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 p-4 border-t border-white/10 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/how-to-use" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How to Use
            </Link>
            <a 
              href="/#features" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="/#configure" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Config
            </a>
            <Link 
              to="/privacy-policy" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-service" 
              className="text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Terms of Service
            </Link>
            <a 
              href="/#download" 
              className="primary-button w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="primary-button-content">Download</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
