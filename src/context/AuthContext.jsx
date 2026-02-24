import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
      document.documentElement.classList.toggle('dark', savedTheme === 'true');
    }
  }, []);

  const login = (email, password, role) => {
    const userData = { email, role, name: email.split('@')[0] };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      document.documentElement.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, darkMode, toggleDarkMode }}>
      {children}
    </AuthContext.Provider>
  );
};
