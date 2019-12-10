import React from 'react';
import { TicketModel } from '../models/Ticket.model';
import Ticket from './Ticket';

const TicketsList: React.FC<propTypes> = ({ tickets }) => {
  return (
    <div className="TicketsList">
      {tickets.map(ticket => (
        <Ticket {...ticket} key={ticket.departureTime + ticket.arrivalTime} />
      ))}
    </div>
  );
};

export default TicketsList;

type propTypes = { tickets: TicketModel[] };
