import React from 'react';

// css
import '../project/ProjectCard.css';

// icons
import { BsFillTrashFill } from 'react-icons/bs';

const ServiceCard = ({ id, name, cost, description, handleRemove }) => {
  function remove(e) {
    e.preventDefault();
    handleRemove(id, cost);
  }

  return (
    <div className="project-card">
      <h4>{name}</h4>
      <p>
        <span>Custo total:</span> R$ {cost}
      </p>
      <p>{description}</p>
      <div className="project-card-actions">
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
