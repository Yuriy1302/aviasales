import React from "react";
import { connect } from 'react-redux';
import * as actions from '../../actions';

import "./Filter.scss";

const mapStateToProps = (state) => {
  const { filterStops } = state;
  return {
    filterStops
  };
};

const Filter = (props) => {

  const { filterStops, filteredTicketsList, ...actions } = props;
  // console.log('filterStops - ', filterStops);

  return (
    <div className="col1">
      <h6 style={{ fontSize: '12px', textAlign: 'center' }}>КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
      <form className="form">
        {
          filterStops.map(item => {
            /* console.log(item.name); */
            return (
              <div key={item.name}>
                <input type="checkbox"
                    checked={item.isChecked}
                    name={item.name}
                    id={item.id}
                    onChange={actions[item.name]}
                     />
                  <label htmlFor={item.id}>{item.title}</label>
              </div>
            )})
        }
      </form>
    </div>
  );
};

export default connect(mapStateToProps, actions)(Filter);