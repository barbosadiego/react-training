import React from 'react';
import './App.scss';

import LoginForm from './components/LoginForm';
import User from './components/User';

const App = () => {
  return (
    <section className="container">
      <div>
        <User user="diego" />
        <LoginForm />
      </div>
    </section>
  );
};

export default App;
