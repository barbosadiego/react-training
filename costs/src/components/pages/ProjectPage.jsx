import React, { useState, useEffect } from 'react';
import { parse, v4 as uuidv4 } from 'uuid';

// router
import { useParams } from 'react-router-dom';

// css
import './ProjectPage.css';

// components
import Loading from '../layout/Loading';
import ProjectForm from '../project/ProjectForm';
import Message from '../layout/Message';
import ServiceForm from '../services/ServiceForm';
import ServiceCard from '../services/ServiceCard';

const ProjectPage = (props) => {
  const data = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
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
          setServices(json.services);
        })
        .catch((error) => console.log(error));
    }, 500);
  }, [data.id]);

  function createService() {
    setMsg('');

    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMsg('Orçamento ultrapassado, verifique o valor do serviço.');
      setType('error');
      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((json) => {
        setShowServiceForm(false)
      })
      .catch((error) => console.log(error));
  }

  function removeService(){

  }

  function toggleProjectForm() {
    setShowProjectForm((old) => !old);
  }

  function toggleServiceForm() {
    setShowServiceForm((old) => !old);
  }

  function editPost(project) {
    setMsg('');

    if (project.budget < project.cost) {
      setMsg('O orçamento não pode ser menor que o custo do projeto!');
      setType('error');
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: 'PATCH',
      headers: {
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
      .catch((error) => console.log(error));
  }

  return (
    <div className="project-container">
      {project.name ? (
        <div className="project-details">
          {msg && <Message type={type} msg={msg} />}
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
          <div className="service-form-container">
            <h2>Adicione um serviço:</h2>
            <button className="btn" onClick={toggleServiceForm}>
              {!showServiceForm ? 'Adicionar serviço' : 'Fechar'}
            </button>
          </div>
          {showServiceForm && (
            <ServiceForm
              handleSubmit={createService}
              textBtn="Adicionar Serviço"
              projectData={project}
            />
          )}
          <h2>Serviços</h2>
          {services.length > 0 && (
            <div className="container start">
              {services.map((service) => (
                <ServiceCard
                  id={service.id}
                  name={service.name}
                  cost={service.cost}
                  description={service.description}
                  key={service.id}
                  handleRemove={removeService}
                />
              ))}
            </div>
          )}
          {services.length === 0 && (
            <div>
              <p>Não há serviços a exibir</p>
            </div>
          )}
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProjectPage;
