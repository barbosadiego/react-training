import React, { useState } from 'react';

// css
import '../project/ProjectForm.css';

// components
import Input from '../form/Input';
import Submit from '../form/Submit';

const ServiceForm = ({ handleSubmit, textBtn, projectData }) => {

  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Nome do serviço"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do serviço"
        name="description"
        placeholder="Descreva o serviço"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo do serviço"
        name="cost"
        placeholder="Insira o valor total do serviço"
        handleOnChange={handleChange}
      />
      <Submit text={textBtn} />
    </form>
  );
};

export default ServiceForm;
