
import React from 'react';
import { Key, Shield, Copy, Info, CheckCircle } from 'lucide-react';

const ApiKeysInterface: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Key className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-base font-bold">API Keys Setup</h3>
          </div>
          <div className="flex items-center space-x-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
            <CheckCircle className="h-3 w-3" />
            <span>Secured</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-1">
              Solana Wallet Address
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="7XB2STUkxfKv....p91234UWtz"
                className="flex-1 bg-transparent text-white text-sm"
                readOnly
              />
              <button className="text-white/50 hover:text-white/80">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <label className="block text-xs font-medium text-white/70 mb-1">
              Solana RPC Endpoint
            </label>
            <div className="flex items-center">
              <input
                type="text"
                value="https://api.mainnet-beta.solana.com"
                className="flex-1 bg-transparent text-white text-sm"
                readOnly
              />
              <button className="text-white/50 hover:text-white/80">
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 p-2 bg-accent/10 rounded-md">
            <Shield className="h-4 w-4 text-accent mt-0.5" />
            <p className="text-xs text-white/80">
              Your keys are stored locally and encrypted. They never leave your device and are not accessible by POWER servers.
            </p>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-sm font-medium">
            <span className="flex items-center justify-center">
              Verify Keys
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeysInterface;
