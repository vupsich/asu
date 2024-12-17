import React from "react";
import Filters from "../components/FiltersMain";
import TourCard from "../components/TourCard";
import Pagination from "../components/Pagination";
import "./TourListPage.css";

const toursData = [
  {
    id: 1,
    image: "",
    title: "Тальцы",
    description: "Откройте для себя архитектурное наследие региона.",
    duration: "2 часа",
    time: "14:00",
    price: 2000,
    rating: 4.7,
    reviews: 12,
    guide: "Галя Б."
  },
  {
    id: 2,
    image: "",
    title: "Музей-усадьба В.П. Сукачева",
    description: "Исследуйте уникальную архитектуру и живописное окружение.",
    duration: "3 часа",
    time: "10:00",
    price: 2000,
    rating: 4.7,
    reviews: 17,
    guide: "Борис Г."
  },
  {
    id: 1,
    image: "",
    title: "Тальцы",
    description: "Откройте для себя архитектурное наследие региона.",
    duration: "2 часа",
    time: "14:00",
    price: 2000,
    rating: 4.7,
    reviews: 12,
    guide: "Галя Б."
  },
  {
    id: 2,
    image: "",
    title: "Музей-усадьба В.П. Сукачева",
    description: "Исследуйте уникальную архитектуру и живописное окружение.",
    duration: "3 часа",
    time: "10:00",
    price: 2000,
    rating: 4.7,
    reviews: 17,
    guide: "Борис Г."
  },
  {
    id: 1,
    image: "",
    title: "Тальцы",
    description: "Откройте для себя архитектурное наследие региона.",
    duration: "2 часа",
    time: "14:00",
    price: 2000,
    rating: 4.7,
    reviews: 12,
    guide: "Галя Б."
  },
  {
    id: 2,
    image: "",
    title: "Музей-усадьба В.П. Сукачева",
    description: "Исследуйте уникальную архитектуру и живописное окружение.",
    duration: "3 часа",
    time: "10:00",
    price: 2000,
    rating: 4.7,
    reviews: 17,
    guide: "Борис Г."
  },
  {
    id: 1,
    image: "",
    title: "Тальцы",
    description: "Откройте для себя архитектурное наследие региона.",
    duration: "2 часа",
    time: "14:00",
    price: 2000,
    rating: 4.7,
    reviews: 12,
    guide: "Галя Б."
  },
  {
    id: 2,
    image: "",
    title: "Музей-усадьба В.П. Сукачева",
    description: "Исследуйте уникальную архитектуру и живописное окружение.",
    duration: "3 часа",
    time: "10:00",
    price: 2000,
    rating: 4.7,
    reviews: 17,
    guide: "Борис Г."
  },
  {
    id: 2,
    image: "",
    title: "Музей-усадьба В.П. Сукачева",
    description: "Исследуйте уникальную архитектуру и живописное окружение.",
    duration: "3 часа",
    time: "10:00",
    price: 2000,
    rating: 4.7,
    reviews: 17,
    guide: "Борис Г."
  }
  // Другие экскурсии...
];

const TourListPage = () => {
  return (
    <div className="tour-page">
      <Filters />
      <div className="tour-cards-container">
        {toursData.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default TourListPage;
