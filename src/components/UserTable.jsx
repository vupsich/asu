import React from "react";
import "./UserTable.css";

const UserTable = () => {
  const users = [
    {
      name: "Смирнов Александр",
      email: "smirnovalexander.moscow@mail.ru",
      birthDate: "27-10-2003",
      gender: "Мужской",
      city: "Иркутск",
      language: "Русский",
    },
    {
      name: "Смирнов Александр",
      email: "smirnovalexander.moscow@mail.ru",
      birthDate: "27-10-2003",
      gender: "Мужской",
      city: "Иркутск",
      language: "Русский",
    },
    {
      name: "Смирнов Александр",
      email: "smirnovalexander.moscow@mail.ru",
      birthDate: "27-10-2003",
      gender: "Мужской",
      city: "Иркутск",
      language: "Русский",
    },
    {
      name: "Смирнов Александр",
      email: "smirnovalexander.moscow@mail.ru",
      birthDate: "27-10-2003",
      gender: "Мужской",
      city: "Иркутск",
      language: "Русский",
    },
  ];

  return (
    <div className="user-table">
      <table className="table">
        <thead>
          <tr>
            <th>Имя Фамилия</th>
            <th>Почта</th>
            <th>Дата рождения</th>
            <th>Пол</th>
            <th>Город</th>
            <th>Язык</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
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
      <div className="pagination">&bull;&bull;&bull;</div>
    </div>
  );
};

export default UserTable;
