import React, { useState, useEffect } from 'react';
import { SelectItem } from '../models/select-item';
import { TicketModel } from '../models/Ticket.model';
import { getDate } from '../helpers/dateTime';

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
    fetch('/tickets.json')
      .then((res: Response) => res.json())
      .then((t: { tickets: any[] }) => t.tickets.map(ticketMapper))
      .then(tickets => {
        console.log(tickets);
        setTickets(tickets);
      });
  }, [setTickets]);

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
    destinationName: t['destination'] + ', ' + t['destination_name'],
    departureDate: getDate(t['departure_date'], t['departure_time']),
    departureTime: t['departure_time'],
    arrivalDate: getDate(t['arrival_date'], t['arrival_time']),
    arrivalTime: t['arrival_time'],
    carrierLogoUrl: carrierLogoByCode[t['carrier']],
    stops: t['stops'],
    price: t['price']
  };
}

const carrierLogoByCode: { [code: string]: string } = {};
