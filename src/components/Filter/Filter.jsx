import React from "react";

import "./Filter.scss";

/* const filters = [
  { name: 'allTr', title: 'Все', isChecked: false },
  { name: 'noTr', title: 'Без пересадок', isChecked: false },
  { name: 'oneTr', title: '1 пересадка', isChecked: false },
  { name: 'twoTr', title: '2 пересадки', isChecked: false },
  { name: 'thrieTr', title: '3 пересадки', isChecked: false },
]; */

/* const filters = [
  [ 'allTr', false ],
  { name: 'noTr', isChecked: false },
  { name: 'oneTr', isChecked: false },
  { name: 'twoTr', isChecked: false },
  { name: 'thrieTr', isChecked: false },
];
 */
/* const Checkbox = (props) => {
  const { name, isChecked, } = props;
  render (
    <>
      <input type="checkbox" onChange={this.onSetAllCheckboxes} checked={this.state.allTr} id="all-check" name="allTr" />
      <label htmlFor="all-check">Все</label>
    </>
  )
} */



class Filter extends React.Component {

  constructor() {
    super();
      this.state = {
        filterState: [
          { id: 1, name: 'allTr', title: 'Все', isChecked: false },
          { id: 2, name: 'noTr', title: 'Без пересадок', isChecked: false },
          { id: 3, name: 'oneTr', title: '1 пересадка', isChecked: true },
          { id: 4, name: 'twoTr', title: '2 пересадки', isChecked: false },
          { id: 5, name: 'thrieTr', title: '3 пересадки', isChecked: false },
        ],
        /* allTr: false,
        noTr: false,
        oneTr: false,
        twoTr: false,
        thrieTr: false, */
      };
  }

  handleCheckboxClick = (e) => {
    
    const name = e.target.name;
    //const index = this.state.filterState.findIndex(item => item.name === name);
    console.log(name);
    //console.log(index);
    

    

  }

/*   filtered = (event) => {
    event.preventDefault();
    console.log(event.target.id);
  } */

/*   onSetAllCheckboxes = () => {
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

  } */

/*   onSetOneCheckbox = (event) => {
    const name = event.target.name;
    const n = this.state[name];
    
    if (n) {
      this.setState({ [name]: false, allTr: false });
    } else {
      
      this.setState({ [name]: true });
    }
  } */

  render() {

    return (
      <form className="form">
        
        {
          this.state.filterState.map((item) => (
            <div key={item.id}>
              <input type="checkbox" onChange={this.handleCheckboxClick} checked={item.isChecked} id="all-check" name={item.name} />
              <label htmlFor="all-check">{item.title}</label>
            </div>
          ))
        }
        
        {/* <input type="checkbox" onChange={this.onSetAllCheckboxes} checked={this.state.allTr} id="all-check" name="allTr" />
        <label htmlFor="all-check">Все</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.noTr} id="no-transfer" name="noTr" />
        <label htmlFor="no-transfer">Без пересадок</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.oneTr} id="1-transfer" name="oneTr" />
        <label htmlFor="1-transfer">1 пересадка</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.twoTr} id="2-transfers" name="twoTr" />
        <label htmlFor="2-transfers">2 пересадки</label>

        <input type="checkbox" onChange={this.onSetOneCheckbox} checked={this.state.thrieTr} id="3-transfers" name="thrieTr" />
        <label htmlFor="3-transfers">3 пересадки</label> */}
      </form>
    );
  }
};

/* const Checkboxes = (props) => {
  const { name, title, isChecked } = props.item;
  const { handleCheckboxClick } = props;
  console.log(name);
  console.log(title);
  console.log(isChecked);
  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxClick} checked={isChecked} data-name={name} id="all-check" name={name} />
      <label htmlFor="all-check">{title}</label>
    </div>
  );
} */

export default Filter;
