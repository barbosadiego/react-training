import React from 'react';
import { useLocation } from 'react-router-dom';

// components
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';

// css
import './Projects.css';

const Projects = () => {
  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  return (
    <>
      <div className="project-container">
        <div className='title-container'>
          <h1>Meus Projetos</h1>
          <LinkButton to="/new-project" text="Criar Projeto" />
        </div>
        {message && <Message msg={message} type="sucess" />}
        <div>
          <p>projetos...</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
