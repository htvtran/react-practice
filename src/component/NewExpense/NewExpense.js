import React from 'react';
import ExpenseForm from './ExpenseForm';
import '../css/NewExpense.css';

const NewExpense = (props) => {
  const submitFormHandler = (data) => {
    const formData = {...data, id: Math.random().toString()};
    console.table(formData);
    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSubmitForm={submitFormHandler} />
    </div>
  );
};

export default NewExpense;
