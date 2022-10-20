import React from 'react';
import { Link } from 'react-router-dom';

// css
import './ProjectCard.css';

//icons
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
  return (
    <div className="project-card">
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R$ {budget}
      </p>
      <p className="category-text">
        <span className={category.name.toLowerCase()}></span>
        {category.name}
      </p>
      <div className='project-card-actions'>
        <Link to='/'>
          <BsPencil /> Editar
        </Link>
        <button>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
