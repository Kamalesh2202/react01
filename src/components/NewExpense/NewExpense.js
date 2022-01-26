import React from 'react';

import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.floor(Math.random() * 10),
        };
        props.onAddExpense(expenseData);
    };

    return(
        <div className = 'new-expense'>
            <NewExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
        </div>
    )
};

export default NewExpense;