import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Импортируем AuthProvider
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import AuthorizationForm from './components/AuthorizationForm';
import ImageSection from './components/ImageSection';
import AnalyticsDashboard from './components/AnalyticsDashboard'; // Импорт новой страницы
import './App.css';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<div className="main-content">Добро пожаловать на наш сайт!</div>} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<AuthorizationForm />} />
            <Route path="/analytics" element={<ProtectedRoute><AnalyticsDashboard /></ProtectedRoute>} />
            <Route path="/images" element={<ImageSection />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
