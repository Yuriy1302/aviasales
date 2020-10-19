import React from "react";

import "./Ticket.scss";

const Ticket = (props) => {

  const word = (index) => {
    if (index === 0) {
      return 'пересадок';
    } else if (index === 1) {
      return 'пересадка';
    } else {
      return 'пересадки';
    }
  }

  const transformDuration = (duration) => {
    let hour = Math.floor(duration / 60);
    if (hour < 10) hour = `0${hour}`;
    let min = duration - hour * 60;
    if (min < 10) min = `0${min}`;
    return `${hour}ч ${min}м`;
  }
 

  const { ticket } = props;
  // console.log('ticket in TicketForm = ', ticket);

  const { carrier, price, segments } = ticket;

  const [ segmentOneWay, segmentToBack ] = segments;
  
  // console.log('segmentOneWay -> ', segmentOneWay);
  // console.log('segmentToBack -> ', segmentToBack);

  return (
    <div className="ticket-card">
      <div className="ticket-card--header">
        <span>{price} P</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="S7 logo" />
      </div>
      <div className="information">
        <div className="rout">
          <div className="rout-there f-dir">
            <span className="title-mark">{segmentOneWay.origin} - {segmentOneWay.destination}</span>
            <span>10:45 - 08:00</span>
          </div>
          <div className="rout-back f-dir">
            <span className="title-mark">{segmentToBack.origin} - {segmentToBack.destination}</span>
            <span>11:20 - 00:50</span>
          </div>
        </div>
        <div className="intransit">
          <div className="intransit-there f-dir">
            <span className="title-mark">В пути</span>
            <span>{transformDuration(segmentOneWay.duration)}</span>
          </div>
          <div className="intransit-back f-dir">
            <span className="title-mark">В пути</span>
            <span>{transformDuration(segmentToBack.duration)}</span>
          </div>
        </div>
        <div className="transfer">
          <div className="transfer-there f-dir">
            <span className="title-mark">{segmentOneWay.stops.length} {word(segmentOneWay.stops.length)}</span>
            <div>
              { segmentOneWay.stops.length > 0
                ? segmentOneWay.stops.map((item, index) => <span key={index}>{item} </span>)
                : <span>-</span>  
              }
            </div>
          </div>
          <div className="transfer-back f-dir">
            <span className="title-mark">{segmentToBack.stops.length} {word(segmentToBack.stops.length)}</span>
            <div>
              { segmentToBack.stops.length > 0
                ? segmentToBack.stops.map((item, index) => <span key={index}>{item} </span>)
                : <span>-</span>  
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
