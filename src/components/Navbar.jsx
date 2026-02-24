import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Moon, Sun, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout, darkMode, toggleDarkMode } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 transform">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              PlacementHub
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform">
              {darkMode ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6 text-blue-600" />}
            </button>

            {user ? (
              <>
                <div className="flex items-center space-x-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-blue-200 dark:border-gray-600 shadow-md">
                  <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-semibold">{user.name}</span>
                  <span className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full font-bold uppercase">{user.role}</span>
                </div>
                <button onClick={handleLogout} className="flex items-center space-x-2 px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform font-semibold">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="btn-primary">Login</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
