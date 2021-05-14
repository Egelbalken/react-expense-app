import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './NewExpenseForm';

// Here we transfer data from child component to parent component.
// We can not scip any of the components between.

// We accept a props in the NewExpense function to hanlde data
const NewExpense = (props) => {
  // State to show or not showing the button
  const [isEditing, setIsEditing] = useState(false);
  // Function that extracts the data from component ExpenseForm and save it.
  // Then we can trensfer the data again up. We want a inprop as a parameter here.
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    // forword it up to the App.js
    // SetIsEditing will allso clouse the editing area when submited
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const starEditingHandler = () => {
    setIsEditing(true);
  };

  const StopEditingHandler = () => {
    setIsEditing(false);
  };

  // Use turnary statsment to open or clouse editing
  // expenses through dynamic expresseion {}
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={starEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={StopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
