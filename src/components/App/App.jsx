import React from "react";

import Filter from "../Filter";
import TicketsList from "../TicketsList";

import logo from "../../images/logo.svg";

import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="center-logo">
          <img className="logo-position" src={logo} alt="" />
        </div>
        <div className="my-box">
          <div className="col_1">
            <h2>Количество пересадок</h2>
            <Filter />
          </div>
          <div className="col_2">
            <div className="btn-group buttons">
              <button type="button" className="btn btn-primary btn-lg btn-my">
                Самый дешевый
              </button>
              <button type="button" className="btn btn-default btn-lg btn-my">
                Самый быстрый
              </button>
            </div>
            <TicketsList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
