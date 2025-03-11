
import React from 'react';
import { DollarSign, CreditCard, ArrowRight, Coins, PlusCircle, MinusCircle } from 'lucide-react';

const SolAmountInterface: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <DollarSign className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-base font-bold">Set SOL Amount</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-black/20 border border-white/10 rounded-md p-4">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <button className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                  <MinusCircle className="h-4 w-4 text-white/70" />
                </button>
                <div className="mx-4">
                  <div className="text-2xl font-bold">1.5</div>
                  <div className="text-xs text-white/50">SOL per transaction</div>
                </div>
                <button className="h-6 w-6 rounded-full bg-white/10 flex items-center justify-center">
                  <PlusCircle className="h-4 w-4 text-white/70" />
                </button>
              </div>
              <div className="text-xs text-white/50">≈ $120.75 USD</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <button className="bg-black/30 hover:bg-black/40 rounded-md py-2 text-xs text-white/70">
              0.5 SOL
            </button>
            <button className="bg-accent/20 text-white text-xs py-2 rounded-md">
              1.5 SOL
            </button>
            <button className="bg-black/30 hover:bg-black/40 rounded-md py-2 text-xs text-white/70">
              3.0 SOL
            </button>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2 flex items-center">
              <Coins className="h-3 w-3 mr-1" />
              Daily Trading Limit
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="10"
                className="w-full bg-black/30 border border-white/10 rounded-md py-1.5 px-2 text-xs text-white"
              />
              <span className="ml-2 text-xs text-white/70">SOL</span>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-2">
              Token Distribution Strategy
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded-full flex items-center justify-center bg-accent/10 mr-2">
                  <div className="h-2 w-2 rounded-full bg-accent"></div>
                </div>
                <span className="text-xs text-white/70">One token per transaction</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 border border-white/30 rounded-full mr-2">
                </div>
                <span className="text-xs text-white/70">Distribute across multiple tokens</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-xs font-medium flex items-center justify-center">
            <span>Continue</span>
            <ArrowRight className="h-3 w-3 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolAmountInterface;
