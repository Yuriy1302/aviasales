import React from "react";

import Filter from '../Filter';
import TicketsList from '../TicketsList';
import ErrorIndicator from '../ErrorIndicator';
import Spiner from '../Spiner';

import logo from "../../images/logo.svg";

import "./App.scss";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: { tickets: [], stop: null },
      sortTickets: [],
      sortButtonsClass: {
        cheap: 'btn btn-primary btn-lg btn-my',
        quick: 'btn btn-default btn-lg btn-my'
      },
      // searchId: null,
      searchId: '797b027db6e3a32e7f3f2c9e2ca91e90',
      error: false,
      loader: false
    };
  }

  componentDidMount() {
    this.getSearchId();
    if (this.state.searchId) {
      this.getTickets(this.state.searchId);
    }

  }

  updateSearchId = ({ searchId }) => {
    this.setState({ searchId });
  }

  getSearchId = () => {
    fetch('https://aviasales-test-api.java-mentor.com/search')
      .then(res => res.json())
      .then(this.updateSearchId);
  }

  updateStateTickets = ({tickets, stop}) => {
    tickets = tickets.filter((itme, index) => {
      if (index > 14) {
        return null;
      }
      return itme;
    })
    this.setState({ data: { tickets, stop }});
  }

  getTickets = (searchId) => {
    fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${searchId}`)
      .then(res => res.json())
      .then(this.updateStateTickets)
      .then(this.sortByPrice)
      .catch(this.onError);
  }

  onError = () => {
    this.setState({ error: true });
  }

  sortByPrice = () => {
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
  }

  sortByDuration = () => {
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
  }


  render() {
    console.log('searchId -> ', this.state.searchId);
    console.log('this.state.data.tickets -> ', this.state.data.tickets);
    console.log('this.state.data.tickets[0] -> ', this.state.data.tickets[0]);
    console.log('sortTickets -> ', this.state.sortTickets);

    const { error, loader } = this.state;
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
              <button type="button" onClick={this.sortByPrice} className={this.state.sortButtonsClass.cheap}>
                Самый дешевый
              </button>
              <button type="button" onClick={this.sortByDuration} className={this.state.sortButtonsClass.quick}>
                Самый быстрый
              </button>
            </div>
            {
              loader ? <Spiner /> : <TicketsList sortTickets={this.state.sortTickets} />
            }
          </div>
        </div>
      </div>
    );
  }
};

export default App;
