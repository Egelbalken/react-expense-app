import Expenses from './components/Expenses/Expenses';
import DummyData from './components/DummyData';
import NewExpense from './components/NewEpense/NewExpense';
import ExpenseFilter from './components/ExpenseFilter/ExpenseFilter';

// We forwarding DummyData in const expenase var.. And gives the
// Expense component the data in a item atribute. The Data will be
// parted in to props in Expenses.js file.
const App = () => {
  const expenses = DummyData;
  const addExpenseHandler = (expense) => {
    console.log('In App.js ' + expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
