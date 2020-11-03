import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Filter from "../Filter";
import Spiner from "../Spiner";
import TicketsList from "../TicketsList";

import * as actions from "../../actions";

import logo from "../../images/logo.svg";

import "./App.scss";

const mapStateToProps = (state) => {
  const { loader, cheap } = state;
  return {
    loader,
    cheap,
  };
};

const App = (props) => {
  const { loader, cheap, sortByPrice, sortByDuration } = props;

  let btnCheap = "btn btn-primary btn-lg btn-my";
  let btnQuick = "btn btn-default btn-lg btn-my";
  if (!cheap) {
    btnCheap = "btn btn-default btn-lg btn-my";
    btnQuick = "btn btn-primary btn-lg btn-my";
  }

  return (
    <div>
      <header className="center-logo">
        <img className="logo-position" src={logo} alt="Aviasales logo" />
      </header>
      <main className="my-box">
        <div className="col_1">
          <Filter />
        </div>
        <div className="col_2">
          <div className="btn-group buttons">
            <button type="button" onClick={sortByPrice} className={btnCheap}>
              Самый дешевый
            </button>
            <button type="button" onClick={sortByDuration} className={btnQuick}>
              Самый быстрый
            </button>
          </div>
          {loader ? <Spiner /> : <TicketsList />}
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  loader: PropTypes.bool.isRequired,
  cheap: PropTypes.bool.isRequired,
  sortByPrice: PropTypes.func.isRequired,
  sortByDuration: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(App);
