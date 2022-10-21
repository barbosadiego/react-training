import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// components
import Message from '../layout/Message';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';
import Loading from '../layout/Loading';

// css
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectMessage] = useState('');

  const location = useLocation();
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => { // fake delay
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProjects(json);
          setRemoveLoading(true);
        })
        .catch((error) => console.log(error));
    }, 500);
  }, []);

  function removeProject(id) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage('Projeto removido com sucesso!');
      })
      .catch((error) => console.log(error));
    ;
  }

  return (
    <>
      <div className="project-container">
        <div className="title-container">
          <h1>Meus Projetos</h1>
          <LinkButton to="/new-project" text="Criar Projeto" />
        </div>
        {message && <Message msg={message} type="sucess" />}
        {projectMessage && <Message msg={projectMessage} type="sucess" />}
        <div className="project-list">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                name={project.name}
                budget={project.budget}
                category={project.category}
                id={project.id}
                handleRemove={removeProject}
              />
            ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 && (
            <p>Não há projetos cadastrados</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
