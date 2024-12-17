import React, { useState } from "react";
import "./Charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  PieChart,  // добавьте импорт PieChart
  Pie,       // добавьте импорт Pie
  Cell       // добавьте импорт Cell
} from "recharts"; // убедитесь, что все эти компоненты импортированы из библиотеки recharts

const Charts = () => {
  const [period, setPeriod] = useState("Год");

  const registrationDataYear = [
    { name: "янв.", value: 20 },
    { name: "фев.", value: 15 },
    { name: "мар.", value: 18 },
    { name: "апр.", value: 22 },
    { name: "май.", value: 25 },
    { name: "июн.", value: 30 },
    { name: "июл.", value: 28 },
    { name: "авг.", value: 33 },
    { name: "сен.", value: 29 },
    { name: "окт.", value: 35 },
    { name: "ноя.", value: 40 },
    { name: "дек.", value: 45 },
  ];

  const registrationDataMonth = [
    { name: "Неделя 1", value: 10 },
    { name: "Неделя 2", value: 15 },
    { name: "Неделя 3", value: 20 },
    { name: "Неделя 4", value: 25 },
  ];

  const registrationDataWeek = [
    { name: "Понед.", value: 5 },
    { name: "Вторник", value: 8 },
    { name: "Среда", value: 10 },
    { name: "Четверг", value: 12 },
    { name: "Пятница", value: 13 },
    { name: "Суб.", value: 15 },
    { name: "Воскр.", value: 16 },
  ];

  const genderData = [
    { name: "Женщины", value: 55 },
    { name: "Мужчины", value: 45 },
  ];

  const cityData = [
    { name: "Иркутск", value: 65 },
    { name: "Ангарск", value: 15 },
    { name: "Братск", value: 13 },
    { name: "Другие", value: 7 },
  ];

  const ageData = [
    { name: "16-21 лет", value: 35 },
    { name: "22-30 лет", value: 25 },
    { name: "31-40 лет", value: 15 },
    { name: "41-47 лет", value: 10 },
    { name: "48-55 лет", value: 5 },
    { name: "> 55 лет", value: 5 },
  ];

  const COLORS = ["#85b082", "#84a682", "#839d81", "#829381", "#818a80", "#808080"];
  const genderColors = ["#d4a8cc", "#57719b"];

  const handlePeriodChange = (period) => {
    setPeriod(period);
  };

  const getRegistrationData = () => {
    switch (period) {
      case "Неделя":
        return registrationDataWeek;
      case "Месяц":
        return registrationDataMonth;
      default:
        return registrationDataYear;
    }
  };

  return (
    <div className="charts">
      {/* Кнопки для выбора периода */}
      

      {/* Годовая активность регистрации аккаунтов */}
      <div className="chart__block"><div className="period-buttons">
        <button onClick={() => handlePeriodChange("Год")}>Год</button>
        <button onClick={() => handlePeriodChange("Месяц")}>Месяц</button>
        <button onClick={() => handlePeriodChange("Неделя")}>Неделя</button>
      </div>
        <h3>Активность регистрации аккаунтов ({period})</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={getRegistrationData()}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
            <Bar dataKey="value" fill="#76c893" barSize={40} name="Количество пользователей"/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Группа из двух диаграмм на одной строке */}
      <div className="row">
        <div className="chart__block">
          <h3>Соотношение полов</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ left: 410 }} />
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="55%"
                cy="50%"
                outerRadius={80}
                label
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={genderColors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart__block">
          <h3>Соотношение городов</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ left: 410 }} />
              <Pie
                data={cityData}
                dataKey="value"
                nameKey="name"
                cx="55%"
                cy="50%"
                outerRadius={80}
                label
              >
                {cityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Возраст по группам */}
      <div className="centered-row">
        <div className="chart__block chart__block--small">
          <h3>Возраст по группам</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ left: 410 }} />
              <Pie
                data={ageData}
                dataKey="value"
                nameKey="name"
                cx="55%"
                cy="50%"
                outerRadius={80}
                label
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Charts;
