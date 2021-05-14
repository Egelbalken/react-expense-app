import React, { useState } from 'react';
import './NewExpenseForm.css';

// Key concept: We practis here "two way bounding" We set the new value to input and clear throw value

// We expects a props becouse we transfer data from child to parent.
const NewExpenseForm = (props) => {
  // Its normal to do like this
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  // But also do like this, in one state object
  //const [userInput, setUserInput] = useState({
  //  enteredTitel: '',
  //  enteredAmount: '',
  //  enteredDate: '',
  //});

  // State on change on inputs
  const titleChangeHandler = (event) => {
    // singel
    setEnteredTitle(event.target.value);
    // spreed function object syntax when depend on a previus state
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredTitel: event.target.value };
    //});
  };
  const amountChangeHandler = (event) => {
    // singel
    setEnteredAmount(event.target.value);
    // spreed function object syntax when depend on a previus state
    //setUserInput((prevState) => {
    //  return { ...prevState, enteredAmount: event.target.value };
    //});
  };
  const dateChangeHandler = (event) => {
    // singel
    setEnteredDate(event.target.value);
    // spreed function object syntax when depend on a previus state
    //setUserInput((prevState) => {
    //return { ...prevState, enteredDate: event.target.value };
    //});
  };

  // This handler sublmits the form.
  const submitHandler = (event) => {
    // makes the site not to update,
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      // the date is formated from the html tag input
      date: new Date(enteredDate),
    };

    // Forword data up to NewExpense.js throw props
    props.onSaveExpenseData(expenseData);
    // Reset/clear values in input to string after submit
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <lable>Title </lable>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <lable>Amount </lable>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <lable>Date </lable>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button className="btn" type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button className="btn" type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
