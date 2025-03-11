
import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

const CreateAccountInterface: React.FC = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full rounded-lg overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 shadow-xl">
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="h-12 w-12 rounded-full bg-gradient-to-r from-primary to-accent mx-auto flex items-center justify-center mb-3">
            <User className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-lg font-bold">Create Account</h3>
          <p className="text-white/60 text-xs">Join POWER to start sniping tokens</p>
        </div>
        
        <form>
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-white/70 mb-1">
                Username
              </label>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <User className="h-4 w-4 text-white/40" />
                </div>
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="w-full bg-black/20 border border-white/10 rounded-md py-2 pl-9 pr-3 text-sm text-white"
                />
              </div>
            </div>
            
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
                  placeholder="Create a strong password"
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
          
          <div className="mb-4">
            <div className="flex items-center space-x-2">
              <div className="h-5 w-5 border border-white/30 rounded flex items-center justify-center bg-accent/10">
                <CheckCircle className="h-4 w-4 text-accent" />
              </div>
              <span className="text-xs text-white/70">I agree to the Terms of Service and Privacy Policy</span>
            </div>
          </div>
          
          <button
            type="button"
            className="w-full py-2 rounded-md bg-gradient-to-r from-accent to-primary text-white text-sm font-medium"
          >
            Create Account
          </button>
          
          <div className="mt-4 text-center text-xs text-white/60">
            <span>Already have an account? </span>
            <a href="#" className="text-accent hover:underline">Log In</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountInterface;
