import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage if available
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setRole(user.role);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    setRole('');
    navigate('/login');
  };

  return (
    <LoginContext.Provider value={{ role, logout }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginContext, LoginProvider };
