import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link to={`/users/${user.id}`}>
          <h1>{user.id}</h1>
        </Link>
      ))}
    </div>
  );
};
