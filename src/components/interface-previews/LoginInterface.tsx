
import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';

const LoginInterface: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent mx-auto flex items-center justify-center mb-3">
            <Lock className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold">Log In</h3>
          <p className="text-white/60 text-xs">Get access to your POWER Dashboard</p>
        </div>
        
        <form>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Mail className="h-4 w-4 text-white/40" />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-black/20 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Lock className="h-4 w-4 text-white/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full bg-black/20 border border-white/10 rounded-md py-2 pl-9 pr-9 text-sm text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
          
          <button
            type="button"
            className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-sm font-medium"
          >
            <span className="flex items-center justify-center">
              <LogIn className="h-4 w-4 mr-2" />
              Log In
            </span>
          </button>
          
          <div className="mt-4 flex justify-between items-center text-xs text-white/60">
            <a href="#" className="hover:text-white/90 transition-colors">Forgot Password?</a>
            <a href="#" className="hover:text-white/90 transition-colors">Create Account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginInterface;
