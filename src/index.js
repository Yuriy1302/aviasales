import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducer from './reducer';
import { fetchSearchId } from './actions';

import './index.scss';

/* const initialStateFilters = [
  { id: 1, name: 'allRoutes', title: 'Все', isChecked: true },
  { id: 2, name: 'noStops', stops: 0, title: 'Без пересадок', isChecked: true },
  { id: 3, name: 'oneStops', stops: 1, title: '1 пересадка', isChecked: true },
  { id: 4, name: 'twoStops', stops: 2, title: '2 пересадки', isChecked: true },
  { id: 5, name: 'threeStops', stops: 3, title: '3 пересадки', isChecked: true },    
]; */


/* const store = createStore(reducer, initialStateFilters); */
const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchSearchId());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

