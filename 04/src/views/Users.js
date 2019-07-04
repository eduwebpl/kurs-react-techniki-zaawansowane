import React, { useEffect, useState } from "react";
import axios from 'axios';
import { rootAPI } from 'api';

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(rootAPI);
        
        setUsersData(data);
      }
      catch (err) {
        // console.log(err);
      }
      
    }
    fetchUsers();
  }, []);
  
  return (
    <div>
      <h2 className="title is-3">Users</h2>
      <div>
        {
          usersData.length === 0 ? (
            <p>Loading users...</p>
          ) : (
            usersData.map(({name, age}) => <p key={name}>{name} is {age} years old</p>)
          )
        }
      </div>
    </div>
  )   
};

export default Users;
 