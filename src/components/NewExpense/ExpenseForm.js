import React, { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm() {

    // Multiple use of States
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [eneteredDate, setEnteredDate] = useState('');

    // Using one state
//    const [userInput, setUserInput] = useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         eneteredDate:'',
//     })

    const titleChangeHandler = (event) => {
        // when use Multiple useState
        setEnteredTitle(event.target.value);

        // when use single useState function for all inputs
        // setUserInput({
        //     // use of spread operator
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // updating state that depends on previous state
        // setUserInput((prevState)=>{
        //     return { ...prevState, enteredTitle: event.target.value}
        // });
        // console.log(event.target.value);
    }

    const amountChangeHandler = (event) => {
        // when use Multiple useState
        setEnteredAmount(event.target.value);

        // // when use single useState function for all inputs
        // setUserInput({
        //     // use of spread operator
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        console.log(event.target.value);
    }

    const dateChangeHandler = (event) =>{
        // when use Multiple useState
        setEnteredDate(event.target.value);

        // when use single useState function for all inputs
        // setUserInput({
        //     // use of spread operator
        //     ...userInput,
        //     eneteredDate: event.target.value,
        // })
        console.log(event.target.value);
    }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
