import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Ticket from '../Ticket';

const mapStateToProps = (state) => {
  const { fetchTickets, tickets, sortedTickets, searchId, filterStops } = state;
  return {
    fetchTickets,
    /* tickets, */
    sortedTickets,
    searchId,
    filterStops
  }
};

const TicketsList = (props) => {

  const { tickets, sortedTickets, filterStops } = props;
  const checkedList = new Set(filterStops.map(item => item.isChecked));
  
  if (checkedList.size === 1 && checkedList.has(false)) {
    return (
      <h2>Не указано количество пересадок!</h2>
    );
  };

  console.log('sortedTickets in TicketsList: ', sortedTickets);

  return (
    <>
      {
        /* sortTickets.map((ticket, index) => <TicketForm ticket={ticket} key={index} />) */
        sortedTickets.length !== 0 ? sortedTickets.map((ticket, index) => <Ticket ticket={ticket} key={index} />) : <h1>Нет билетов</h1>
      }
    </>
  );
};

export default connect(mapStateToProps, actions)(TicketsList);
