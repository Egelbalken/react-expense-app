import React from 'react';
import './NewExpense.css';
import ExpenseForm from './NewExpenseForm';

// Here we transfer data from child component to parent component.
// We can not scip any of the components between.

const NewExpense = () => {
  // Function that extracts the data from component ExpenseForm and save it.
  // Then we can trensfer the data again.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
