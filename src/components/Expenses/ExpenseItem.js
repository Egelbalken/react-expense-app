import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import '../UI/Card.css';

// This component diaplays the props of price and title.
// It also transfer data from "dummy-data" to ExpanseDate component
// To display data in to that component.
const ExpenseItem = (props) => {
  // function state handler. Use a Array whit a initial state and
  // a initial state as set title. Works like a on of button
  // This is a key concept.
  // UseState registers a value before it been called
  // the state will be revaluated.
  // is sperataed per individual item.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Uppdated!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}Kr</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
