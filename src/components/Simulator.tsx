
import React, { useState } from 'react';
import { Twitter, MessageCircle, Settings, AlertCircle, PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../lib/animations';

type Platform = 'twitter' | 'telegram';
type Step = 'platform' | 'account' | 'settings' | 'confirmation';

const Simulator: React.FC = () => {
  const [platform, setPlatform] = useState<Platform>('twitter');
  const [account, setAccount] = useState('');
  const [solAmount, setSolAmount] = useState('1.0');
  const [fees, setFees] = useState('2.5');
  const [slippage, setSlippage] = useState('1.0');
  const [currentStep, setCurrentStep] = useState<Step>('platform');
  const [isRunning, setIsRunning] = useState(false);
  
  const { ref, isVisible } = useScrollAnimation();
  
  const handleNext = () => {
    switch (currentStep) {
      case 'platform':
        setCurrentStep('account');
        break;
      case 'account':
        setCurrentStep('settings');
        break;
      case 'settings':
        setCurrentStep('confirmation');
        break;
      case 'confirmation':
        setIsRunning(true);
        break;
    }
  };
  
  const handleBack = () => {
    switch (currentStep) {
      case 'account':
        setCurrentStep('platform');
        break;
      case 'settings':
        setCurrentStep('account');
        break;
      case 'confirmation':
        setCurrentStep('settings');
        break;
    }
  };
  
  const progressPercentage = 
    currentStep === 'platform' ? 25 :
    currentStep === 'account' ? 50 :
    currentStep === 'settings' ? 75 : 100;
  
  return (
    <section id="configure" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
      </div>
      
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Configure</span> Your Sniper Bot
            </h2>
            <p className="text-white/70 text-lg">
              Experience how easy it is to set up and run the SniperBot with our interactive simulator.
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8">
          <div className="mb-8">
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-2 text-sm text-white/60">
              <span className={currentStep === 'platform' ? 'text-white' : ''}>Platform</span>
              <span className={currentStep === 'account' ? 'text-white' : ''}>Account</span>
              <span className={currentStep === 'settings' ? 'text-white' : ''}>Settings</span>
              <span className={currentStep === 'confirmation' ? 'text-white' : ''}>Confirm</span>
            </div>
          </div>
          
          <div className="min-h-[400px]">
            {currentStep === 'platform' && (
              <div className="animate-fade-in">
                <h3 className="heading-md mb-6">Select Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <button 
                    className={`glass p-6 rounded-lg border ${
                      platform === 'twitter' 
                        ? 'border-accent shadow-neon' 
                        : 'border-white/10 hover:border-white/30'
                    } transition-all duration-300`}
                    onClick={() => setPlatform('twitter')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <Twitter size={24} className="text-accent" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold">Twitter</h4>
                        <p className="text-white/70">Snipe tokens from Twitter accounts</p>
                      </div>
                    </div>
                  </button>
                  
                  <button 
                    className={`glass p-6 rounded-lg border ${
                      platform === 'telegram' 
                        ? 'border-primary shadow-neon' 
                        : 'border-white/10 hover:border-white/30'
                    } transition-all duration-300`}
                    onClick={() => setPlatform('telegram')}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle size={24} className="text-primary" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-xl font-semibold">Telegram</h4>
                        <p className="text-white/70">Snipe tokens from Telegram channels</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
            
            {currentStep === 'account' && (
              <div className="animate-fade-in">
                <h3 className="heading-md mb-6">
                  {platform === 'twitter' ? 'Twitter Handle' : 'Telegram Channel'}
                </h3>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    {platform === 'twitter' ? 'Enter Twitter username (without @)' : 'Enter Telegram channel name'}
                  </label>
                  <input 
                    type="text"
                    className="glass-input w-full"
                    placeholder={platform === 'twitter' ? 'elonmusk' : 'cryptosignals'}
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                  />
                </div>
              </div>
            )}
            
            {currentStep === 'settings' && (
              <div className="animate-fade-in">
                <h3 className="heading-md mb-6">Trading Settings</h3>
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      SOL Amount
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        className="glass-input w-full"
                        value={solAmount}
                        onChange={(e) => setSolAmount(e.target.value)}
                        min="0.1"
                        step="0.1"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">SOL</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Max Fees (%)
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        className="glass-input w-full"
                        value={fees}
                        onChange={(e) => setFees(e.target.value)}
                        min="0.5"
                        max="10"
                        step="0.5"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">%</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Slippage Tolerance (%)
                    </label>
                    <div className="relative">
                      <input 
                        type="number"
                        className="glass-input w-full"
                        value={slippage}
                        onChange={(e) => setSlippage(e.target.value)}
                        min="0.1"
                        max="5"
                        step="0.1"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {currentStep === 'confirmation' && (
              <div className="animate-fade-in">
                <h3 className="heading-md mb-6">Confirm Settings</h3>
                <div className="glass p-6 rounded-lg mb-8">
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Platform</span>
                      <span className="font-medium flex items-center">
                        {platform === 'twitter' ? (
                          <>
                            <Twitter size={16} className="mr-2 text-accent" /> 
                            Twitter
                          </>
                        ) : (
                          <>
                            <MessageCircle size={16} className="mr-2 text-primary" /> 
                            Telegram
                          </>
                        )}
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Account</span>
                      <span className="font-medium">
                        {platform === 'twitter' ? '@' : ''}{account || 'Not specified'}
                      </span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">SOL Amount</span>
                      <span className="font-medium">{solAmount} SOL</span>
                    </div>
                    
                    <div className="flex justify-between py-2 border-b border-white/10">
                      <span className="text-white/70">Max Fees</span>
                      <span className="font-medium">{fees}%</span>
                    </div>
                    
                    <div className="flex justify-between py-2">
                      <span className="text-white/70">Slippage Tolerance</span>
                      <span className="font-medium">{slippage}%</span>
                    </div>
                  </div>
                </div>
                
                {!isRunning ? (
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse-soft"></div>
                      <button 
                        className="relative primary-button px-8 py-4"
                        onClick={handleNext}
                      >
                        <span className="primary-button-content">
                          <PlayCircle size={20} className="mr-2" />
                          Start Bot
                        </span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="animate-fade-in text-center">
                    <div className="w-16 h-16 mx-auto glass rounded-full flex items-center justify-center mb-4 border border-green-500/50">
                      <CheckCircle size={32} className="text-green-500" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">Bot Running Successfully</h4>
                    <p className="text-white/70 mb-6">
                      The bot is now monitoring {platform === 'twitter' ? 'Twitter' : 'Telegram'} for trading opportunities.
                    </p>
                    <p className="text-sm text-white/50">
                      This is a simulation. Download the real bot to use with your actual accounts.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="flex justify-between mt-8">
            {currentStep !== 'platform' && !isRunning ? (
              <button 
                className="flex items-center text-white/70 hover:text-white transition-colors"
                onClick={handleBack}
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {currentStep !== 'confirmation' && (
              <button 
                className="primary-button"
                onClick={handleNext}
                disabled={currentStep === 'account' && !account}
              >
                <span className="primary-button-content">
                  Continue
                  <ArrowRight size={18} />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Simulator;
