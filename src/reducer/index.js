const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ALL_ROUTES': {
      // console.log('There is contact -> ALL ROUTES');
      const { isChecked } = state[0];
      // console.log(!isChecked);
      const newState = state.map(item => ({...item, isChecked: !isChecked}));
      return newState;
    }
    case 'SELECT_TICKETS_WITHOUT_STOPS': {
      // console.log('There is contact -> NO STOPS');
      const noStops = state[1];
      const newNoStops = { ...noStops, isChecked: !noStops.isChecked};

      const newState = [ state[0], newNoStops, ...state.slice(2) ];
      
      const checkboxes = new Set(newState.slice(1).map(item => item.isChecked));
      // console.log(checkboxes);
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      [ {...state[0], isChecked: true}, newNoStops, ...state.slice(2) ] :
      [ {...state[0], isChecked: false}, newNoStops, ...state.slice(2) ];
      
      // return newState;

      
    }
    case 'SELECT_TICKETS_WITH_ONE_STOPS': {
      // console.log('There is contact -> ONE STOPS');
      const oneStops = state[2];
      const newOneStops = { ...oneStops, isChecked: !oneStops.isChecked};
      const newState = [ ...state.slice(0, 2), newOneStops, ...state.slice(3) ];

      const checkboxes = new Set(newState.slice(1).map(item => item.isChecked));
      //console.log(checkboxes);
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      [ {...state[0], isChecked: true}, ...state.slice(1, 2), newOneStops, ...state.slice(3) ] :
      [ {...state[0], isChecked: false}, ...state.slice(1, 2), newOneStops, ...state.slice(3) ];


      //return newState;
    }
    case 'SELECT_TICKETS_WITH_TWO_STOPS': {
      // console.log('There is contact -> TWO STOPS');
      const twoStops = state[3];
      const newTwoStops = { ...twoStops, isChecked: !twoStops.isChecked};
      const newState = [ ...state.slice(0, 3), newTwoStops, state[4] ];


      const checkboxes = new Set(newState.slice(1).map(item => item.isChecked));
      //console.log(checkboxes);
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      [ {...state[0], isChecked: true}, ...state.slice(1, 3), newTwoStops, ...state.slice(4) ] :
      [ {...state[0], isChecked: false}, ...state.slice(1, 3), newTwoStops, ...state.slice(4) ];


      //return newState;
    }
    case 'SELECT_TICKETS_WITH_THREE_STOPS': {
      //console.log('There is contact -> THREE STOPS');
      const threeStops = state[4];
      const newThreeStops = { ...threeStops, isChecked: !threeStops.isChecked};
      const newState = [ ...state.slice(0, 4), newThreeStops ];


      const checkboxes = new Set(newState.slice(1).map(item => item.isChecked));
      //console.log(checkboxes);
      return (checkboxes.size === 1 && checkboxes.has(true)) ? 
      [ {...state[0], isChecked: true}, ...state.slice(1, 4), newThreeStops ] :
      [ {...state[0], isChecked: false}, ...state.slice(1, 4), newThreeStops ];

      //return newState;
    }
    default:
      return state;
  };
};

export default reducer;