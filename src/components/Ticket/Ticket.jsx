import React from "react";

import "./Ticket.scss";

import s7 from "../../images/s7logo.png";

const Ticket = () => {
  return (
    <div className="ticket-card">
      <div className="ticket-card--header">
        <span>13 400 P</span>
        <img src={s7} alt="S7 logo" />
      </div>
      <div className="information">
        <div className="rout">
          <div className="rout-there f-dir">
            <span className="title-mark">MOW - HKT</span>
            <span>10:45 - 08:00</span>
          </div>
          <div className="rout-back f-dir">
            <span className="title-mark">HKT - MOW</span>
            <span>11:20 - 00:50</span>
          </div>
        </div>
        <div className="intransit">
          <div className="intransit-there f-dir">
            <span className="title-mark">В пути</span>
            <span>21ч 15м</span>
          </div>
          <div className="intransit-back f-dir">
            <span className="title-mark">В пути</span>
            <span>13ч 30м</span>
          </div>
        </div>
        <div className="transfer">
          <div className="transfer-there f-dir">
            <span className="title-mark">2 пересадки</span>
            <div>
              <span>HKG, </span>
              <span>JNB</span>
            </div>
          </div>
          <div className="transfer-back f-dir">
            <span className="title-mark">1 пересадка</span>
            <div>
              <span>HKG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
