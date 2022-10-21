import React, { useState, useEffect } from 'react';

// router
import { useParams } from 'react-router-dom';

// css
import './ProjectPage.css';

// components
import Loading from '../layout/Loading';

const ProjectPage = (props) => {
  const data = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      //fake delay
      fetch(`http://localhost:5000/projects/${data.id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((json) => {
          setProject(json);
        })
        .catch((error) => console.log(error));
    }, 500);
  }, [data.id]);

  function toggleProjectForm() {
    setShowProjectForm((old) => !old);
  }

  return (
    <div className="project-container">
      {project.name ? (
        <div className='project-details'>
          <div className="details-container">
            <h1>Projeto: {project.name}</h1>
            <button className="btn alt-btn" onClick={toggleProjectForm}>
              {!showProjectForm ? 'Editar projeto' : 'Fechar'}
            </button>
          </div>
          <div className='service-form-container'>
            {!showProjectForm ? (
              <div className='project-info'>
                <p>Categoria: <span>{project.category.name}</span></p>
                <p>Total do orçamento: <span>R$ {project.budget}</span></p>
                <p>Total utilizado: <span>R$ {project.cost}</span></p>
              </div>
            ) : (
              <div className='project-info'>
                <p>detalhes do projeto</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProjectPage;
