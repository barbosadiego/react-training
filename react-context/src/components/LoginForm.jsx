import React, { useState } from 'react';

const LoginForm = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="form">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" />
      <input type="submit" value="login" />
    </form>
  );
};

export default LoginForm;
