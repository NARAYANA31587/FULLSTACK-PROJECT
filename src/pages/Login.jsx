import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { User, Lock, Mail, Sparkles } from 'lucide-react';
import { demoCredentials } from '../data/mockData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error('Please fill all fields');
      return;
    }

    login(email, password, role);
    toast.success(`Welcome ${role}!`, {
      icon: '🎉',
      style: {
        borderRadius: '12px',
        background: '#333',
        color: '#fff',
      },
    });
    navigate(`/dashboard/${role}`);
  };

  const fillDemo = (demoRole) => {
    setRole(demoRole);
    setEmail(demoCredentials[demoRole].email);
    setPassword(demoCredentials[demoRole].password);
  };

  const roleIcons = {
    student: '🎓',
    employer: '💼',
    admin: '👨‍💼',
    officer: '📊'
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-12 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-md w-full relative z-10 animate-fade-in">
        <div className="card backdrop-blur-xl bg-white/95 dark:bg-gray-800/95 shadow-2xl border-2 border-white/50">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse-glow">
                <User className="w-12 h-12 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
            </div>
            <h2 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-3 text-gray-700 dark:text-gray-300 uppercase tracking-wide">Select Role</label>
              <div className="grid grid-cols-2 gap-3">
                {['student', 'employer', 'admin', 'officer'].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-4 px-4 rounded-2xl font-bold transition-all duration-300 transform relative overflow-hidden ${
                      role === r
                        ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl scale-105'
                        : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                    }`}
                  >
                    <span className="text-2xl mb-1 block">{roleIcons[r]}</span>
                    <span className="text-sm">{r.charAt(0).toUpperCase() + r.slice(1)}</span>
                    {role === r && (
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-shimmer"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300 uppercase tracking-wide">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-12 text-lg"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300 uppercase tracking-wide">Password</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-12 text-lg"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="w-full btn-primary text-xl font-black">
              Sign In →
            </button>
          </form>

          <div className="mt-8 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400 mb-4 font-bold uppercase tracking-wide">Quick Demo Login</p>
            <div className="grid grid-cols-2 gap-3">
              {['student', 'employer', 'admin', 'officer'].map((r) => (
                <button
                  key={r}
                  onClick={() => fillDemo(r)}
                  className="text-sm py-3 px-4 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 rounded-xl transition-all duration-300 font-semibold hover:scale-105 transform shadow-md hover:shadow-lg"
                >
                  <span className="mr-1">{roleIcons[r]}</span>
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-white text-sm font-medium">
          Don't have an account? <span className="font-bold underline cursor-pointer hover:text-yellow-300 transition-colors">Sign up free</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
