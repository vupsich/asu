import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Filters from "./Filters";
import UserTable from "./UserTable";
import Charts from "./Charts";
import "./AnalyticsDashboard.css";

const AnalyticsDashboard = () => {
  return (
    <div className="analytics-dashboard">
      <h1 className="h1AD">Администратор: анализ и управление</h1>
      <div className="dashboard-body">
        <Sidebar />
        <div className="content">
          <h2>Анализ пользователей</h2>
          <Filters />
          <UserTable />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
