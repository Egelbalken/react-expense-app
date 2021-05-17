import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import DummyData from './components/DummyData';
import NewExpense from './components/NewEpense/NewExpense';
import Background from './components/Background/Background';

// We forwarding DummyData in const expenase var.. And gives the
// Expense component the data in a item atribute. The Data will be
// parted in to props in Expenses.js file.

const App = () => {
  const [expenses, setExpenses] = useState(DummyData);

  // the clean way to update a array "snappshot" to an newer.
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <Background>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </Background>
  );
};

export default App;
