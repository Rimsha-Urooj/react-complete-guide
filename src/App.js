import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import React, { useState } from 'react';


// using stateful lists
const DUMMY_EXPENSES = [
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

function App() {

  // using useState Hook and initiazlizing it with dummy expenses
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  // for bottom to up communication
  // using previous state to add up in the new state
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) =>{
      return [expense, ...prevExpenses];
    });
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      
     <Expenses items={expenses} />
    </div>
  );
}

export default App;
