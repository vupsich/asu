import React from "react";
import noImage from "../components/no-image-cat.png";
import "./TourCard.css";

const TourCard = ({ tour }) => {
  const { image, title, description, duration, time, price, rating, reviews, guide } = tour;

  return (
    <div className="tour-card">
      {/* Лента-сетка */}
      <div className="ribbon">🔥 Популярное</div>

      <img
        src={image || noImage}
        alt={title || "Изображение недоступно"}
        className="tour-image"
      />
      <h3 className="tour-title">{title || "Название не указано"}</h3>

      <div className="tour-details">
        <div className="tour-info">
          <p>🕒 Длительность: {duration || "Не указано"}</p>
          <p>📅 Ближайшая экскурсия: {time || "Не указано"}</p>
          <p>👤 Гид: {guide || "Не указан"}</p>
        </div>
        <div className="tour-price">💰 {price ? `${price} ₽/чел` : "Уточняйте"}</div>
      </div>

      <div className="tour-description">{description || "Описание недоступно"}</div>
      <div className="tour-rating">⭐ {rating || 0} ({reviews || 0} отзывов)</div>
    </div>
  );
};

export default TourCard;
