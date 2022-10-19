import React from 'react';

// css
import './ProjectForm.css';

const ProjectForm = () => {
  return (
    <form className='form'>
      <input type="text" placeholder="Insira o nome do projeto" />
      <input type="number" placeholder="Insira o orçamento total" />
      <select name="category_id">
        <option value=''>Selecione a categoria</option>
      </select>
      <input type="submit" value="Criar projeto" />
    </form>
  );
};

export default ProjectForm;
