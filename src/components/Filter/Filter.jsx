import React from "react";

import "./Filter.scss";

class Filter extends React.Component {

  constructor() {
    super();
      this.state = {
        filters: [
          { id: 1, name: 'allTr', title: 'Все', isChecked: false },
          { id: 2, name: 'noTr', title: 'Без пересадок', isChecked: false },
          { id: 3, name: 'oneTr', title: '1 пересадка', isChecked: false },
          { id: 4, name: 'twoTr', title: '2 пересадки', isChecked: false },
          { id: 5, name: 'thrieTr', title: '3 пересадки', isChecked: false },
        ],
      };
  }

  handleCheckboxClick = (event) => {
    const { name } = event.target;
    
    if (name === 'allTr' && !event.target.checked) {
      this.setAllCheckboxes(false);
      return;
    }
    
    if (name === 'allTr' && event.target.checked) {
      this.setAllCheckboxes(true);
      return;
    }
    
    const newFilters = this.handleToggleFilters(name);
    this.setState({ filters: newFilters });
  }
  
  setAllCheckboxes = (bool) => {
    const { filters } = this.state;
    const newFilters = filters.map(item => {
      return { ...item, isChecked: bool };
    });
    this.setState({ filters: newFilters });
  }

  handleToggleFilters = (name) => {
   const { filters } = this.state;
    const index = filters.findIndex(item => item.name === name);
    const item = filters[index];
    const item0 = filters[0];
    const newItem = { ...item, isChecked: !item.isChecked };

    if (!newItem.isChecked) {
      const newFirstElem = { ...item0, isChecked: false };
      const newFilters = [ newFirstElem, ...filters.slice(1, index), newItem, ...filters.slice(index + 1) ];
      return newFilters;
    }

    const newFilters = [ ...filters.slice(0, index), newItem, ...filters.slice(index + 1)];

    if (  newFilters[1].isChecked
          && newFilters[2].isChecked
          && newFilters[3].isChecked
          && newFilters[4].isChecked ) {
      const newFirstElem = { ...item0, isChecked: true };
      // const newFilters = [ newFirstElem, ...this.state.filters.slice(1, index), newItem, ...this.state.filters.slice(index + 1) ];
      // return newFilters;
      return [ newFirstElem, ...filters.slice(1, index), newItem, ...filters.slice(index + 1) ];
    }
    
    return newFilters;
  }

  render() {
    const { filters } = this.state;
    return (
      <form className="form">
        {
          filters.map(item => {
            return (
              <div key={item.name}>
                <input type="checkbox"
                    checked={item.isChecked}
                    name={item.name}
                    id={item.id}
                    onChange={this.handleCheckboxClick} />
                  <label htmlFor={item.id}>{item.title}</label>
              </div>
            )})
        }
      </form>
    );
  }
};

export default Filter;
