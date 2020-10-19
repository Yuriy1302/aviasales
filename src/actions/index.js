export const fetchSearchId = () => {
  return async (dispatch) => {
    const response = await fetch('https://front-test.beta.aviasales.ru/search');
    const { searchId } = await response.json();
    console.log('searchId in actions', searchId);
    dispatch({
      type: 'GET_SEARCH_ID',
      searchId
    });
    dispatch(fetchTickets(searchId));
  };
};

export const fetchTickets = (searchId) => {
  return async (dispatch) => {
    dispatch({ type: 'TICKETS_FETCH_REQUEST' });
    try {
      const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
      const { tickets, stop } = await response.json();
      // console.log('Tickets -> ', tickets);
      dispatch({
        type: 'TICKETS_FETCH_SUCCESS',
        tickets,
        stop
      });
      dispatch(sortByPrice());
    } catch (err) {
      dispatch({ type: 'TICKETS_FETCH_FAILURE' });
      console.error('Возникда ошибки: ', err);
      throw err;
    };
  };
};


/* Сортировка по цене */
export const sortByPrice = () => {
  console.log('Click action SortByPrice');
  return { type: 'SORT_BY_PRICE' }
};

/* Сортировка по времени в пути */
export const sortByDuration = () => {
  console.log('Click action SortByDuration');
  return { type: 'SORT_BY_DURATION' }
};




export const allRoutes = (event) => {
  /* const value = event.target.value;
  console.log('value ', value); */
  return { type: 'SELECT_ALL_ROUTES' };
};

export const noStops = () => ({
  type: 'SELECT_TICKETS_WITHOUT_STOPS'
});

export const oneStops = () => ({
  type: 'SELECT_TICKETS_WITH_ONE_STOPS'
});

export const twoStops = () => ({
  type: 'SELECT_TICKETS_WITH_TWO_STOPS'
});

export const threeStops = () => ({
  type: 'SELECT_TICKETS_WITH_THREE_STOPS'
});




