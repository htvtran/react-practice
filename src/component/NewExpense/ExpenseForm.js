import React, {useState} from 'react';
import '../css/ExpenseForm.css';

export default function ExpenseForm(props) {
  //   const [newTitle, setNewTitle] = useState('');
  //   const [newAmount, setNewAmount] = useState('');
  //   const [newDate, setNewDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });
  //
  const titleChangeHandler = (event) => {
    // setNewTitle(event.target.value);
    // setUserInput({...userInput, newTitle: event.target.value});
    setUserInput((prevState) => {
      return {...prevState, title: event.target.value};
    });
  };
  const amountChangeHandler = (event) => {
    // setNewAmount(event.target.value);
    // setUserInput({...userInput, newAmount: event.target.value});

    setUserInput((prevState) => {
      return {...prevState, amount: event.target.value};
    });
  };
  const dateChangeHandler = (event) => {
    // setNewDate(event.target.value);
    // setUserInput({...userInput, newDate: event.target.value});
    setUserInput((prevState) => {
      return {...prevState, date: event.target.value};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    userInput.date = new Date(userInput.date);
    // console.log(JSON.stringify(userInput, null, 2));
    console.log(userInput);
    props.onSubmitForm(userInput);

    let resetFormObj = Object.fromEntries(Object.entries(userInput).map(([key, val]) => [key, '']));
    setUserInput(resetFormObj);
  };

  return (
    <form className="" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={userInput.title} onChange={titleChangeHandler}></input>
        </div>
      </div>

      {/* amount */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler}></input>
        </div>
      </div>
      {/* Date */}
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-12-01" value={userInput.date} required placeholder="dd-mm-yyyy" max="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
      {/* <div>
        Input result: {userInput.amount}
        <br /> Input result: {userInput.title}
        <br /> Input result: {userInput.date}
      </div> */}
    </form>
  );
}
