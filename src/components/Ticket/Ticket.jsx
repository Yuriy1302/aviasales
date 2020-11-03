import React from "react";
import PropTypes from "prop-types";

import "./Ticket.scss";

const Ticket = (props) => {
  const { ticket } = props;
  const { carrier, price, segments } = ticket;
  const [segmentOneWay, segmentToBack] = segments;

  const suffix = (index) => {
    if (index === 0) {
      return "пересадок";
    }
    if (index === 1) {
      return "пересадка";
    }
    return "пересадки";
  };

  const transformDuration = (duration) => {
    let hour = Math.floor(duration / 60);
    if (hour < 10) hour = `0${hour}`;
    let min = duration - hour * 60;
    if (min < 10) min = `0${min}`;
    return `${hour}ч ${min}м`;
  };

  return (
    <div className="ticket-card">
      <div className="ticket-card--header">
        <span>{price} P</span>
        <img
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt={`Aviacompany ${carrier}`}
        />
      </div>
      <div className="information">
        <div className="rout">
          <div className="rout-there f-dir">
            <span className="title-mark">
              {segmentOneWay.origin} - {segmentOneWay.destination}
            </span>
            <span>10:45 - 08:00</span>
          </div>
          <div className="rout-back f-dir">
            <span className="title-mark">
              {segmentToBack.origin} - {segmentToBack.destination}
            </span>
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
            <span className="title-mark">
              {segmentOneWay.stops.length} {suffix(segmentOneWay.stops.length)}
            </span>
            <div>
              {segmentOneWay.stops.length > 0 ? (
                segmentOneWay.stops.map((item) => (
                  <span key={item}>{item} </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>
          </div>
          <div className="transfer-back f-dir">
            <span className="title-mark">
              {segmentToBack.stops.length} {suffix(segmentToBack.stops.length)}
            </span>
            <div>
              {segmentToBack.stops.length > 0 ? (
                segmentToBack.stops.map((item) => (
                  <span key={item}>{item} </span>
                ))
              ) : (
                <span>-</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.object.isRequired,
};

export default Ticket;
