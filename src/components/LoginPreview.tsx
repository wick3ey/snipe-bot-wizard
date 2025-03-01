
import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, LogIn, AlertCircle } from 'lucide-react';
import { useScrollAnimation } from '../lib/animations';

const LoginPreview: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validera input
    if (!email.trim() || !password.trim()) {
      setError('Vänligen fyll i alla fält');
      return;
    }
    
    setLoading(true);
    setError('');
    
    // Simulera inloggning
    setTimeout(() => {
      setLoading(false);
      if (email === 'demo@example.com' && password === 'password') {
        // Simulering av lyckad inloggning
        console.log('Inloggad');
      } else {
        setError('Ogiltiga inloggningsuppgifter. Prova demo@example.com / password');
      }
    }, 1500);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div 
            ref={ref}
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">Säker inloggning</span> till SniperBot
            </h2>
            <p className="text-white/70 text-lg">
              Kom åt dina trading-strategier och se realtidsresultat med vår säkra inloggningsportal
            </p>
          </div>
        </div>
        
        <div className="max-w-md mx-auto glass-card p-8 animate-fade-in">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent mx-auto flex items-center justify-center mb-4">
              <Lock className="h-8 w-8 text-white" />
            </div>
            <h3 className="heading-sm">Logga in</h3>
            <p className="text-white/60 text-sm mt-2">Få tillgång till din SniperBot Dashboard</p>
          </div>
          
          {error && (
            <div className="bg-destructive/20 p-3 rounded-lg mb-6 flex items-start">
              <AlertCircle className="h-5 w-5 text-destructive mr-2 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-white/90">{error}</p>
            </div>
          )}
          
          <form onSubmit={handleLogin}>
            <div className="space-y-4 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  E-postadress
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Mail className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    placeholder="din@email.com"
                    className="glass-input w-full pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/70 mb-2">
                  Lösenord
                </label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <Lock className="h-5 w-5 text-white/40" />
                  </div>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="glass-input w-full pl-10 pr-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/70"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="primary-button w-full"
              disabled={loading}
            >
              <span className="primary-button-content">
                {loading ? (
                  <>
                    <span className="h-5 w-5 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></span>
                    Loggar in...
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5 mr-2" />
                    Logga in
                  </>
                )}
              </span>
            </button>
            
            <div className="mt-6 flex justify-between items-center text-sm text-white/60">
              <a href="#" className="hover:text-white/90 transition-colors">Glömt lösenord?</a>
              <a href="#" className="hover:text-white/90 transition-colors">Skapa konto</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPreview;
