import React, { useState, useEffect } from 'react';

// components
import Input from '../form/Input';
import Select from '../form/Select';
import Submit from '../form/Submit';

// css
import './ProjectForm.css';

const ProjectForm = ({ btnText }) => {
  const [categories, setCategories] = useState([]);

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

  return (
    <form className="form">
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <Submit text={btnText} />
    </form>
  );
};

export default ProjectForm;
