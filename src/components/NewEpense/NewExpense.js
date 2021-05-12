import React from 'react';
import './NewExpense.css';
import ExpenseForm from './NewExpenseForm';

// Here we transfer data from child component to parent component.
// We can not scip any of the components between.

// We accept a props in the NewExpense function to hanlde data
const NewExpense = (props) => {
  // Function that extracts the data from component ExpenseForm and save it.
  // Then we can trensfer the data again up. We want a inprop as a parameter here.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // forword it up to the App.js
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
