import React from "react";

import "./Filter.scss";

class Filter extends React.Component {

  constructor() {
    super();
      this.state = {
        allTr: false,
        noTr: false,
        oneTr: false,
        twoTr: false,
        thrieTr: false,
      };
  }

  filtered = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  }

  onSetAllCheckboxes = () => {
    if (this.state.allTr) {
      this.setState({
        allTr: false,
        noTr: false,
        oneTr: false,
        twoTr: false,
        thrieTr: false,
      });
    } else {
      this.setState({
        allTr: true,
        noTr: true,
        oneTr: true,
        twoTr: true,
        thrieTr: true,
      });
    }

  }

  onSetOneCheckbox = (event) => {
    const name = event.target.name;
    const n = this.state[name];
    
    if (n) {
      this.setState({ [name]: false, allTr: false });
    } else {
      
      this.setState({ [name]: true });
    }


    
    
    /* console.log('name: ', name);
    console.log('Значение: ', n); */
    //this.setState({ [name]: !a });
  }

  render() {

    return (
      <form className="form" onSubmit={this.filtered}>
        <input type="checkbox" onChange={this.onSetAllCheckboxes} checked={this.state.allTr} id="all-check" name="allTr" />
        <label htmlFor="all-check">Все</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.noTr} id="no-transfer" name="noTr" />
        <label htmlFor="no-transfer">Без пересадок</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.oneTr} id="1-transfer" name="oneTr" />
        <label htmlFor="1-transfer">1 пересадка</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.twoTr} id="2-transfers" name="twoTr" />
        <label htmlFor="2-transfers">2 пересадки</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.thrieTr} id="3-transfers" name="thrieTr" />
        <label htmlFor="3-transfers">3 пересадки</label>
      </form>
    );
  }
};

export default Filter;
