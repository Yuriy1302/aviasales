import React from "react";
import PropTypes from "prop-types";
import { uniqueId } from "lodash";
import { connect } from "react-redux";

import Ticket from "../Ticket";
import ErrorIndicator from "../ErrorIndicator";

import * as actions from "../../actions";

const mapStateToProps = (state) => {
  const { filterStops, tickets, error, cheap } = state;
  return {
    filterStops,
    tickets,
    error,
    cheap,
  };
};

const TicketsList = (props) => {
  const { tickets, filterStops, error, cheap } = props;
  if (error) {
    return <ErrorIndicator />;
  }

  const checkedList = new Set(filterStops.map((item) => item.isChecked));

  if (checkedList.size === 1 && checkedList.has(false)) {
    return <h2>Не указано количество пересадок!</h2>;
  }

  let sortedTickets = [];
  const checkedFilters = filterStops
    .slice(1)
    .filter((item) => item.isChecked)
    .map((item) => item.stops);

  if (cheap) {
    sortedTickets = tickets
      .filter((item) => {
        const stops =
          item.segments[0].stops.length + item.segments[1].stops.length;
        return checkedFilters.includes(stops) ? item : null;
      })
      .sort((prev, next) => prev.price - next.price)
      .slice(0, 5);
  } else {
    sortedTickets = tickets
      .filter((item) => {
        const stops =
          item.segments[0].stops.length + item.segments[1].stops.length;
        return checkedFilters.includes(stops) ? item : null;
      })
      .sort(
        (prev, next) =>
          prev.segments[0].duration +
          prev.segments[1].duration -
          (next.segments[0].duration + next.segments[1].duration)
      )
      .slice(0, 5);
  }

  return (
    <>
      {sortedTickets.length !== 0 ? (
        sortedTickets.map((ticket) => (
          <Ticket ticket={ticket} key={uniqueId()} />
        ))
      ) : (
        <h2>Рейсов, подходящих под заданные фильтры, не найдено!</h2>
      )}
    </>
  );
};

TicketsList.propTypes = {
  filterStops: PropTypes.arrayOf(PropTypes.object).isRequired,
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.bool.isRequired,
  cheap: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, actions)(TicketsList);
