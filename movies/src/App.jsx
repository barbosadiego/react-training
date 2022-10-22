import React from 'react';
import { Outlet } from 'react-router-dom';

// css
import './App.scss';

// components
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;
