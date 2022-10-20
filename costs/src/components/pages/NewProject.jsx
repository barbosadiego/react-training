import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import ProjectForm from '../project/ProjectForm';

// css
import './NewProject.css';

const NewProject = () => {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        //redirect
        navigate('/projects', { message: 'Projeto criado com sucesso!' });
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className="newproject-container">
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto" handleSubmit={createPost} />
    </section>
  );
};

export default NewProject;
