import React from "react";

import TicketForm from "../TicketForm";

const TicketsList = (props) => {

  const { sortTickets } = props;

  // console.log('tickets ', tickets);

  return (
    <>
      {
        sortTickets.map((ticket, index) => <TicketForm ticket={ticket} key={index} />)
      }
    </>
  );
};

export default TicketsList;
