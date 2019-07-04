import React, { useEffect, useState } from "react";
import { rootAPI } from 'api';
import { createPlaceholderImage, fetchData } from 'helpers';
import UsersList from 'components/Users/UsersList';

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  const [errors, setErrors] = useState(false);
  
  useEffect(() => {
    fetchData(rootAPI, setUsersData, setErrors);
  }, []);
  
  return (
    <div>
      <h2 className="title is-3">Users</h2>
      <div>
        <UsersList users={usersData} />
        {errors && <p className="title is-error">There's and error with the server, please come back later</p>}
      </div>
    </div>
  )   
};

export default Users;
 