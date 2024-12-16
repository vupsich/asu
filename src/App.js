import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import AuthorizationForm from "./components/AuthorizationForm";
import ImageSection from "./components/ImageSection";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<div className="main-content">Добро пожаловать на наш сайт!</div>} />
          {/* Страница регистрации */}
          <Route
            path="/register"
            element={
              <div className="container">
                <ImageSection />
                <RegistrationForm />
              </div>
            }
          />
          {/* Страница авторизации */}
          <Route
            path="/login"
            element={
              <div className="container">
                <ImageSection />
                <AuthorizationForm />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
