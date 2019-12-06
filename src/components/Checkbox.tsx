import React from 'react';
import './Checkbox.css';

const Checkbox: React.FC<propTypes> = ({ checked }) => {
  const classNames = `Checkbox${checked ? ' checked' : ''}`;

  return <span className={classNames}></span>;
};

export default Checkbox;

type propTypes = { checked?: boolean };
