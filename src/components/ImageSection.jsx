import React from "react";
import untitledImage from "./Untitled.png";  // Импорт изображения
import "./ImageSection.css";  // Импорт CSS

const ImageSection = () => {
  return (
    <div className="image-section">
      <img src={untitledImage} alt="Здание" />
    </div>
  );
};

export default ImageSection;
