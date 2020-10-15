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




