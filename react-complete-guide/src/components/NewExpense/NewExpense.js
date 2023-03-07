import React from 'react';
import "./NewExpense.css";
import ExpenseForm from './ExpenseForm.js';

const NewExpenses = () => {

    return (
        <div className="new-expense" >
            <ExpenseForm />
        </div>
    );
}

export default NewExpenses;