import React from "react";
import "./Filters.css";

const Filters = () => {
  const handleApplyFilters = () => {
    // Логика применения фильтров будет здесь
    console.log("Фильтры применены!");
  };

  return (
    <div className="filters">
      {/* От */}
      <div className="filters__group">
        <div className="filters__container">
          <label htmlFor="startDate">От</label>
          <input type="date" id="startDate" className="filter__input" />
        </div>
      </div>

      {/* До */}
      <div className="filters__group">
        <div className="filters__container">
          <label htmlFor="endDate">До</label>
          <input type="date" id="endDate" className="filter__input" />
        </div>
      </div>

      {/* Пол */}
      <div className="filters__group">
        <label htmlFor="gender">Пол</label>
        <div className="filters__container">
          <select id="gender" className="filter__input">
            <option value="all">Все</option>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>
      </div>

      {/* Язык */}
      <div className="filters__group">
        <label htmlFor="language">Язык</label>
        <div className="filters__container">
          <select id="language" className="filter__input">
            <option value="all">Выбрать</option>
            <option value="russian">Русский</option>
            <option value="english">Английский</option>
            <option value="chinese">Китайский</option>
          </select>
        </div>
      </div>

      {/* Город */}
      <div className="filters__group">
        <label htmlFor="city">Город</label>
        <div className="filters__container">
          <select id="city" className="filter__input">
            <option value="all">Выбрать</option>
            <option value="irkutsk">Иркутск</option>
            <option value="angarsk">Ангарск</option>
            <option value="bratsk">Братск</option>
          </select>
        </div>
      </div>

      {/* Кнопка Применить */}
      <div className="filters__group">
        <button
          className="filters__container apply-button"
          onClick={handleApplyFilters}
        >
          Применить
        </button>
      </div>
    </div>
  );
};

export default Filters;
