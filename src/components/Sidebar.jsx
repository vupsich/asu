import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar__menu">
        <h3 className="menu__title">Аналитика</h3>
        <ul className="menu__list">
          <li><Link to="/users-analysis">Анализ пользователей</Link></li>
          <li><Link to="/guides-analysis">Анализ экскурсоводов</Link></li>
          <li><Link to="/excursions-analysis">Анализ экскурсий</Link></li>
          <li><Link to="/past-excursions">Анализ проведённых экскурсий</Link></li>
          <li><Link to="/attendance-analysis">Анализ посещаемости экскурсий</Link></li>
        </ul>

        <h3 className="menu__title">Управление</h3>
        <ul className="menu__list">
          <li><Link to="/excursions-management">Управление экскурсиями</Link></li>
          <li><Link to="/guides-management">Управление гидами</Link></li>
          <li><Link to="/tourists-management">Управление экскурсантами</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
