import Expenses from './components/Expenses/Expenses';
import DummyData from './components/DummyData';
import NewExpense from './components/NewEpense/NewExpense';

// We forwarding DummyData in const expenase var.. And gives the
// Expense component the data in a item atribute. The Data will be
// parted in to props in Expenses.js file.
const App = () => {
  const expenses = DummyData;
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
