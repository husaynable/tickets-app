import React from 'react';
import './CurrencyGroup.css';
import ButtonGroup from '../UI/ButtonGroup';

const currencies = ['RUB', 'USD', 'EUR'];

const CurrencyGroup: React.FC<propTypes> = ({
  selectedCurrency,
  setSelectedCurrency
}) => {
  return (
    <div className="CurrencyGroup">
      <h4 className="CurrencyGroup__header">валюта</h4>
      <ButtonGroup>
        {currencies.map(curr => (
          <button
            key={curr}
            onClick={() => setSelectedCurrency(curr)}
            className={selectedCurrency === curr ? 'selected' : ''}
          >
            {curr}
          </button>
        ))}
      </ButtonGroup>
    </div>
  );
};

export default CurrencyGroup;

type propTypes = {
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
};
