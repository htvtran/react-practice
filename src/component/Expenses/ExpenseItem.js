import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import '../css/ExpenseItem.css';

export default function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title.toUpperCase()}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}
//  <div>{Intl.DateTimeFormat('vi-VN').format(props.date)}</div>
