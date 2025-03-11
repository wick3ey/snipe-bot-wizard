
import React, { useState } from 'react';
import { 
  Download, Monitor, User, Key, LogIn, Twitter, MessageCircle, 
  Settings, DollarSign, Percent, ArrowRight, CheckCircle, Terminal,
  RefreshCw, Shield, CircleAlert, Clock, ArrowDownCircle, Laptop
} from 'lucide-react';
import { useScrollAnimation } from '../lib/animations';

type Step = {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  details: string[];
};

const HowToUseContent: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedOS, setSelectedOS] = useState<'windows' | 'linux'>('windows');
  
  const steps: Step[] = [
    {
      id: 1,
      title: "Download POWER",
      description: "Get the latest version for your operating system",
      icon: <Download className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=350&fit=crop",
      details: [
        "Download the latest version of POWER",
        "Windows version: PowerSetup-2.0.3.exe (24MB)",
        "Linux version: power-2.0.3.AppImage (28MB)",
        "macOS version coming soon"
      ]
    },
    {
      id: 2,
      title: "Create Account",
      description: "Set up your POWER account to get started",
      icon: <User className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=350&fit=crop",
      details: [
        "Open the POWER application after installation",
        "Click on 'Create New Account'",
        "Enter your email address and create a strong password",
        "Verify your email address through the confirmation link"
      ]
    },
    {
      id: 3,
      title: "Setup API Keys",
      description: "Configure your wallet and API access",
      icon: <Key className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=350&fit=crop",
      details: [
        "Navigate to the 'Settings' section",
        "Connect your Solana wallet address",
        "Add your Solana RPC endpoint for faster transactions",
        "Your keys are stored locally and never leave your computer"
      ]
    },
    {
      id: 4,
      title: "Login to POWER",
      description: "Access your dashboard and trading interface",
      icon: <LogIn className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=350&fit=crop",
      details: [
        "Enter your email and password",
        "Enable 2FA for additional security (recommended)",
        "Access your personal dashboard",
        "Configure your initial preferences"
      ]
    },
    {
      id: 5,
      title: "Connect Social Platforms",
      description: "Link Twitter or Telegram for monitoring",
      icon: <Twitter className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop",
      details: [
        "Go to 'Connections' tab",
        "Choose Twitter or Telegram as your source",
        "For Twitter: Enter accounts to monitor for token mentions",
        "For Telegram: Add groups/channels to track for new tokens"
      ]
    },
    {
      id: 6,
      title: "Custom Parameters",
      description: "Tailor the sniper bot to your strategy",
      icon: <Settings className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=350&fit=crop",
      details: [
        "Set custom token filters (marketcap, liquidity, etc.)",
        "Configure keyword triggers for automatic sniping",
        "Set maximum gas fees for transactions",
        "Customize monitoring frequency and notification settings"
      ]
    },
    {
      id: 7,
      title: "SOL Amount",
      description: "Specify your investment per transaction",
      icon: <DollarSign className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=350&fit=crop",
      details: [
        "Navigate to 'Trading Settings'",
        "Set default SOL amount for each transaction",
        "Configure maximum daily trading limit",
        "Set up automated SOL distribution across multiple tokens"
      ]
    },
    {
      id: 8,
      title: "Slippage Settings",
      description: "Optimize execution with slippage control",
      icon: <Percent className="h-8 w-8 text-accent" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=350&fit=crop",
      details: [
        "Configure slippage tolerance percentage",
        "Set up dynamic slippage based on liquidity",
        "Configure maximum acceptable slippage",
        "Enable/disable auto-adjusting slippage feature"
      ]
    },
  ];

  // Interface preview component for each step
  const InterfacePreview = ({ step }: { step: Step }) => {
    return (
      <div className="relative rounded-lg overflow-hidden border-2 border-white/10 shadow-lg transition-all hover:scale-105 duration-300 group">
        {/* Main image */}
        <div className="relative overflow-hidden">
          <img 
            src={step.image} 
            alt={`${step.title} interface preview`}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Step indicator */}
          <div className="absolute top-3 right-3 bg-accent text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {step.id}
          </div>
        </div>
        
        {/* Interface caption */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur-sm">
          <p className="text-xs sm:text-sm font-medium text-white">{step.title} Interface</p>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-24 pb-16">
      <div className="section-container">
        <div 
          ref={ref}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">How to Use</span> POWER
          </h1>
          <p className="text-white/70 text-lg mb-8">
            Follow this comprehensive guide to set up and maximize your token sniping
            strategy with our advanced Solana chain tools.
          </p>
          
          {/* OS Selector */}
          <div className="flex flex-wrap justify-center items-center mb-10 gap-4">
            <button
              onClick={() => setSelectedOS('windows')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                selectedOS === 'windows' 
                  ? 'bg-accent/20 border border-accent text-white' 
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <Monitor size={20} />
              <span>Windows</span>
            </button>
            
            <button
              onClick={() => setSelectedOS('linux')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all ${
                selectedOS === 'linux' 
                  ? 'bg-primary/20 border border-primary text-white' 
                  : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10'
              }`}
            >
              <Terminal size={20} />
              <span>Linux</span>
            </button>
            
            <button
              disabled
              className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all bg-white/5 border border-white/10 text-white/50 cursor-not-allowed"
            >
              <Laptop size={20} />
              <span>macOS (Coming Soon)</span>
            </button>
          </div>
        </div>
        
        {/* Steps Journey */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="mb-20 relative">
              {/* Connection line between steps */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 bottom-0 w-1 bg-gradient-to-b from-accent/50 to-primary/50 -z-10"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left side - Step number + icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center shadow-neon relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="absolute -top-3 -left-3 bg-gradient-to-br from-accent to-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.id}
                    </div>
                    {step.icon}
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="flex-1 glass-card p-6 md:p-8 animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.1}s` }}>
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:flex-1">
                      <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/70 mb-6">{step.description}</p>
                      
                      <ul className="space-y-3 mb-8">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Special content for each step */}
                      {step.id === 1 && (
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="flex items-center mb-3">
                            <ArrowDownCircle className="h-5 w-5 text-green-500 mr-2" />
                            <span className="font-medium">Download links:</span>
                          </div>
                          <div className="space-y-2">
                            {selectedOS === 'windows' ? (
                              <a href="#download" className="block bg-accent/10 hover:bg-accent/20 p-3 rounded-lg transition-all flex items-center justify-between">
                                <span className="flex items-center">
                                  <Monitor className="h-5 w-5 mr-2" />
                                  PowerSetup-2.0.3.exe
                                </span>
                                <Download className="h-5 w-5" />
                              </a>
                            ) : (
                              <a href="#download" className="block bg-primary/10 hover:bg-primary/20 p-3 rounded-lg transition-all flex items-center justify-between">
                                <span className="flex items-center">
                                  <Terminal className="h-5 w-5 mr-2" />
                                  power-2.0.3.AppImage
                                </span>
                                <Download className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                      
                      {step.id === 3 && (
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-3">
                            <Shield className="h-5 w-5 text-green-500" />
                            <span className="font-medium">Security note:</span>
                          </div>
                          <p className="text-sm text-white/70">
                            Your API keys and wallet information are stored locally on your device and are never transmitted to our servers, ensuring maximum security and privacy for your trading activities.
                          </p>
                        </div>
                      )}
                      
                      {step.id === 5 && (
                        <div className="flex space-x-3 mb-3">
                          <button className="bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 px-4 py-2 rounded-lg flex items-center transition-colors">
                            <Twitter className="h-5 w-5 mr-2" />
                            <span>Twitter</span>
                          </button>
                          <button className="bg-[#0088cc]/20 hover:bg-[#0088cc]/30 px-4 py-2 rounded-lg flex items-center transition-colors">
                            <MessageCircle className="h-5 w-5 mr-2" />
                            <span>Telegram</span>
                          </button>
                        </div>
                      )}
                      
                      {step.id === 6 && (
                        <div className="glass p-4 rounded-lg animate-pulse-soft">
                          <div className="flex items-center mb-2">
                            <CircleAlert className="h-5 w-5 text-accent mr-2" />
                            <span className="font-medium">Pro Tip:</span>
                          </div>
                          <p className="text-sm text-white/70">
                            Optimize your settings based on market conditions. During volatile periods, consider adjusting your parameters for safer trading with higher slippage tolerance and smaller transaction amounts.
                          </p>
                        </div>
                      )}
                      
                      {step.id === 8 && (
                        <div className="bg-white/5 p-4 rounded-lg">
                          <div className="flex items-center space-x-2 mb-3">
                            <Clock className="h-5 w-5 text-yellow-500" />
                            <span className="font-medium">Time-sensitive:</span>
                          </div>
                          <p className="text-sm text-white/70">
                            For newly launched tokens with high volatility, we recommend setting slippage between 1.5% - 3.0% to ensure your transactions are executed quickly without excessive price impact.
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="md:w-[250px] flex-shrink-0">
                      {/* Interface Preview */}
                      <InterfacePreview step={step} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final CTA */}
          <div className="text-center glass-card p-8 mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Sniping?</h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Now that you've learned how to set up and use POWER, it's time to download the application and start capturing trading opportunities on the Solana chain.
            </p>
            <a href="#download" className="primary-button px-8 py-4 inline-flex">
              <span className="primary-button-content">
                <Download className="h-5 w-5 mr-2" />
                Download POWER Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseContent;
