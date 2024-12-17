import React from "react";
import "./Charts.css";
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
  Legend,
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
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
            <Bar dataKey="value" fill="#76c893" barSize={40} name="пользователь"/>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Группа из двух диаграмм на одной строке */}
      <div className="row">
        <div className="chart__block">
          <h3>Соотношение полов</h3>
          <ResponsiveContainer width="100%" height={250} >
            <PieChart>
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{  left: 410 }}/>
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
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{  left: 410 }}/>
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
              <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{  left: 410 }}/>
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
