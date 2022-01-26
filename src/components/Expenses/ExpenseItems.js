import React, { useState } from 'react';

import './ExpenseItems.css'
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate.js'
const ExpenseItems = (props) => {

    return (
        <Card className = "expense-item">
            <ExpenseDate date = {props.date} />
            <div className = "expense-item__description">
                <h2>{props.title}</h2>
                <div className = "expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItems;
