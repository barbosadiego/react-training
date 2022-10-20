import React from 'react';
import { useLocation } from 'react-router-dom';

// components
import Message from '../layout/Message';

const Projects = () => {
  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  return (
    <>
      <h2>projects</h2>
      {message && <Message msg={message} type="sucess" />}
    </>
  );
};

export default Projects;
