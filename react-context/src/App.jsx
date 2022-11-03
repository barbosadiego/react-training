import React, { useState } from 'react';
import './App.scss';

import LoginForm from './components/LoginForm';
import User from './components/User';

const App = () => {
  const [name, setName] = useState('');

  function handleName(name) {
    setName(name);
  }

  return (
    <section className="container">
      <div>
        <User user={name} />
        <LoginForm handleName={handleName} />
      </div>
    </section>
  );
};

export default App;
