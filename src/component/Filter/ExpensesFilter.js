import React from 'react';
import '../css/ExpensesFilter.css';

function ExpensesFilter(props) {
  const selectedYearHandler = (event) => {
    const selected = event.target.value;
    props.onSelectedYear(selected.toString());
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
        {/* <span>Seleted state : {props.selectedYear}</span> */}
      </div>
    </div>
  );
}

export default ExpensesFilter;
