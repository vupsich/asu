import React, { useState } from "react";
import "./FiltersMain.css";

const Filters = () => {
  return (
    <div className="filters-container">
      {/* Фильтры слева */}
      <aside className="filters-sidebar">
        <h4>Категория экскурсий</h4>
        <ul>
          <li><input type="checkbox" /> Культурные</li>
          <li><input type="checkbox" /> Пешеходные</li>
          <li><input type="checkbox" /> Загородные</li>
        </ul>

        <h4>Тип передвижения</h4>
        <ul>
          <li><input type="checkbox" /> Пешком</li>
          <li><input type="checkbox" /> Автобус</li>
        </ul>

        <h4>Тип группы</h4>
        <ul>
          <li><input type="checkbox" /> Групповая</li>
          <li><input type="checkbox" /> Индивидуальная</li>
        </ul>

        <h4>Цена</h4>
        <ul>
          <li><input type="radio" name="price" /> Менее 1000</li>
          <li><input type="radio" name="price" /> 1000-3000</li>
        </ul>
      </aside>

      {/* Фильтры сверху */}
      <div className="filters-topbar">
        <div className="filters__container">
          <input
            type="text"
            placeholder="Место проведения"
            className="filter__input"
          />
        </div>

        <div className="filters__container">
          <input
            type="date"
            className="filter__input"
          />
        </div>

        <div className="filters__group">
          <label className="filter__label">
            <input type="checkbox" className="filter__checkbox" /> Можно с детьми
          </label>
        </div>

        <div className="filters__container">
          <select className="filter__input">
            <option>Язык</option>
            <option>Русский</option>
            <option>Английский</option>
            <option>Китайский</option>
          </select>
        </div>

        <div className="filters__group">
          <button className="apply-button">
            По рейтингу
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
