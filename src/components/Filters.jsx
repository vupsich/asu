import React from "react";
import "./Filters.css";

const Filters = () => {
  return (
    <div className="filters">
      <div className="filters__group">
        <label htmlFor="startDate">От</label>
        <input type="date" id="startDate" className="filter__input" />
        <label htmlFor="endDate">До</label>
        <input type="date" id="endDate" className="filter__input" />
      </div>

      <div className="filters__group">
        <label htmlFor="gender">Пол</label>
        <select id="gender" className="filter__input">
          <option value="all">Все</option>
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
        </select>
      </div>

      <div className="filters__group">
        <label htmlFor="language">Язык</label>
        <select id="language" className="filter__input">
          <option value="all">Выбрать</option>
          <option value="russian">Русский</option>
          <option value="english">Английский</option>
          <option value="chinese">Китайский</option>
        </select>
      </div>

      <div className="filters__group">
        <label htmlFor="city">Город</label>
        <select id="city" className="filter__input">
          <option value="all">Выбрать</option>
          <option value="irkutsk">Иркутск</option>
          <option value="angarsk">Ангарск</option>
          <option value="bratsk">Братск</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
