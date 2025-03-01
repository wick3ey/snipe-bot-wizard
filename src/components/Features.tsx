
import React from 'react';
import { Zap, Shield, Clock, BarChart3, Twitter, MessageCircle } from 'lucide-react';
import { useScrollAnimation, useCounterAnimation } from '../lib/animations';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <div 
      ref={ref}
      className={`glass-card p-6 transition-all duration-500 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
        <div className="text-accent">{icon}</div>
      </div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stat: React.FC<StatProps> = ({ value, label, prefix = '', suffix = '' }) => {
  const { ref, isVisible } = useScrollAnimation();
  const count = useCounterAnimation(isVisible ? value : 0);
  
  return (
    <div ref={ref} className="text-center">
      <p className="heading-xl mb-2">
        {prefix}{count}{suffix}
      </p>
      <p className="text-white/70">{label}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section id="features" className="py-24">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="heading-lg mb-4">
              Advanced Features for <span className="text-gradient">Professional Traders</span>
            </h2>
            <p className="text-white/70 text-lg">
              Our sniper bot is designed with cutting-edge technology to give you the competitive edge in the fast-paced world of token trading.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Feature 
            icon={<Zap size={24} />}
            title="Lightning Speed"
            description="React in milliseconds to new token mentions with our high-performance execution engine."
            delay={100}
          />
          <Feature 
            icon={<Shield size={24} />}
            title="Advanced Security"
            description="Protect your investments with built-in scam detection and risk management features."
            delay={200}
          />
          <Feature 
            icon={<Clock size={24} />}
            title="24/7 Monitoring"
            description="Never miss an opportunity with round-the-clock automated monitoring of your selected accounts."
            delay={300}
          />
          <Feature 
            icon={<BarChart3 size={24} />}
            title="Smart Analytics"
            description="Make informed decisions with real-time performance metrics and trading insights."
            delay={400}
          />
        </div>
        
        <div className="glass-card p-8">
          <div className="text-center mb-10">
            <h3 className="heading-md mb-2">Supported Platforms</h3>
            <p className="text-white/70">Snipe tokens from influential accounts across major platforms</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg border border-accent/20 transition-all duration-300 hover:border-accent/50 hover:shadow-neon">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Twitter size={24} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Twitter</h4>
                  <p className="text-white/70">Track tweets from influential crypto accounts</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Real-time tweet monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Keyword and cashtag filtering</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                  <span>Multi-account tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="glass p-6 rounded-lg border border-primary/20 transition-all duration-300 hover:border-primary/50 hover:shadow-neon">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Telegram</h4>
                  <p className="text-white/70">Monitor crypto groups and channels</p>
                </div>
              </div>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Group and channel monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Advanced message parsing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <span>Instant notification system</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 glass-card p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Stat value={500} label="MS Average Response Time" suffix="ms" />
            <Stat value={99} label="Success Rate" suffix="%" />
            <Stat value={10000} label="Successful Trades" suffix="+" />
            <Stat value={24} label="Hours Active Monitoring" suffix="/7" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
