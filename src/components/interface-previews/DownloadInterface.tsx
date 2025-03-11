
import React, { useState } from 'react';
import { Download, Info, Monitor, Terminal, ArrowRight, Laptop, CheckCircle } from 'lucide-react';

const DownloadInterface: React.FC = () => {
  const [selectedOS, setSelectedOS] = useState<'windows' | 'linux' | 'mac'>('windows');

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center mr-3">
              <Download className="h-4 w-4 text-accent" />
            </div>
            <h3 className="text-base font-bold">Download POWER</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <button
              onClick={() => setSelectedOS('windows')}
              className={`flex items-center justify-between p-3 rounded-md border ${
                selectedOS === 'windows' 
                  ? 'bg-accent/10 border-accent/50' 
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
            >
              <div className="flex items-center">
                <Monitor className="h-5 w-5 mr-3 text-white/70" />
                <div className="text-left">
                  <div className="text-sm font-medium">Windows</div>
                  <div className="text-xs text-white/50">PowerSetup-2.0.3.exe (24MB)</div>
                </div>
              </div>
              {selectedOS === 'windows' && (
                <CheckCircle className="h-4 w-4 text-accent" />
              )}
            </button>
            
            <button
              onClick={() => setSelectedOS('linux')}
              className={`flex items-center justify-between p-3 rounded-md border ${
                selectedOS === 'linux' 
                  ? 'bg-primary/10 border-primary/50' 
                  : 'bg-black/20 border-white/10 hover:bg-black/30'
              }`}
            >
              <div className="flex items-center">
                <Terminal className="h-5 w-5 mr-3 text-white/70" />
                <div className="text-left">
                  <div className="text-sm font-medium">Linux</div>
                  <div className="text-xs text-white/50">power-2.0.3.AppImage (28MB)</div>
                </div>
              </div>
              {selectedOS === 'linux' && (
                <CheckCircle className="h-4 w-4 text-primary" />
              )}
            </button>
            
            <button
              disabled
              className="flex items-center justify-between p-3 rounded-md border bg-black/20 border-white/10 opacity-60 cursor-not-allowed"
            >
              <div className="flex items-center">
                <Laptop className="h-5 w-5 mr-3 text-white/70" />
                <div className="text-left">
                  <div className="text-sm font-medium">macOS</div>
                  <div className="text-xs text-white/50">Coming Soon</div>
                </div>
              </div>
            </button>
          </div>
          
          <div className="bg-accent/10 border border-accent/30 rounded-md p-3 flex">
            <Info className="h-4 w-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
            <p className="text-xs">
              {selectedOS === 'windows' ? (
                "Run the installer as administrator. Anti-virus might flag as unknown - this is a false positive due to the application's access to trading functions."
              ) : (
                "Make sure to give execution permission with 'chmod +x power-2.0.3.AppImage' before running the application."
              )}
            </p>
          </div>
          
          <div className="bg-black/20 border border-white/10 rounded-md p-3">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-medium">System Requirements</h4>
            </div>
            <ul className="space-y-1">
              <li className="flex items-start">
                <div className="h-4 w-4 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="h-1 w-1 rounded-full bg-white/70"></div>
                </div>
                <span className="text-xs text-white/70">{selectedOS === 'windows' ? 'Windows 10/11 64-bit' : 'Ubuntu 20.04 or newer'}</span>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="h-1 w-1 rounded-full bg-white/70"></div>
                </div>
                <span className="text-xs text-white/70">4GB RAM minimum (8GB recommended)</span>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="h-1 w-1 rounded-full bg-white/70"></div>
                </div>
                <span className="text-xs text-white/70">100MB free disk space</span>
              </li>
              <li className="flex items-start">
                <div className="h-4 w-4 rounded-full bg-white/10 flex items-center justify-center mr-2 mt-0.5">
                  <div className="h-1 w-1 rounded-full bg-white/70"></div>
                </div>
                <span className="text-xs text-white/70">Reliable internet connection</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-xs font-medium flex items-center justify-center">
            <Download className="h-3 w-3 mr-2" />
            <span>Download Now</span>
            <ArrowRight className="h-3 w-3 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadInterface;
