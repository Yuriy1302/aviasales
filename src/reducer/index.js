const reducer = (
  state = {
    filterStops: [
      { id: 1, name: 'allRoutes', title: 'Все', isChecked: true },
      { id: 2, name: 'noStops', stops: 0, title: 'Без пересадок', isChecked: true },
      { id: 3, name: 'oneStops', stops: 1, title: '1 пересадка', isChecked: true },
      { id: 4, name: 'twoStops', stops: 2, title: '2 пересадки', isChecked: true },
      { id: 5, name: 'threeStops', stops: 3, title: '3 пересадки', isChecked: true },    
    ],
    tickets: [],
    stop: false,
    error: false,
    loader: false,
    searchId: null,
  },
  action
) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return { ...state, searchId: action.searchId }
    
    case 'TICKETS_FETCH_REQUEST':
      return { filterStops: state.filterStops, tickets: state.tickets, stop: state.stop, error: false, loader: true, searchId: state.searchId }
    
    case 'TICKETS_FETCH_SUCCESS':
      return { filterStops: state.filterStops, tickets: [...state.tickets, ...action.tickets], stop: action.stop, error: false, loader: false, searchId: state.searchId };
    
    case 'TICKETS_FETCH_FAILURE':
      /* return { tickets: [...state.tickets], stop: state.stop, error: true, loader: false, searchId: state.searchId }; */
      return { ...state, error: true, loader: false };
    
    case 'SELECT_ALL_ROUTES': {
      const { filterStops } = state;
      const { isChecked } = filterStops[0];
      const newFilterStops = filterStops.map(item => ({...item, isChecked: !isChecked}));
      return { ...state, filterStops: newFilterStops };
    }
    
    case 'SELECT_TICKETS_WITHOUT_STOPS': {
      const { filterStops } = state;
      const noStops = filterStops[1];
      const newNoStops = { ...noStops, isChecked: !noStops.isChecked};
      const newFilterStops = [filterStops[0], newNoStops, ...filterStops.slice(2)];
      const checkboxes = new Set(newFilterStops.slice(1).map(item => item.isChecked));
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
        { ...state, filterStops: [ {...filterStops[0], isChecked: true}, newNoStops, ...filterStops.slice(2) ] } :
        { ...state, filterStops: [ {...filterStops[0], isChecked: false}, newNoStops, ...filterStops.slice(2) ] };
    }

    case 'SELECT_TICKETS_WITH_ONE_STOPS': {
      const { filterStops } = state;
      const oneStops = filterStops[2];
      const newOneStops = { ...oneStops, isChecked: !oneStops.isChecked};
      const newFilterStops = [ ...filterStops.slice(0, 2), newOneStops, ...filterStops.slice(3) ];
      const checkboxes = new Set(newFilterStops.slice(1).map(item => item.isChecked));
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      { ...state, filterStops: [ {...filterStops[0], isChecked: true}, ...filterStops.slice(1, 2), newOneStops, ...filterStops.slice(3) ] } :
      { ...state, filterStops: [ {...filterStops[0], isChecked: false}, ...filterStops.slice(1, 2), newOneStops, ...filterStops.slice(3) ] };
    }

    case 'SELECT_TICKETS_WITH_TWO_STOPS': {
      const { filterStops } = state;
      const twoStops = filterStops[3];
      const newTwoStops = { ...twoStops, isChecked: !twoStops.isChecked};
      const newFilterStops = [ ...filterStops.slice(0, 3), newTwoStops, filterStops[4] ];
      const checkboxes = new Set(newFilterStops.slice(1).map(item => item.isChecked));
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      { ...state, filterStops: [ {...filterStops[0], isChecked: true}, ...filterStops.slice(1, 3), newTwoStops, ...filterStops.slice(4) ] } :
      { ...state, filterStops: [ {...filterStops[0], isChecked: false}, ...filterStops.slice(1, 3), newTwoStops, ...filterStops.slice(4) ] };
    }

    case 'SELECT_TICKETS_WITH_THREE_STOPS': {
      const { filterStops } = state;
      const threeStops = filterStops[4];
      const newThreeStops = { ...threeStops, isChecked: !threeStops.isChecked};
      const newFilterStops = [ ...filterStops.slice(0, 4), newThreeStops ];
      const checkboxes = new Set(newFilterStops.slice(1).map(item => item.isChecked));
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      { ...state, filterStops: [ {...filterStops[0], isChecked: true}, ...filterStops.slice(1, 4), newThreeStops ] } :
      { ...state, filterStops: [ {...filterStops[0], isChecked: false}, ...filterStops.slice(1, 4), newThreeStops ] };
    }

    default:
      return state;
  };
};

export default reducer;