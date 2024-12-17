import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext'; // Импортируем useAuth
import './Header.css';
import searchIcon from './search.png';

const Header = () => {
  const { isAuthenticated, logout } = useAuth(); // Получаем состояние из контекста
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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

        {/* Поисковая строка */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Знаменский монастырь"
            className="search-bar"
          />
          <button className="search-button">
            <img src={searchIcon} alt="Поиск" />
          </button>
        </div>

        <Link to="/">О нас</Link>
        <Link to="/">Помощь</Link>
      </nav>

      {/* Кнопки для входа и регистрации теперь в отдельном блоке */}
      <div className="buttons">
        {isAuthenticated ? (
          <>
            <Link to="/analytics">
              <button className="admin-button">Админ-панель</button>
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Выйти
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="login-button">Вход</button>
            </Link>
            <Link to="/register">
              <button className="register-button">Регистрация</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
