import './ExpanseDate.css';
import React from 'react';

const ExpenseDate = (props) => {
  // Make the code human readeable and breacke it up in to smaler data.
  // This is a component that is usable in the ExpansesItem component.
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
