import React, { useState } from 'react';
// import { SelectItem } from '../models/select-item';

export const TickectsContext = React.createContext({
  stopsFilterItems: [],
  setStopsFilterItems: items => {},

  selectedCurrency: '',
  setSelectedCurrency: currency => {}
});

const STOPS_ITEMS = [
  {
    id: 0,
    label: 'Без пересадок',
    isSelected: false
  },
  {
    id: 1,
    label: '1 пересадка',
    isSelected: false
  },
  {
    id: 2,
    label: '2 пересадки',
    isSelected: false
  },
  {
    id: 3,
    label: '3 пересадки',
    isSelected: false
  }
];

const TicketsContextProvider = ({ children }) => {
  const [stopsFilterItems, setStopsFilterItems] = useState(STOPS_ITEMS);
  const [selectedCurrency, setSelectedCurrency] = useState('RUB');

  return (
    <TickectsContext.Provider
      value={{
        stopsFilterItems,
        setStopsFilterItems,
        selectedCurrency,
        setSelectedCurrency
      }}
    >
      {children}
    </TickectsContext.Provider>
  );
};

export default TicketsContextProvider;
// type contextTypes = { stopsFilterItems: SelectItem[] };
