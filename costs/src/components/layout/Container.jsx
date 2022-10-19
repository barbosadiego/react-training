import React from 'react';
import './Container.css';

const Container = (props) => {
  return (
    <main className={`container ${props.customClass}`}>
      {props.children}
    </main>
  );
};

export default Container;
