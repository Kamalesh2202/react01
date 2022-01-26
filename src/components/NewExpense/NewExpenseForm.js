import React, {useState} from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount,setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: '',
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,              was commented because it would cause error
        //     enteredTitle: event.target.value,        searching for previous snapshot.
        // })
        // setUserInput((prevStateSnapshot) => {
        //     return{
        //         ...prevStateSnapshot,
        //         enteredTite: event.target.value,
        //     };
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        // setUserInput((prevStateSnapshot) => {
        //     return{
        //         ...prevStateSnapshot,
        //         enteredAmount: event.target.value,
        //     };
        // })
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevStateSnapshot) => {
        //     return{
        //         ...prevStateSnapshot,
        //         enteredDate: event.target.value,
        //     };
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className = 'new-expense__controls'>
                <div className = 'new-expense__control'>
                    <label>Expense Title</label>
                    <input type = 'text' placeholder='Title' value = {enteredTitle} onChange = {titleChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Amount</label>
                    <input type = 'number' placeholder='Amount' min = '0.01' step = '0.01' value = {enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className = 'new-expense__control'>
                    <label>Date</label>
                    <input type = 'date' placeholder='Date' min = '2000-01-01' max = '2030-12-31' value = {enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className = "new-expense__actions">
                <button type = 'submit'>Add Expense</button>
            </div>
        </form>
    );

};

export default NewExpenseForm;
