import React, { useState } from 'react';
import './CurrencyGroup.css';
import ButtonGroup from './ButtonGroup';

const currencies = ['RUB', 'USD', 'EUR'];

const CurrencyGroup: React.FC = ({ children }) => {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="CurrencyGroup">
      <h4>валюта</h4>
      <ButtonGroup>
        {currencies.map((curr, i) => (
          <button
            onClick={() => setSelected(i)}
            className={selected === i ? 'selected' : ''}
          >
            {curr}
          </button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default CurrencyGroup;
