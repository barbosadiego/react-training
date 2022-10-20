import React, { useState, useEffect } from 'react';

// components
import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';

// css
import './ProjectForm.css';

const ProjectForm = ({ btnText, handleSubmit, projectData }) => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.log(error));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    // console.log(project)
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={ project.category ? project.category.id : ''}
      />
      <Submit text={btnText} />
    </form>
  );
};

export default ProjectForm;
