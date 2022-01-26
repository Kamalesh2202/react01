import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
    { title: 'Books', amount: 350.5, date: new Date(2022,3,17), id: '1'},
    { title: 'Paper', amount: 50.5, date: new Date(2022,1,17), id: '2'},
    { title: 'Food', amount: 180.5, date: new Date(2022,3,24), id: '3'},
    { title: 'Transport', amount: 200.5, date: new Date(2022,2,17), id: '4'},
];

const App = () => {
    
    const[expenses, setExpenses] = useState(DUMMY_EXPENSES);
    
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items = {expenses} />
        </div>
    );
}

export default App;
