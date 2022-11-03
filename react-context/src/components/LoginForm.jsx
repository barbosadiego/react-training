import React from 'react';

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
      </div>
    </form>
  );
};

export default LoginForm;
