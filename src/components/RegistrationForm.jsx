import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form className="registration-form">
      <h2>РЕГИСТРАЦИЯ</h2>
      <div className="name-container">
        <input type="text" placeholder="Имя" required />
        <input type="text" placeholder="Фамилия" required />
      </div>
      <input type="email" placeholder="Адрес эл. почты" required />
      <div className="dob-gender-container">
        <input type="date" placeholder="Дата рождения" required />
        <input type="text" placeholder="Пол" />
      </div>
      <div className="city-language-container">
        <input type="text" placeholder="Город" />
        <input type="text" placeholder="Язык" />
      </div>
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
      <input type="password" placeholder="Повторите пароль" required />
      <button type="submit" className="submit-button">
        Создать профиль
      </button>
      <p>Уже есть аккаунт? <a href="/">Войти</a></p>
    </form>
  );
};

export default RegistrationForm;
