
import React, { useState } from 'react';
import { Twitter, MessageCircle, LineChart, TrendingUp, TrendingDown, BarChart4, Percent, Save, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../lib/animations';

const PlatformSelect: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [platform, setPlatform] = useState<'twitter' | 'telegram'>('twitter');
  const [tpPercent, setTpPercent] = useState('50');
  const [slPercent, setSlPercent] = useState('15');
  const [advanced, setAdvanced] = useState(false);
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Anpassa din</span> Sniper-strategi
            </h2>
            <p className="text-white/70 text-lg">
              Välj plattform och konfigurera dina Take Profit och Stop Loss-nivåer för optimal avkastning
            </p>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Plattformsval */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="heading-sm mb-6 flex items-center">
                <BarChart4 className="h-6 w-6 mr-2 text-accent" />
                Välj plattform
              </h3>
              
              <div className="space-y-4">
                <button
                  className={`w-full p-5 rounded-lg border transition-all duration-300 flex items-center ${
                    platform === 'twitter' 
                      ? 'border-accent bg-accent/10 shadow-neon' 
                      : 'border-white/10 bg-black/20 hover:border-white/30'
                  }`}
                  onClick={() => setPlatform('twitter')}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Twitter size={24} className="text-accent" />
                  </div>
                  <div className="ml-4 text-left">
                    <h4 className="text-lg font-semibold">Twitter</h4>
                    <p className="text-white/70 text-sm">Snipa tokens från Twitter-flöden och konton</p>
                  </div>
                </button>
                
                <button
                  className={`w-full p-5 rounded-lg border transition-all duration-300 flex items-center ${
                    platform === 'telegram' 
                      ? 'border-primary bg-primary/10 shadow-neon' 
                      : 'border-white/10 bg-black/20 hover:border-white/30'
                  }`}
                  onClick={() => setPlatform('telegram')}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div className="ml-4 text-left">
                    <h4 className="text-lg font-semibold">Telegram</h4>
                    <p className="text-white/70 text-sm">Snipa tokens från populära Telegram-grupper</p>
                  </div>
                </button>
              </div>
            </div>
            
            {/* TP/SL Inställningar */}
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="heading-sm mb-6 flex items-center">
                <LineChart className="h-6 w-6 mr-2 text-accent" />
                Profit & Loss Inställningar
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="flex items-center text-white/90 font-medium">
                      <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
                      Take Profit (TP)
                    </label>
                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full">{tpPercent}%</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="10"
                      max="1000"
                      value={tpPercent}
                      onChange={(e) => setTpPercent(e.target.value)}
                      className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-500"
                    />
                    <div className="flex justify-between text-xs text-white/50 mt-1">
                      <span>10%</span>
                      <span>100%</span>
                      <span>1000%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="flex items-center text-white/90 font-medium">
                      <TrendingDown className="h-5 w-5 mr-2 text-red-500" />
                      Stop Loss (SL)
                    </label>
                    <span className="bg-red-500/20 text-red-400 text-xs px-2 py-1 rounded-full">{slPercent}%</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={slPercent}
                      onChange={(e) => setSlPercent(e.target.value)}
                      className="w-full h-2 bg-black/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-red-500"
                    />
                    <div className="flex justify-between text-xs text-white/50 mt-1">
                      <span>5%</span>
                      <span>25%</span>
                      <span>50%</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => setAdvanced(!advanced)}
                  className="flex items-center justify-between w-full text-sm text-white/70 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="flex items-center">
                    <Percent className="h-4 w-4 mr-2" />
                    Avancerade inställningar
                  </span>
                  <span>
                    {advanced ? '▲' : '▼'}
                  </span>
                </button>
                
                {advanced && (
                  <div className="animate-fade-in space-y-4 p-4 bg-white/5 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Trailing Stop (%)
                      </label>
                      <div className="relative">
                        <input 
                          type="number"
                          className="glass-input w-full"
                          placeholder="10"
                          min="1"
                          max="50"
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50">%</span>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-white/70 mb-2">
                        Minsta Volym (SOL)
                      </label>
                      <input 
                        type="number"
                        className="glass-input w-full"
                        placeholder="10000"
                        min="1000"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center">
            <button className="primary-button px-8 py-4">
              <span className="primary-button-content">
                <Save className="h-5 w-5 mr-2" />
                Spara inställningar och fortsätt
                <ArrowRight className="h-5 w-5 ml-2" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSelect;
