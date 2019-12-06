import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import SelectListItem from './components/SelectListItem';
import { TickectsContext } from './context/Tickets.context';
import SelectList from './components/SelectList';

const App: React.FC = () => {
  const ticketsContext = useContext(TickectsContext);

  return (
    <div className="App">
      <Checkbox checked />
      <SelectList
        items={ticketsContext.stopsFilterItems}
        onSelectionChange={ticketsContext.setStopsFilterItems}
      />
    </div>
  );
};

export default App;
