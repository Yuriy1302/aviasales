import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import ErrorIndicator from '../ErrorIndicator';
import Ticket from '../Ticket';

const mapStateToProps = (state) => {
  const { filterStops, fetchTickets, tickets, /* sortedTickets, */ searchId, loader, error, cheap } = state;
  return {
    filterStops,
    fetchTickets,
    tickets,
    /* sortedTickets, */
    searchId,
    filterStops,
    loader,
    error,
    cheap,
  }
};

const TicketsList = (props) => {

  const { tickets, filterStops, error, cheap } = props;

  if (error) {
    return <ErrorIndicator />
  }

  const checkedList = new Set(filterStops.map(item => item.isChecked));
  
  if (checkedList.size === 1 && checkedList.has(false)) {
    return (
      <h2>Не указано количество пересадок!</h2>
    );
  };

  
  /* Сортировка по цене */
  /* case 'SORT_BY_PRICE': {
    
    const { tickets } = state;
    const sortedTickets = tickets.sort((a, b) => a.price - b.price).slice(0, 5);
    console.log('sortedTickets by Price in reducer', sortedTickets);
    return { ...state, sortedTickets: sortedTickets };
  } */

  /* Сортировка по времени в пути */
  /* case 'SORT_BY_DURATION': {
    
    const { tickets } = state;
    const sortedTickets = tickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)).slice(0, 5);
    console.log('sortedTickets by Duration in reducer', sortedTickets);
    return { ...state, sortedTickets: sortedTickets };
  } */

  let sortedTickets = [];
  const checkedFilters = filterStops.slice(1)
    .filter(item => item.isChecked)
    .map(item => item.stops);
  /* console.log('filterStops: ', filterStops); */
  // console.log('checkedFilters: ', checkedFilters);

  /* if (cheap) {
    sortedTickets = tickets.filter(item => {
      const stops = item.segments[0].stops.length + item.segments[1].stops.length;
      if (checkedFilters.includes(stops)) return item;
    })    
    .sort((a, b) => a.price - b.price).slice(0, 5);
  } else {
    sortedTickets = tickets.sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)).slice(0, 5);
  }
 */

  if (cheap) {
    sortedTickets = tickets.filter(item => {
      const stops = item.segments[0].stops.length + item.segments[1].stops.length;
      if (checkedFilters.includes(stops)) return item;
    })
    .sort((a, b) => a.price - b.price).slice(0, 5);
  } else {
    sortedTickets = tickets.filter(item => {
      const stops = item.segments[0].stops.length + item.segments[1].stops.length;
      if (checkedFilters.includes(stops)) return item;
    }).sort((a, b) => (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration)).slice(0, 5);
  }
  




  // console.log('sortedTickets in TicketsList: ', sortedTickets);

  return (
    <>
      {
        /* sortTickets.map((ticket, index) => <TicketForm ticket={ticket} key={index} />) */
        sortedTickets.length !== 0 ? sortedTickets.map((ticket, index) => <Ticket ticket={ticket} key={index} />) : <h2>Рейсов, подходящих под заданные фильтры, не найдено~!</h2>
      }
    </>
  );
};

export default connect(mapStateToProps, actions)(TicketsList);
