import React, { useState, useEffect } from 'react';

// router
import { useParams } from 'react-router-dom';

// css
import './ProjectPage.css';

// components
import Loading from '../layout/Loading';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';

const ProjectPage = (props) => {
  const data = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [msg, setMsg] = useState();
  const [type, setType] = useState();

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

  function editPost(project) {

    if(project.budget < project.cost){
      setMsg('O orçamento não pode ser menor que o custo do projeto!');
      setType('error');
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers:{
        'Content-type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((json) => {
        setProject(json);
        setShowProjectForm(false);
        setMsg('Projeto atualizado!');
        setType('sucess');
      })
      .catch((error) => console.log(error))
    ;
  }

  return (
    <div className="project-container">
      {project.name ? (
        <div className="project-details">
          {msg && <Message type={type} msg={msg}/>}
          <div className="details-container">
            <h1>Projeto: {project.name}</h1>
            <button className="btn alt-btn" onClick={toggleProjectForm}>
              {!showProjectForm ? 'Editar projeto' : 'Fechar'}
            </button>
          </div>
          <div className="service-form-container">
            {!showProjectForm ? (
              <div className="project-info">
                <p>
                  Categoria: <span>{project.category.name}</span>
                </p>
                <p>
                  Total do orçamento: <span>R$ {project.budget}</span>
                </p>
                <p>
                  Total utilizado: <span>R$ {project.cost}</span>
                </p>
              </div>
            ) : (
              <div className="project-info">
                <ProjectForm
                  btnText={'Concluir edição'}
                  handleSubmit={editPost}
                  projectData={project}
                />
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
