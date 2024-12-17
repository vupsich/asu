import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Filters from "./Filters";
import UserTable from "./UserTable";
import Charts from "./Charts";
import "./AnalyticsDashboard.css";

const AnalyticsDashboard = () => {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    gender: "all",
    city: "all",
    language: "all",
  });

  const applyFilters = (newFilters) => {
    setFilters(newFilters);
    console.log("Фильтры обновлены:", newFilters); // Для проверки
  };

  return (
    <div className="analytics-dashboard">
      <h1 className="h1AD">Администратор: анализ и управление</h1>
      <div className="dashboard-body">
        <Sidebar />
        <div className="content">
          <h2>Анализ пользователей</h2>
          <Filters onApplyFilters={applyFilters} />
          <UserTable filters={filters} />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
