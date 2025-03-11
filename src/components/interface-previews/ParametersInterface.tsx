
import React from 'react';
import { Settings, TrendingUp, Search, Clock, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const ParametersInterface: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Settings className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-base font-bold">Sniper Parameters</h3>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Token Filter Strategy
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-accent/20 text-white text-xs py-1.5 rounded-md flex items-center justify-center">
                <CheckCircle className="h-3 w-3 mr-1 text-accent" />
                Auto
              </button>
              <button className="bg-black/30 text-white/70 text-xs py-1.5 rounded-md flex items-center justify-center hover:bg-black/40">
                Aggressive
              </button>
              <button className="bg-black/30 text-white/70 text-xs py-1.5 rounded-md flex items-center justify-center hover:bg-black/40">
                Conservative
              </button>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2 flex items-center">
              <TrendingUp className="h-3 w-3 mr-1" />
              Minimum Market Cap
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="5,000"
                className="w-full bg-black/30 border border-white/10 rounded-md py-1.5 px-2 text-xs text-white"
              />
              <span className="ml-2 text-xs text-white/70">SOL</span>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2 flex items-center">
              <Search className="h-3 w-3 mr-1" />
              Minimum Liquidity
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="10,000"
                className="w-full bg-black/30 border border-white/10 rounded-md py-1.5 px-2 text-xs text-white"
              />
              <span className="ml-2 text-xs text-white/70">SOL</span>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2 flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              Wait Time After Launch
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="5"
                className="w-full bg-black/30 border border-white/10 rounded-md py-1.5 px-2 text-xs text-white"
              />
              <span className="ml-2 text-xs text-white/70">seconds</span>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Safety Checks
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded flex items-center justify-center bg-accent/10 mr-2">
                  <CheckCircle className="h-3 w-3 text-accent" />
                </div>
                <span className="text-xs text-white/70">Honeypot Detection</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded flex items-center justify-center bg-accent/10 mr-2">
                  <CheckCircle className="h-3 w-3 text-accent" />
                </div>
                <span className="text-xs text-white/70">Liquidity Lock Check</span>
              </div>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Auto-Sell Conditions
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded flex items-center justify-center bg-accent/10 mr-2">
                  <CheckCircle className="h-3 w-3 text-accent" />
                </div>
                <span className="text-xs text-white/70">Rugpull Detection</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded mr-2">
                </div>
                <span className="text-xs text-white/70">Dev wallet sells {'>'} 5%</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-xs font-medium">
            Save Parameters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ParametersInterface;
