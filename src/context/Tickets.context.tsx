import React, { useState, useEffect } from 'react';
import { SelectItem } from '../models/select-item';
import { TicketModel } from '../models/Ticket.model';

export const TickectsContext = React.createContext<contextTypes>({
  stopsFilterItems: [] as SelectItem[],
  setStopsFilterItems: (items: SelectItem[]) => {},

  selectedCurrency: '',
  setSelectedCurrency: (currency: string) => {},

  tickets: [] as TicketModel[]
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

const TicketsContextProvider: React.FC = ({ children }) => {
  const [stopsFilterItems, setStopsFilterItems] = useState(STOPS_ITEMS);
  const [selectedCurrency, setSelectedCurrency] = useState<string>('RUB');
  const [tickets, setTickets] = useState<TicketModel[]>([]);

  useEffect(() => {
    fetch('../tickets.json')
      .then(res => res.json())
      .then((t: { tickets: any[] }) => setTickets(t.tickets.map(ticketMapper)));
  }, []);

  return (
    <TickectsContext.Provider
      value={{
        stopsFilterItems,
        setStopsFilterItems,
        selectedCurrency,
        setSelectedCurrency,
        tickets
      }}
    >
      {children}
    </TickectsContext.Provider>
  );
};

export default TicketsContextProvider;

type contextTypes = {
  stopsFilterItems: SelectItem[];
  setStopsFilterItems: (items: SelectItem[]) => void;
  selectedCurrency: string;
  setSelectedCurrency: (currency: string) => void;
  tickets: TicketModel[];
};

function ticketMapper(t: any): TicketModel {
  return {
    originName: t['origin'] + ', ' + t['origin_name'],
    destinationName: t['destionation'] + ', ' + t['destionation_name'],
    departureDate: t['departure_date'],
    departureTime: t['departure_time'],
    arrivalDate: t['arrival_date'],
    arrivalTime: t['arrivat_time'],
    carrierLogoUrl: carrierLogoByCode[t['carrier']],
    stops: t['stops'],
    price: t['price']
  };
}

const carrierLogoByCode: { [code: string]: string } = {};
