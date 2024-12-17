import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import searchIcon from './search.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="clickable-logo">
          <span className="red-letter">С </span>В Е Т Л И Ц А
        </Link>
      </div>
      <nav className="navh">
        <Link to="/">Экскурсии</Link>
        <Link to="/">Организаторы</Link>
        <div className="search-container">
          <input type="text" placeholder="Знаменский монастырь" className="search-bar" />
          <button className="search-button">
            <img src={searchIcon} alt="Поиск" />
          </button>
        </div>
        <Link to="/">О нас</Link>
        <Link to="/">Помощь</Link>
        <div className="buttons">
          <Link to="/login">
            <button className="login-button">Вход</button>
          </Link>
          <Link to="/register">
            <button className="register-button">Регистрация</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
