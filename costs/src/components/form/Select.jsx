import React from 'react';

// css
import './Select.css';

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className="select">
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ''}
      >
        <option disabled>Selecione uma opção</option>
        {options &&
          options.map((opt) => (
            <option value={opt.id} key={opt.id}>
              {opt.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
