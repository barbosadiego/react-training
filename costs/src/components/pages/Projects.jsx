import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// components
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

// css
import './Projects.css';

const Projects = () => {

  const [projects, setProjects] = useState([]);

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setProjects(json)
      })
      .catch((error) => console.log(error))
    ;
  }, [])

  return (
    <>
      <div className="project-container">
        <div className='title-container'>
          <h1>Meus Projetos</h1>
          <LinkButton to="/new-project" text="Criar Projeto" />
        </div>
        {message && <Message msg={message} type="sucess" />}
        <div className='project-list'>
          {projects.length > 0 && (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category}
                id={project.id}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
