import React, { useState } from "react";
import "./RegistrationForm.css"; // Используем те же стили

const AuthorizationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="registration-form">
      <h2>АВТОРИЗАЦИЯ</h2>
      <input
        type="email"
        placeholder="Адрес эл. почты"
        required
        autoComplete="email"
      />
      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Пароль"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="toggle-password"
        >
          👁
        </button>
      </div>
      <button type="submit" className="submit-button">
        Войти
      </button>
      <p>
        Нет аккаунта? <a href="/register">Зарегистрироваться</a>
      </p>
      <p>
        Забыли пароль? <a href="/">Сменить пароль</a>
      </p>
    </form>
  );
};

export default AuthorizationForm;
