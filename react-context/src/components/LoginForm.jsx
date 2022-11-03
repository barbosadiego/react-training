import React, { useState, useContext } from 'react';
import { UserContext } from '../context/userContext';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { handleName } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    handleName({ name, email });
    // console.log({ name, email });
    // setName('');
    // setEmail('');
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input type="submit" value="login" />
    </form>
  );
};

export default LoginForm;
