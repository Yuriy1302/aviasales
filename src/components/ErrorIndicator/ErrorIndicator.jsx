import React from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../../actions';

import attention from '../../images/attention.png';

import './ErrorIndicator.scss';

const mapStateToProps = (state) => {
  const { searchId } = state;
  return { searchId };
};

const ErrorIndicator = (props) => {
  const { searchId , fetchTickets } = props;
  return (
    <div className="card classErrorMessage">
      <div className="card-screen">
        <div className="card-body" style={{ textAlign: 'center' }}>
          <img className="card-img-top" src={attention} style={{ width: 50, margin: '10px auto'}} alt="Error message" />
          <h2>Что-то пошло не так.</h2>
          <p>Продолжить поиск?</p>
          <button type='button' onClick={() => fetchTickets(searchId)} className='btn btn-warning btn-sm'>Продолжить</button>
        </div>
      </div>
      <div className="myShadow1"></div>
      <div className="myShadow2"></div>
    </div>
  );
}

export default connect(mapStateToProps, { fetchTickets })(ErrorIndicator);