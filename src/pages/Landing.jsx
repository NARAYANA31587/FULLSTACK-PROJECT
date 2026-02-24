import { Link } from 'react-router-dom';
import { Briefcase, Users, TrendingUp, Award, ArrowRight, CheckCircle, Sparkles, Zap, Shield, Target } from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full mb-8 border border-white/30">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">India's #1 Placement Platform</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              Your Gateway to<br />
              <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">Dream Placements</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-medium">
              Connect with top employers, track applications, and land your dream job with our AI-powered placement system
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/login" className="btn-primary text-lg inline-flex items-center justify-center space-x-2 group">
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/login" className="btn-secondary text-lg inline-flex items-center justify-center space-x-2">
                <span>Watch Demo</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-in">
            {[
              { value: '1250+', label: 'Active Students', icon: Users },
              { value: '89', label: 'Job Openings', icon: Briefcase },
              { value: '45+', label: 'Top Companies', icon: Award },
              { value: '85%', label: 'Placement Rate', icon: TrendingUp }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 transform">
                <stat.icon className="w-8 h-8 mb-3 text-yellow-300" />
                <div className="text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-2 rounded-full mb-4">
              <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="font-bold text-blue-600 dark:text-blue-400">FEATURES</span>
            </div>
            <h2 className="text-5xl font-black mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Why Choose PlacementHub?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Everything you need for successful placements in one powerful platform</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, title: 'Job Opportunities', desc: 'Access hundreds of job openings from top companies', color: 'from-blue-500 to-cyan-500' },
              { icon: Users, title: 'Easy Management', desc: 'Streamlined process for students and employers', color: 'from-purple-500 to-pink-500' },
              { icon: TrendingUp, title: 'Analytics & Reports', desc: 'Track progress with detailed analytics', color: 'from-green-500 to-emerald-500' },
              { icon: Shield, title: 'Secure Platform', desc: 'Enterprise-grade security for your data', color: 'from-orange-500 to-red-500' }
            ].map((feature, idx) => (
              <div key={idx} className="card group text-center hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:rotate-12 transition-all duration-500`}>
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 px-6 py-2 rounded-full mb-6">
                <Target className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                <span className="font-bold text-purple-600 dark:text-purple-400">BENEFITS</span>
              </div>
              <h2 className="text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Built for Success</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Join thousands of students and employers who trust PlacementHub</p>
              <div className="space-y-4">
                {[
                  'AI-powered job matching',
                  'Real-time application tracking',
                  'Instant notifications',
                  'Comprehensive analytics',
                  '24/7 support'
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center space-x-3 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-all">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="font-semibold text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"></div>
                    <div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-32 mb-2"></div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-3xl font-black text-white mb-1">98%</div>
                    <div className="text-white/80 text-sm">Success Rate</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-3xl font-black text-white mb-1">24h</div>
                    <div className="text-white/80 text-sm">Avg Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMC0xMGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <div className="animate-pulse-glow inline-block mb-8">
            <Sparkles className="w-16 h-16 text-yellow-300" />
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-2xl mb-10 text-gray-100">Join thousands of students and employers on PlacementHub today</p>
          <Link to="/login" className="btn-primary text-xl inline-flex items-center space-x-3 bg-white text-blue-600 hover:bg-gray-100">
            <span>Get Started Now</span>
            <ArrowRight className="w-6 h-6" />
          </Link>
          <p className="mt-6 text-white/80">No credit card required • Free forever</p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
