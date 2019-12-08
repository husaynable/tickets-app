import React from 'react';
import { TicketModel } from '../models/Ticket.model';
import './Ticket.css';

const Ticket: React.FC<TicketModel> = props => {
  return (
    <div className="Ticket card">
      <div className="Ticket__header"></div>
      <div className="Ticket__point"></div>
      <div className="Ticket__stops"></div>
      <div className="Ticket__point"></div>
    </div>
  );
};

export default Ticket;
