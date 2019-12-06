import React from 'react';
import { Ticket } from '../models/Ticket.model';
import './Ticket.css';

const Ticket: React.FC<Ticket> = props => {
  return (
    <div className="Ticket card">
      <img src={props.carrierLogoUrl} />
    </div>
  );
};

export default Ticket;
