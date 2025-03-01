import React, { useState } from 'react';
import { ArrowRight, Twitter, MessageCircle, Bot, Send, Settings, RefreshCw, AlertCircle, DollarSign } from 'lucide-react';
import { useScrollAnimation, useTypewriterEffect } from '../lib/animations';

// Define the message type to include the isComplete property
interface BotMessage {
  type: string;
  content: string;
  isComplete?: boolean;
}

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { displayText } = useTypewriterEffect("Instantly snipe tokens on Twitter and Telegram", 50);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<BotMessage[]>([
    { type: 'bot', content: 'Welcome to Token Sniper Bot! I can help you set up automated trading for new tokens mentioned on Twitter and Telegram.' },
    { type: 'bot', content: 'What Twitter account would you like to monitor for token mentions?' }
  ]);
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    setMessages([...messages, { type: 'user', content: inputValue }]);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse: BotMessage | undefined;
      if (messages.length === 2) {
        botResponse = { type: 'bot', content: `Great! I'll monitor @${inputValue} for new token mentions. How much SOL would you like to allocate per trade?` };
      } else if (messages.length === 4) {
        botResponse = { type: 'bot', content: `Perfect. ${inputValue} SOL will be used for each trade. Would you like to set a slippage percentage? (Default is 1%)` };
      } else if (messages.length === 6) {
        botResponse = { 
          type: 'bot', 
          content: `Configuration complete! I'm now monitoring Twitter for @${messages[3].content} with ${messages[5].content}% slippage and ${messages[5].content} SOL per trade. You can start/stop the bot using the controls below.`,
          isComplete: true
        };
      }
      
      if (botResponse) {
        setMessages(prev => [...prev, botResponse as BotMessage]);
      }
      
      setInputValue('');
    }, 800);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-[100px] animate-pulse-soft"></div>
      </div>
      
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
        <div className="relative w-full h-full">
          <div className="absolute top-[calc(20%+5vw)] left-[calc(10%+5vw)] w-16 h-16 bg-accent/10 backdrop-blur-xl rounded-xl border border-accent/20 animate-float"></div>
          <div className="absolute top-[calc(50%-10vw)] right-[calc(15%+10vw)] w-20 h-20 bg-primary/10 backdrop-blur-xl rounded-xl border border-primary/20 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-[calc(20%+5vw)] left-[calc(20%+15vw)] w-24 h-24 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            ref={ref} 
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="inline-flex items-center px-3 py-1 text-xs font-medium rounded-full glass mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span>Windows Sniper Bot • Version 2.0</span>
            </span>
            
            <h1 className="heading-xl mb-4">
              <span className="block">Lightning-Fast</span> 
              <span className="text-gradient">Token Sniper Bot</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 mb-8 min-h-[3.5rem]">
              {displayText}<span className="animate-pulse">|</span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <a href="#download" className="primary-button group">
                <span className="primary-button-content">
                  Download Now <ArrowRight size={18} />
                </span>
              </a>
              <a href="#how-it-works" className="secondary-button">
                <span className="flex items-center justify-center space-x-2">
                  Learn More
                </span>
              </a>
            </div>
            
            <div className="glass-card p-4 inline-flex items-center space-x-5 mb-10">
              <div className="flex items-center">
                <Twitter size={20} className="text-accent mr-2" />
                <span>Twitter</span>
              </div>
              <div className="h-6 w-px bg-white/10"></div>
              <div className="flex items-center">
                <MessageCircle size={20} className="text-accent mr-2" />
                <span>Telegram</span>
              </div>
            </div>
          </div>
          
          <div 
            className={`relative w-full max-w-3xl glass-card overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ height: 'auto', minHeight: '420px' }}
          >
            {/* Bot Interface Preview */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
            
            <div className="relative p-5">
              {/* Bot Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <Bot className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-3 text-left">
                    <h3 className="font-bold text-white">Token Sniper Bot</h3>
                    <div className="flex items-center">
                      <span className="h-2 w-2 bg-green-400 rounded-full mr-2"></span>
                      <span className="text-xs text-white/70">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                    <RefreshCw className="h-4 w-4 text-white/70" />
                  </button>
                  <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
                    <Settings className="h-4 w-4 text-white/70" />
                  </button>
                </div>
              </div>
              
              {/* Bot Messages Area */}
              <div className="h-64 overflow-y-auto py-4 flex flex-col space-y-3 mb-4 scrollbar-thin">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-primary text-white rounded-tr-none' 
                          : 'bg-white/10 text-white rounded-tl-none'
                      }`}
                    >
                      <p className="text-sm text-left">{message.content}</p>
                      {message.isComplete && (
                        <div className="mt-3 flex flex-col space-y-2">
                          <div className="flex items-center justify-between bg-white/5 p-2 rounded">
                            <div className="flex items-center">
                              <Twitter className="h-4 w-4 text-accent mr-2" />
                              <span className="text-xs">Twitter Monitoring</span>
                            </div>
                            <span className="text-xs text-green-400">Active</span>
                          </div>
                          <div className="flex items-center justify-between bg-white/5 p-2 rounded">
                            <div className="flex items-center">
                              <DollarSign className="h-4 w-4 text-accent mr-2" />
                              <span className="text-xs">Auto Trading</span>
                            </div>
                            <span className="text-xs text-green-400">Ready</span>
                          </div>
                          <button className="bg-accent text-white text-xs py-2 rounded mt-1 hover:bg-accent/80 transition-colors">
                            Start Sniping
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bot Input Area */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="glass-input w-full pr-12"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4 text-white" />
                </button>
              </div>
              
              {/* Bot Footer */}
              <div className="mt-4 flex justify-between items-center text-xs text-white/50">
                <div className="flex items-center">
                  <AlertCircle className="h-3 w-3 mr-1" />
                  <span>Enter Twitter handle to monitor</span>
                </div>
                <span>v2.0.3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
