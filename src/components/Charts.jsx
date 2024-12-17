import React from "react";
// import "./Charts.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const Charts = () => {
  const registrationData = [
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

  const genderData = [
    { name: "Женщины", value: 55 },
    { name: "Мужчины", value: 45 },
  ];

  const cityData = [
    { name: "Иркутск", value: 66 },
    { name: "Ангарск", value: 15 },
    { name: "Братск", value: 13 },
    { name: "Другие", value: 7 },
  ];

  const ageData = [
    { name: "16-21 лет", value: 35 },
    { name: "22-30 лет", value: 25 },
    { name: "31-40 лет", value: 18 },
    { name: "41-47 лет", value: 11 },
    { name: "48-55 лет", value: 6 },
    { name: "> 55 лет", value: 5 },
  ];

  const COLORS = ["#76c893", "#40916c", "#95d5b2", "#52b788", "#2d6a4f", "#1b4332"];

  return (
    <div className="charts">
      {/* Годовая активность регистрации аккаунтов */}
      <div className="chart__block">
        <h3>Годовая активность регистрации аккаунтов</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={registrationData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#76c893" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Соотношение полов */}
      <div className="chart__block">
        <h3>Соотношение полов</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={genderData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {genderData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Соотношение городов */}
      <div className="chart__block">
        <h3>Соотношение городов</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={cityData}
              dataKey="value"
              nameKey="name"
              cx="50%"
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

      {/* Возраст по группам */}
      <div className="chart__block">
        <h3>Возраст по группам</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={ageData}
              dataKey="value"
              nameKey="name"
              cx="50%"
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
  );
};

export default Charts;
