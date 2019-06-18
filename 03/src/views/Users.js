import React, { useContext } from "react";

const MyContext = React.createContext();

const User = () => {
  const context = useContext(MyContext);

  return (
    <div>
      <p>User name: {context.name}</p>
    </div>
  );
};

const Users = () => (
  <div>
    <MyContext.Provider value={{ name: "Roman" }}>
      <h2 className="title is-3">Users</h2>
      <User />
    </MyContext.Provider>
  </div>
);

export default Users;
