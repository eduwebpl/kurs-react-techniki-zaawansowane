import React from 'react';
import User from './User';

const UsersList = ({users}) => (
  users.length === 0 ? (
    <p>Loading users...</p>
  ) : (
      users.map(({ name, age }) => (
        <User key={name} name={name} age={age} />
      ))
  ) 
)

export default UsersList;