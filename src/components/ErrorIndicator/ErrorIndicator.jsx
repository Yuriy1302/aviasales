import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchTickets } from "../../actions";

import attention from "../../images/attention.png";

import "./ErrorIndicator.scss";

const mapStateToProps = (state) => {
  const { searchId } = state;
  return { searchId };
};

const ErrorIndicator = (props) => {
  const { searchId } = props;
  return (
    <div className="card classErrorMessage">
      <div className="card-screen">
        <div className="card-body" style={{ textAlign: "center" }}>
          <img
            className="card-img-top"
            src={attention}
            style={{ width: 50, margin: "10px auto" }}
            alt="Error message"
          />
          <h2>Что-то пошло не так.</h2>
          <p>Продолжить поиск?</p>
          <button
            type="button"
            onClick={() => fetchTickets(searchId)}
            className="btn btn-warning btn-sm"
          >
            Продолжить
          </button>
        </div>
      </div>
      <div className="shadow1" />
      <div className="shadow2" />
    </div>
  );
};

ErrorIndicator.propTypes = {
  searchId: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(ErrorIndicator);
