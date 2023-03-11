import React, { useState } from 'react';
import "./ExpenseForm.css";


const ExpenseForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enterdAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setUserInput((prevState) => {
        // return {...prevState, enteredTitle: event.target.value};
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enterdAmount,
            date: new Date(enteredDate),
        };

        console.log(expenseDate);
    };

    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__controls">
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
                <div className="new-expense__controls">
                    <button type="submit" >Add Expense</button>
                </div>
            </div>

        </form>
    );
}

export default ExpenseForm;