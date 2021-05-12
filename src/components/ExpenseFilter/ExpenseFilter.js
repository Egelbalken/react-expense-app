import React from 'react';
import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  // Function that listen on events and forward it up
  const filterHandler = (event) => {
    //sends the data up one level to Expense.js.
    props.onYearChange(event.target.value);
  };

  // Props is selected to a default year in useState in Expenses
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selectedYear} onChange={filterHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
