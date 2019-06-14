import React from "react";
import UserItem from "../components/UserItem/UserItem";

const dummyUsers = [
  {
    id: 1,
    name: "Adam",
  },
  {
    id: 2,
    name: "Fava",
  },
  {
    id: 3,
    name: "Józef",
  },
  {
    id: 4,
    name: "Basia",
  },
  {
    id: 5,
    name: "Roman",
  },
  {
    id: 6,
    name: "Ania",
  },
  {
    id: 7,
    name: "Arek",
  },
];

const Users = () => (
  <div>
    <h2 className="title is-3">x users online</h2>
    <ul>
      {dummyUsers.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </ul>
  </div>
);

export default Users;
