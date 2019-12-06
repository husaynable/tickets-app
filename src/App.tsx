import React, { useContext } from 'react';
import './App.css';
import { TickectsContext } from './context/Tickets.context';
import SelectList from './components/SelectList';
import AsideBlock from './UI/AsideBlock';
import CurrencyGroup from './components/CurrencyGroup';

const App: React.FC = () => {
  const ticketsContext = useContext(TickectsContext);

  return (
    <div className="App">
      <AsideBlock>
        <CurrencyGroup
          selectedCurrency={ticketsContext.selectedCurrency}
          setSelectedCurrency={ticketsContext.setSelectedCurrency}
        />
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
