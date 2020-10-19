import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Ticket from '../Ticket';

const mapStateToProps = (state) => {
  const { fetchTickets, tickets, searchId, filterStops } = state;
  return {
    fetchTickets,
    tickets,
    searchId,
    filterStops
  }
};

const TicketsList = (props) => {

  const { tickets, filterStops } = props;
  const checkedList = new Set(filterStops.map(item => item.isChecked));
  
  if (checkedList.size === 1 && checkedList.has(false)) {
    return (
      <h2>Не указано количество пересадок!</h2>
    );
  };

  return (
    <>
      {
        /* sortTickets.map((ticket, index) => <TicketForm ticket={ticket} key={index} />) */
        tickets.map((ticket, index) => <Ticket ticket={ticket} key={index} />)
      }
    </>
  );
};

export default connect(mapStateToProps, actions)(TicketsList);
