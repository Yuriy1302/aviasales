import React from "react";
import { connect } from 'react-redux';

import * as actions from '../../action';

import "./Filter.scss";

const Filter = ({filtered, ...actions}) => {
  return (
    <div className="col1">
      <h6 style={{ fontSize: '12px', textAlign: 'center' }}>КОЛИЧЕСТВО ПЕРЕСАДОК</h6>
      <form className="form">
        {
          filtered.map(item => {
            return (
              <div key={item.name}>
                <input type="checkbox"
                    checked={item.isChecked}
                    name={item.name}
                    id={item.id}
                    onChange={(event) => actions[item.name](event)} />
                  <label htmlFor={item.id}>{item.title}</label>
              </div>
            )})
        }
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filtered: state
  };
};

export default connect(mapStateToProps, actions)(Filter);