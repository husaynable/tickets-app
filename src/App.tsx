import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkbox from './components/Checkbox';
import SelectListItem from './components/SelectListItem';
import { TickectsContext } from './context/Tickets.context';
import SelectList from './components/SelectList';
import AsideBlock from './UI/AsideBlock';

const App: React.FC = () => {
  const ticketsContext = useContext(TickectsContext);

  return (
    <div className="App">
      <AsideBlock header="количество пересадок">
        <SelectList
          listHeader="количество пересадок"
          items={ticketsContext.stopsFilterItems}
          onSelectionChange={ticketsContext.setStopsFilterItems}
        />
      </AsideBlock>
    </div>
  );
};

export default App;
