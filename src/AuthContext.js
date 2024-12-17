import React, { createContext, useState, useContext, useEffect } from 'react';

// Создаем контекст
const AuthContext = createContext();

// Компонент-поставщик контекста
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем наличие токена при монтировании компонента
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);

    // Слушаем изменения localStorage
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setIsAuthenticated(!!token);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // Функция логина
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  // Функция логаута
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста в других компонентах
export const useAuth = () => useContext(AuthContext);
