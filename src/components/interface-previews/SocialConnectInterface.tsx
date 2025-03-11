
import React, { useState } from 'react';
import { Twitter, MessageCircle, CheckCircle, Link, PlusCircle, Users } from 'lucide-react';

const SocialConnectInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'twitter' | 'telegram'>('twitter');

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold">Connect Platforms</h3>
          <div className="flex space-x-1 text-xs">
            <button 
              onClick={() => setActiveTab('twitter')}
              className={`px-3 py-1.5 rounded-l-md flex items-center ${
                activeTab === 'twitter' 
                  ? 'bg-[#1DA1F2]/20 text-[#1DA1F2]' 
                  : 'bg-black/20 text-white/60 hover:bg-white/10'
              }`}
            >
              <Twitter className="h-3.5 w-3.5 mr-1.5" />
              Twitter
            </button>
            <button 
              onClick={() => setActiveTab('telegram')}
              className={`px-3 py-1.5 rounded-r-md flex items-center ${
                activeTab === 'telegram' 
                  ? 'bg-[#0088cc]/20 text-[#0088cc]' 
                  : 'bg-black/20 text-white/60 hover:bg-white/10'
              }`}
            >
              <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
              Telegram
            </button>
          </div>
        </div>
        
        {activeTab === 'twitter' ? (
          <div className="space-y-3">
            <div className="bg-black/20 border border-white/10 rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-medium text-white/70">
                  Twitter Accounts to Monitor
                </label>
                <button className="text-xs text-accent flex items-center">
                  <PlusCircle className="h-3 w-3 mr-1" />
                  Add
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-black/20 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center mr-2">
                      <Twitter className="h-3 w-3 text-[#1DA1F2]" />
                    </div>
                    <span className="text-xs">@SolanaNews</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-black/20 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center mr-2">
                      <Twitter className="h-3 w-3 text-[#1DA1F2]" />
                    </div>
                    <span className="text-xs">@SolanaWhales</span>
                  </div>
                  <div className="flex space-x-1">
                    <div className="p-1 rounded-full bg-green-500/10">
                      <CheckCircle className="h-3 w-3 text-green-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-md p-3">
              <label className="block text-xs font-medium text-white/70 mb-2">
                Keyword Triggers
              </label>
              <div className="flex flex-wrap gap-2">
                <div className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full flex items-center">
                  launch
                  <button className="ml-1 text-accent/70 hover:text-accent">×</button>
                </div>
                <div className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full flex items-center">
                  presale
                  <button className="ml-1 text-accent/70 hover:text-accent">×</button>
                </div>
                <div className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full flex items-center">
                  new token
                  <button className="ml-1 text-accent/70 hover:text-accent">×</button>
                </div>
                <div className="border border-dashed border-white/30 text-white/50 text-xs px-2 py-1 rounded-full flex items-center">
                  <PlusCircle className="h-3 w-3 mr-1" />
                  Add keyword
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="bg-black/20 border border-white/10 rounded-md p-3">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-medium text-white/70">
                  Telegram Groups
                </label>
                <button className="text-xs text-[#0088cc] flex items-center">
                  <Link className="h-3 w-3 mr-1" />
                  Connect
                </button>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between bg-black/20 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-[#0088cc]/20 flex items-center justify-center mr-2">
                      <MessageCircle className="h-3 w-3 text-[#0088cc]" />
                    </div>
                    <span className="text-xs">Solana Gems</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-white/50">
                    <Users className="h-3 w-3" />
                    <span>24.3K</span>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-black/20 p-2 rounded-md">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-[#0088cc]/20 flex items-center justify-center mr-2">
                      <MessageCircle className="h-3 w-3 text-[#0088cc]" />
                    </div>
                    <span className="text-xs">Solana Alpha Calls</span>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-white/50">
                    <Users className="h-3 w-3" />
                    <span>18.7K</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/20 border border-white/10 rounded-md p-3">
              <label className="block text-xs font-medium text-white/70 mb-2">
                Message Filters
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-white/30 rounded flex items-center justify-center bg-accent/10 mr-2">
                    <CheckCircle className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-xs text-white/70">Only monitor pinned messages</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 border border-white/30 rounded flex items-center justify-center mr-2">
                  </div>
                  <span className="text-xs text-white/70">Ignore messages without links</span>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-xs font-medium">
            Save Connection Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialConnectInterface;
