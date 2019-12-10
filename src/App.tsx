import React, { useContext } from 'react';
import './App.css';
import { TickectsContext } from './context/Tickets.context';
import SelectList from './components/SelectList';
import AsideBlock from './UI/AsideBlock';
import CurrencyGroup from './components/CurrencyGroup';
import TicketsList from './components/TicketsList';

const App: React.FC = () => {
  const ticketsContext = useContext(TickectsContext);

  return (
    <React.Fragment>
      <header className="App__header">
        <img
          className="App__header_logo"
          src="/header_logo.png"
          alt="App Logo"
        />
      </header>
      <main className="App__main container">
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
        <TicketsList tickets={ticketsContext.tickets} />
      </main>
    </React.Fragment>
  );
};

export default App;
