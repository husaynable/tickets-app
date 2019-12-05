import React from 'react';
import './Checkbox.css';

const Checkbox: React.FC<propTypes> = ({ name, checked, label }) => {
  return (
    <label className="Checkbox">
      <input type="checkbox" name={name} checked={checked} />;
      <span className="checkmark"></span>
      {label}
    </label>
  );
};

export default Checkbox;

type propTypes = { name: string; checked: boolean; label: string };
