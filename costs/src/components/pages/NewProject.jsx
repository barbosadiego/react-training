import React from 'react';

// components
import ProjectForm from '../project/ProjectForm';

// css
import './NewProject.css';

const NewProject = (props) => {
  return (
    <section className='newproject-container'>
      <h1>Criar projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm btnText="Criar Projeto"/>
    </section>
  );
};

export default NewProject;
