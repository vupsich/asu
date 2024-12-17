import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ onApplyFilters }) => {
  const [localFilters, setLocalFilters] = useState({
    startDate: "",
    endDate: "",
    gender: "all",
    city: "all",
    language: "all",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const handleApplyFilters = () => {
    console.log("Применяемые фильтры:", localFilters);
    onApplyFilters(localFilters); // Передаём фильтры наверх
  };

  return (
    <div className="filters">
      {/* От */}
      <div className="filters__group">
        <div className="filters__container">
          <label htmlFor="startDate">От</label>
          <input
            type="date"
            id="startDate"
            className="filter__input"
            value={localFilters.startDate}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* До */}
      <div className="filters__group">
        <div className="filters__container">
          <label htmlFor="endDate">До</label>
          <input
            type="date"
            id="endDate"
            className="filter__input"
            value={localFilters.endDate}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Пол */}
      <div className="filters__group">
        <label htmlFor="gender">Пол</label>
        <div className="filters__container">
          <select
            id="gender"
            className="filter__input"
            value={localFilters.gender}
            onChange={handleChange}
          >
            <option value="all">Все</option>
            <option value="мужской">Мужской</option>
            <option value="женский">Женский</option>
          </select>
        </div>
      </div>

      {/* Язык */}
      <div className="filters__group">
        <label htmlFor="language">Язык</label>
        <div className="filters__container">
          <select
            id="language"
            className="filter__input"
            value={localFilters.language}
            onChange={handleChange}
          >
            <option value="all">Выбрать</option>
            <option value="Русский">Русский</option>
            <option value="Английский">Английский</option>
            <option value="Китайский">Китайский</option>
          </select>
        </div>
      </div>

      {/* Город */}
      <div className="filters__group">
        <label htmlFor="city">Город</label>
        <div className="filters__container">
          <select
            id="city"
            className="filter__input"
            value={localFilters.city}
            onChange={handleChange}
          >
            <option value="all">Выбрать</option>
            <option value="Иркутск">Иркутск</option>
            <option value="Ангарск">Ангарск</option>
            <option value="Братск">Братск</option>
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
