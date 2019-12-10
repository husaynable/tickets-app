import React from 'react';
import { TicketModel } from '../models/Ticket.model';
import './Ticket.css';

const Ticket: React.FC<TicketModel> = props => (
  <div className="Ticket card">
    <div className="Ticket__header">
      <img
        className="Ticket__header_logo"
        src={props.carrierLogoUrl}
        alt="Carrier Logo"
      />
      <button className="Ticket__header_button">
        Купить
        <br />
        за {props.price}
      </button>
    </div>
    <div className="Ticket__point">
      <span className="Ticket__point_time">{props.departureTime}</span>
      <span className="Ticket__point_name">{props.originName}</span>
      <span className="Ticket__point_date">{props.departureDate}</span>
    </div>
    <div className="Ticket__stops">
      {props.stops} {getTextByStopsCount(props.stops)}
      <div className="flying-airplane-wrapper">
        <span className="line"></span>
        <i className="material-icons plane-icon">airplanemode_active</i>
      </div>
    </div>
    <div className="Ticket__point right-align">
      <span className="Ticket__point_time">{props.arrivalTime}</span>
      <span className="Ticket__point_name">{props.destinationName}</span>
      <span className="Ticket__point_date">{props.arrivalDate}</span>
    </div>
  </div>
);

export default Ticket;

function getTextByStopsCount(stopsCount: number): string {
  let text = 'пересад';
  if (stopsCount === 0) {
    return text + 'ок';
  }
  if (stopsCount === 1) {
    return text + 'ка';
  }
  if (stopsCount >= 2 && stopsCount <= 4) {
    return text + 'ки';
  }

  return text + 'ок';
}
