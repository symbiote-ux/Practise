import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const UserDetail = () => {
  const [user, setUser] = useState({});
  const params = useParams();

  const getUserDetail = async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${params.id}`
    );
    setUser(data);
  };

  useEffect(() => {
    getUserDetail();
  }, [params.id]);

  return (
    <div>
      <h1>UserDetail</h1>
      <p>{user.id}</p>
      <p>{user.title}</p>
      <p>{String(user.completed)}</p>
    </div>
  );
};
