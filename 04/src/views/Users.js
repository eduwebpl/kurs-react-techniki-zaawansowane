import React, { useEffect, useState } from "react";
import axios from 'axios';

const Users = () => {
  const [usersData, setUsersData] = useState([]);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get('http://www.mocky.io/v2/5d1bb9033400003700000934?mocky-delay=300ms');
        
        setUsersData(data);
      }
      catch (err) {
        console.log(err);
      }
      
    }
    fetchUsers();
  });
  
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
 