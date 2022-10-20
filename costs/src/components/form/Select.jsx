import React from 'react';

// css
import './Select.css';

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className='select'>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
};

export default Select;
