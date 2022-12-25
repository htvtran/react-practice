import React from 'react';
import NewExpenseItem from './component/NewExpenseItem';

const getData = () => {
  return [
    {title: 'Car Ins', amount: 122.22, date: addDays(Date.now(), 0)},
    {title: 'Truck Ins', amount: 92.58, date: addDays(Date.now(), 2)},
    {title: 'Employee Salary', amount: 600.22, date: addDays(Date.now(), 5)},
    {title: 'Library deposit', amount: 80.4, date: addDays(Date.now(), 2)}
  ];
};

function App() {
  return <NewExpenseItem expense={getData()}></NewExpenseItem>;
}

function addDays(currentDate, days) {
  return new Date(currentDate + days * 3600 * 1000 * 24);
}
export default App;
