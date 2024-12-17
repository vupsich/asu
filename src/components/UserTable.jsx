import React, { useState } from "react";
import "./UserTable.css";

const UserTable = () => {
  const users = [
    { name: "Иванов Сергей", email: "ivanovsergey.irkutsk@mail.ru", birthDate: "15-03-1995", gender: "Мужской", city: "Иркутск", language: "Русский" },
    { name: "Петрова Анна", email: "petrovaanna.angarsk@mail.ru", birthDate: "22-07-1990", gender: "Женский", city: "Ангарск", language: "Русский" },
    { name: "Сидоров Алексей", email: "sidorovalexey.bratsk@mail.ru", birthDate: "10-12-1988", gender: "Мужской", city: "Братск", language: "Русский" },
    { name: "Кузнецова Мария", email: "kuznetsovamaria.irkutsk@mail.ru", birthDate: "05-01-1992", gender: "Женский", city: "Иркутск", language: "Русский" },
    { name: "Смирнов Дмитрий", email: "smirnovdmitry.angarsk@mail.ru", birthDate: "30-09-1994", gender: "Мужской", city: "Ангарск", language: "Русский" },
    { name: "Федорова Ольга", email: "fedorovaolga.bratsk@mail.ru", birthDate: "18-11-1991", gender: "Женский", city: "Братск", language: "Русский" },
    { name: "Григорьев Николай", email: "grigorievnicolai.irkutsk@mail.ru", birthDate: "25-04-1985", gender: "Мужской", city: "Иркутск", language: "Русский" },
    { name: "Соколова Екатерина", email: "sokolovaekaterina.angarsk@mail.ru", birthDate: "12-06-1993", gender: "Женский", city: "Ангарск", language: "Русский" },
    { name: "Морозов Андрей", email: "morozovandrey.bratsk@mail.ru", birthDate: "29-08-1987", gender: "Мужской", city: "Братск", language: "Русский" },
    { name: "Лебедева Светлана", email: "lebedevasvetlana.irkutsk@mail.ru", birthDate: "03-02-1996", gender: "Женский", city: "Иркутск", language: "Русский" },
    { name: "Петрова Анна", email: "petrovaanna.angarsk@mail.ru", birthDate: "22-07-1990", gender: "Женский", city: "Ангарск", language: "Русский" },
    { name: "Сидоров Алексей", email: "sidorovalexey.bratsk@mail.ru", birthDate: "10-12-1988", gender: "Мужской", city: "Братск", language: "Русский" },
    { name: "Кузнецова Мария", email: "kuznetsovamaria.irkutsk@mail.ru", birthDate: "05-01-1992", gender: "Женский", city: "Иркутск", language: "Русский" },
    { name: "Смирнов Дмитрий", email: "smirnovdmitry.angarsk@mail.ru", birthDate: "30-09-1994", gender: "Мужской", city: "Ангарск", language: "Русский" },
    { name: "Федорова Ольга", email: "fedorovaolga.bratsk@mail.ru", birthDate: "18-11-1991", gender: "Женский", city: "Братск", language: "Русский" },
    { name: "Григорьев Николай", email: "grigorievnicolai.irkutsk@mail.ru", birthDate: "25-04-1985", gender: "Мужской", city: "Иркутск", language: "Русский" },
    { name: "Соколова Екатерина", email: "sokolovaekaterina.angarsk@mail.ru", birthDate: "12-06-1993", gender: "Женский", city: "Ангарск", language: "Русский" },
    { name: "Морозов Андрей", email: "morozovandrey.bratsk@mail.ru", birthDate: "29-08-1987", gender: "Мужской", city: "Братск", language: "Русский" },
    { name: "Лебедева Светлана", email: "lebedevasvetlana.irkutsk@mail.ru", birthDate: "03-02-1996", gender: "Женский", city: "Иркутск", language: "Русский" },
  ];

  const [currentPage, setCurrentPage] = useState(1); // Состояние текущей страницы
  const usersPerPage = 7; // Количество пользователей на странице

  // Рассчитываем индексы для текущей страницы
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Создаем массив номеров страниц
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="user-table">
      <table className="table">
        <thead>
          <tr>
            <th>Полное имя</th>
            <th>Почта</th>
            <th>Дата рождения</th>
            <th>Пол</th>
            <th>Город</th>
            <th>Язык</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
              <td>{user.gender}</td>
              <td>{user.city}</td>
              <td>{user.language}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Контейнер с кнопками пагинации */}
      <div className="pagination-container">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={number === currentPage ? "active" : ""}
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default UserTable;
