import '../Expenses/Expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

// The props comes from the Expenses component in App.js file.
// the props.item have the atributes from the DummyData.js file.
// It will no send the data to the props  ExpansItem.js that will
// Display the data.
const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
