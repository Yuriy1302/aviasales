export const fetchSearchId = () => {
  return async (dispatch) => {
    const response = await fetch('https://front-test.beta.aviasales.ru/search');
    const { searchId } = await response.json();
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
    while (true) {
      try {
        const response = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        
        if (response.status === 500) {
          dispatch(fetchTickets(searchId))
        };
        const data = await response.json();
        
        dispatch({
          type: 'TICKETS_FETCH_SUCCESS',
          tickets: data.tickets,
          stop: data.stop
        });
        
        if (data.stop) {
          return;
        }
      } catch (err) {
        dispatch({ type: 'TICKETS_FETCH_FAILURE' });
        console.error('Возникла ошибки: ', err);
        throw err;
      };
      
    }

  };
};

/* Сортировка по цене */
export const sortByPrice = () => ({
  type: 'SORT_BY_PRICE'
});

/* Сортировка по времени в пути */
export const sortByDuration = () => ({
  type: 'SORT_BY_DURATION'
});

/* Реакция на фильтры */
export const allRoutes = () => ({
  type: 'SELECT_ALL_ROUTES'
});

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




