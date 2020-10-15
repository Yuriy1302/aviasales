import React from 'react';

import attention from '../../images/attention.png';

import './ErrorIndicator.scss';

const ErrorIndicator = () => {
  return (
    <div className="card classErrorMessage">
      <div className="card-screen">
        <div className="card-body" style={{ textAlign: 'center' }}>
          <img className="card-img-top" src={attention} style={{ width: 50, margin: '10px auto'}} alt="Error message" />
          <h2>Что-то пошло не так.</h2>
          <p>Перезапустите страницу.</p>
          <button type='button' onClick={() => window.location.reload()} className='btn btn-warning btn-sm'>Перезапустить</button>
        </div>
      </div>
      <div className="myShadow1"></div>
      <div className="myShadow2"></div>
    </div>
  );
}

export default ErrorIndicator;