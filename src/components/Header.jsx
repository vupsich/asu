import React from "react";
import "./Header.css";
import searchIcon from './search.png';


const Header = () => {
  return (
    <header className="header">
      <div className="logo">СВЕТЛИЦА</div>
      <nav>
        <a href="/">Экскурсии</a>
        <a href="/">Организаторы</a>
        <div className="search-container">
          <input type="text" placeholder="Знаменский монастырь" className="search-bar" />
          <button className="search-button">
            <img src={searchIcon} alt="Поиск" />
          </button>
        </div>
        <a href="/">О нас</a>
        <a href="/">Помощь</a>
        <button className="login-button">Вход</button>
      </nav>
    </header>
  );
};

export default Header;
