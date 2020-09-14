import React from "react";

import "./Filter.scss";

const Filter = () => {
  return (
    <form className="form">
      <input type="checkbox" id="all-check-id" />
      <label htmlFor="all-check-id">Все</label>

      <input type="checkbox" id="no-transfer" />
      <label htmlFor="no-transfer">Без пересадок</label>

      <input type="checkbox" id="1-transfer" />
      <label htmlFor="1-transfer">1 пересадка</label>

      <input type="checkbox" id="2-transfers" />
      <label htmlFor="2-transfers">2 пересадки</label>

      <input type="checkbox" id="3-transfers" />
      <label htmlFor="3-transfers">3 пересадки</label>
    </form>
  );
};

export default Filter;
