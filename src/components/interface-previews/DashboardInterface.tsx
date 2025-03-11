
import React from 'react';
import { ArrowUp, ArrowDown, CreditCard, TrendingUp, Home, Settings, Bell, Search, Clock, Wallet } from 'lucide-react';

const DashboardInterface: React.FC = () => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 bg-black/60 border-r border-white/10 p-2 flex flex-col items-center space-y-4">
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-accent to-primary"></div>
          <div className="h-px w-8 bg-white/10"></div>
          <div className="p-1.5 bg-accent/20 rounded-md">
            <Home className="h-4 w-4 text-accent" />
          </div>
          <div className="p-1.5 hover:bg-white/10 rounded-md">
            <Wallet className="h-4 w-4 text-white/70" />
          </div>
          <div className="p-1.5 hover:bg-white/10 rounded-md">
            <TrendingUp className="h-4 w-4 text-white/70" />
          </div>
          <div className="p-1.5 hover:bg-white/10 rounded-md">
            <Settings className="h-4 w-4 text-white/70" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xs font-bold">Dashboard</h3>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Bell className="h-4 w-4 text-white/70" />
                <div className="h-1.5 w-1.5 rounded-full bg-accent absolute -top-0.5 -right-0.5"></div>
              </div>
              <div className="h-6 w-6 rounded-full bg-white/10"></div>
            </div>
          </div>

          {/* Balance card */}
          <div className="bg-gradient-to-r from-accent/20 to-primary/20 rounded-md p-3 mb-3">
            <div className="flex justify-between">
              <div>
                <span className="text-xs text-white/70">Total Balance</span>
                <div className="text-lg font-bold">47.82 SOL</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center text-green-400 text-xs mb-1">
                  <ArrowUp className="h-3 w-3 mr-1" />
                  <span>+2.4%</span>
                </div>
                <span className="text-white/50 text-xs">≈ $3,846.25</span>
              </div>
            </div>
          </div>

          {/* Recent transactions */}
          <div className="mb-2">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-medium text-white/80">Recent Snipes</h4>
              <span className="text-accent text-xs">View All</span>
            </div>
            
            <div className="space-y-2">
              <div className="bg-black/20 rounded-md p-2 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mr-2">
                    <ArrowUp className="h-3 w-3 text-green-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">BONK Token</div>
                    <div className="text-[10px] text-white/50 flex items-center">
                      <Clock className="h-2.5 w-2.5 mr-1" />
                      <span>10 mins ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium">+1.23 SOL</div>
                  <div className="text-[10px] text-green-400">+31.2%</div>
                </div>
              </div>
              
              <div className="bg-black/20 rounded-md p-2 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-6 w-6 rounded-full bg-red-500/20 flex items-center justify-center mr-2">
                    <ArrowDown className="h-3 w-3 text-red-500" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">MEME Token</div>
                    <div className="text-[10px] text-white/50 flex items-center">
                      <Clock className="h-2.5 w-2.5 mr-1" />
                      <span>1 hour ago</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-medium">-0.45 SOL</div>
                  <div className="text-[10px] text-red-400">-5.8%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardInterface;
