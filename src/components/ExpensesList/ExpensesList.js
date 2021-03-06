import React from 'react';
import ExpenseItem from '../Expenses/ExpenseItem';
import './ExpensesList.css';

// Return a fallback JSX if list is not found.
// Orherwise show the list.
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">Greate! Found no expenses!</h2>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.length > 0 &&
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
