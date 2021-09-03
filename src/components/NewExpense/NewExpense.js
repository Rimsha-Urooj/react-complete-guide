import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    // receving data from base component
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
       
        // lifting the state up as passing the data from child to parent component
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () =>{
       setIsEditing(true);
    }


    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} 
            {isEditing && <ExpenseForm className="form" onSaveExpenseData = {saveExpenseDataHandler} onCancel = {stopEditingHandler} />}
        </div>
    )
}

export default NewExpense
