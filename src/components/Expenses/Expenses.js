import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('');

    const filterChangeHandler= (selectedYear) =>{
        setFilteredYear(selectedYear);
    };

    // get filtered expenses per year
    const filteredExpenses = props.items.filter((expense)=>{
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>

                {/* Dynamic Rendering of lists */}
                {/* Showing expenses per applied filtered year */}
                {filteredExpenses.length === 0  &&  <p>No Expense Found </p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense)=>(
                        <ExpenseItem 
                            key = {expense.id}
                            title = {expense.title}
                            amount = {expense.amount}
                            date = {expense.date}
                        />
                    )
                )}
              

                {/* Static Rendering of Lists */}
                {/* <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount} 
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title} 
                    amount={props.items[1].amount} 
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title} 
                    amount={props.items[2].amount} 
                    date={props.items[2].date}
                />
                <ExpenseItem 
                    title={props.items[3].title} 
                    amount={props.items[3].amount} 
                    date={props.items[3].date}
                /> */}
            </Card>
        </div>
    )
}

export default Expenses
