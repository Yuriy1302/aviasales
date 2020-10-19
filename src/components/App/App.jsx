import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Filter from '../Filter';
import TicketsList from '../TicketsList';
import ErrorIndicator from '../ErrorIndicator';
import Spiner from '../Spiner';

import logo from "../../images/logo.svg";
import "./App.scss";

const mapStateToProps = (state) => {
  const { tickets, error, loader, searchId } = state;
  return {
    tickets,
    error,
    loader,
    searchId
  }
};

class App extends React.Component {
  
  
/*   sortByPrice = () => {
    const sortTickets = this.state.data.tickets.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({
      sortTickets,
      sortButtonsClass: {
        cheap: 'btn btn-primary btn-lg btn-my',
        quick: 'btn btn-default btn-lg btn-my'
      }
    });
  } */

/*   sortByDuration = () => {
    const sortTickets = this.state.data.tickets.sort(function (a, b) {
      return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
    });
    this.setState({
      sortTickets,
      sortButtonsClass: {
        cheap: 'btn btn-default btn-lg btn-my',
        quick: 'btn btn-primary btn-lg btn-my'
      }
    });
  } */


  render() {
    
    const { error, loader, sortByPrice, sortByDuration } = this.props;
    /* const { sortByPrice } = actions; */

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <div>
        <div className="center-logo">
          <img className="logo-position" src={logo} alt="" />
        </div>
        <div className="my-box">
          <div className="col_1">
            <Filter />
          </div>
          <div className="col_2">
            <div className="btn-group buttons">
              <button type="button" onClick={sortByPrice} className="btn btn-primary btn-lg btn-my">
                Самый дешевый
              </button>
              <button type="button" onClick={sortByDuration} className="btn btn-default btn-lg btn-my">
                Самый быстрый
              </button>
            </div>
            {
              loader ? <Spiner /> : <TicketsList />
            }
          </div>
        </div>
      </div>
    );
  }
};

export default connect(mapStateToProps, actions)(App);
