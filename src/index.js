import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducer';

import './index.scss';

const initialStateFilters = [
  { id: 1, name: 'allRoutes', title: 'Все', isChecked: true },
  { id: 2, name: 'noStops', stops: 0, title: 'Без пересадок', isChecked: true },
  { id: 3, name: 'oneStops', stops: 1, title: '1 пересадка', isChecked: true },
  { id: 4, name: 'twoStops', stops: 2, title: '2 пересадки', isChecked: true },
  { id: 5, name: 'threeStops', stops: 3, title: '3 пересадки', isChecked: true },    
];

const store = createStore(reducer, initialStateFilters);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

