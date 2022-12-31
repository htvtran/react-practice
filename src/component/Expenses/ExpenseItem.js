import {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import '../css/ExpenseItem.css';

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Really what kind of magic shit is this!!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title.toUpperCase()}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* prettier-ignore */}
      <button onClick={clickHandler}> 
        Change title
      </button>
    </Card>
  );
}

//  <div>{Intl.DateTimeFormat('vi-VN').format(props.date)}</div>
