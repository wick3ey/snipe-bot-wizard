
import React from 'react';
import { Twitter, MessageCircle, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SB</span>
              </div>
              <span className="text-white font-bold text-xl">SniperBot</span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Advanced token sniper bot for Windows that monitors Twitter and Telegram for trading opportunities with lightning-fast execution.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/70 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#configure" className="text-white/70 hover:text-white transition-colors">Configure</a>
              </li>
              <li>
                <a href="#download" className="text-white/70 hover:text-white transition-colors">Download</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} SniperBot. All rights reserved.
          </p>
          <p className="text-white/50 text-sm">
            Trading cryptocurrencies involves risk. Use at your own discretion.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
