import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../Filter/ExpensesFilter';

import Card from '../UI/Card';

import '../css/NewExpenseItem.css';

function Expense(props) {
  const data = props.expense;

  const [selectedYear, setSelectedYear] = useState('2022');
  const selectedYearHandler = (value) => {
    setSelectedYear(value);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectedYear={selectedYearHandler} selectedYear={selectedYear} />
        <ExpenseItem title={data[0].title} date={data[0].date} amount={data[0].amount}></ExpenseItem>
        <ExpenseItem title={data[1].title} date={data[1].date} amount={data[1].amount}></ExpenseItem>
        <ExpenseItem title={data[2].title} date={data[2].date} amount={data[2].amount}></ExpenseItem>
        <ExpenseItem title={data[3].title} date={data[3].date} amount={data[3].amount}></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expense;
