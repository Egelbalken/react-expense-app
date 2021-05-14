import '../Expenses/Expenses.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesList from '../ExpensesList/ExpensesList';

// The props comes from the Expenses component in App.js file.
// the props.item have the atributes from the DummyData.js file.
// It will no send the data to the props  ExpansItem.js that will
// Display the data.
// Controlled component = Two way bounding.
// Pressentaional vs statful components/Dum vs smart component
// Component need som state and is smart
// but som e is a "state less" or dum component. Often dum components.
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterYearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log('In expenses.js ' + selectedYear);
  };

  // Filter out the year. and then map throw the filtered list.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onYearChange={filterYearChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
