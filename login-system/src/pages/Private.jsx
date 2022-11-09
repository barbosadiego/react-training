import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth/AuthContext';

const Private = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Olá {user.name}, tudo bem?</h2>
    </div>
  );
};

export default Private;
