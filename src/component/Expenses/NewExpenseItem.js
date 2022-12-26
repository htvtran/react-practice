import React from 'react';

import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';

import '../css/NewExpenseItem.css';

function NewExpenseItem(props) {
  const data = props.expense;
  return (
    <Card className="expenses">
      <ExpenseItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpenseItem>
      <ExpenseItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpenseItem>
      <ExpenseItem title={data[2].title} date={data[2].date} amount={data[2].amount}></ExpenseItem>
      <ExpenseItem title={data[3].title} date={data[3].date} amount={data[3].amount}></ExpenseItem>
    </Card>
  );
}

export default NewExpenseItem;
