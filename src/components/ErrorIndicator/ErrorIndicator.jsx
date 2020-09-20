import React from 'react';

import attention from '../../images/attention.png';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="card classErrorMessage">
      <img className="card-img-top" src={attention} style={{ width: 50, margin: '10px auto'}} alt="Error message" />
      <div className="card-body" style={{ textAlign: 'center' }}>
        <h2>Что-то пошло не так.</h2>
        <p>Перезапустите страницу.</p>
      </div>
    </div>
  );
}

export default ErrorIndicator;