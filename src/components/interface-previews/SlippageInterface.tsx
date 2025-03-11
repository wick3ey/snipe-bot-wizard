
import React from 'react';
import { Percent, Shield, Info, ArrowRight, ChevronDown } from 'lucide-react';

const SlippageInterface: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Percent className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-base font-bold">Slippage Settings</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-medium text-white/70 flex items-center">
                Slippage Tolerance
                <button className="ml-1 text-white/50">
                  <Info className="h-3 w-3" />
                </button>
              </label>
              <span className="bg-accent/20 text-accent text-xs px-2 py-0.5 rounded-full">2.5%</span>
            </div>
            <div className="relative mb-3">
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value="2.5"
                className="w-full h-1.5 bg-black/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-accent"
              />
              <div className="flex justify-between text-[10px] text-white/50 mt-1">
                <span>0.1%</span>
                <span>5%</span>
                <span>10%</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <button className="bg-black/30 hover:bg-black/40 rounded-md py-1.5 text-[10px] text-white/70">
                0.5%
              </button>
              <button className="bg-black/30 hover:bg-black/40 rounded-md py-1.5 text-[10px] text-white/70">
                1.0%
              </button>
              <button className="bg-accent/20 text-accent text-[10px] py-1.5 rounded-md">
                2.5%
              </button>
              <button className="bg-black/30 hover:bg-black/40 rounded-md py-1.5 text-[10px] text-white/70">
                5.0%
              </button>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Slippage Strategy
            </label>
            <div className="flex justify-between items-center bg-black/30 border border-white/10 rounded-md p-2">
              <span className="text-xs">Auto-adjust based on liquidity</span>
              <ChevronDown className="h-4 w-4 text-white/50" />
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Transaction Priority
            </label>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-accent/10 p-2 rounded-md border border-accent/30">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-white/30 rounded-full flex items-center justify-center bg-accent/20 mr-2">
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                  </div>
                  <span className="text-xs">High (faster execution)</span>
                </div>
                <span className="text-xs text-white/50">0.0001 SOL</span>
              </div>
              <div className="flex items-center justify-between bg-black/20 p-2 rounded-md">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-white/30 rounded-full mr-2">
                  </div>
                  <span className="text-xs">Standard</span>
                </div>
                <span className="text-xs text-white/50">0.00005 SOL</span>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-md p-3 flex">
            <Shield className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-xs">
              For new tokens, we recommend setting slippage between 2.5% - 5.0% due to potential volatility.
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-xs font-medium flex items-center justify-center">
            <span>Save Slippage Settings</span>
            <ArrowRight className="h-3 w-3 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlippageInterface;
