import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';

const User = () => {
  const { name } = useContext(UserContext);

  return (
    <>
      <h1>Olá, {name}</h1>
    </>
  );
};

export default User;
