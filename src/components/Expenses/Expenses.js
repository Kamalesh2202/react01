import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';
const Expenses = (props) => {

    const[filteredYear,setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpense = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    return(
        <div>
            <li>
                <Card className = "expenses">
                    <ExpenseFilter 
                        selected = {filteredYear} 
                        onChangeFilter = {filterChangeHandler}
                    />
                    <ExpensesChart expense = {filteredExpense}/>
                    <ExpenseList items = {filteredExpense}/>
                </Card>
            </li>
        </div>
    );
}
export default Expenses;
