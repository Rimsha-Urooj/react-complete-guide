import './App.css';
import Expenses from './components/Expenses';


function App() {

  const expenses = [
    {
      id:'e1',
      title: 'Drawing Paper',
      amount: 94.12,
      date : new Date(2020, 7, 14),
    },
    {
      id:'e2',
      title: 'Car Insurance',
      amount: 294.57,
      date : new Date(2021, 8, 24),
    },
    {
      id:'e3',
      title: 'New TV',
      amount: 799.49,
      date : new Date(2020, 2, 12),
    },
    {
      id:'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date : new Date(2021, 5, 27),
    },
  ]

  return (
    <div className="App">
      <h2>Lets get started</h2>
      
     <Expenses items={expenses} />
    </div>
  );
}

export default App;
