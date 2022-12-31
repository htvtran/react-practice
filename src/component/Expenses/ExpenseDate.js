import '../css/ExpenseDate.css';
class DateUtil {
  constructor(date) {
    if (date == null) {
      this.date = Date.now();
    } else this.date = date;
  }

  get day() {
    return this.date.toLocaleString('vi-VN', {day: '2-digit'});
  }

  get month() {
    return this.date.toLocaleString('vi-VN', {month: 'long'});
  }

  get year() {
    return this.date.getFullYear();
  }
}

function ExpenseDate(date) {
  const dateObj = new DateUtil(date.date);
  return (
    <div className="expense-date">
      <div className="expense-date__month"> {dateObj.month}</div>
      <div className="expense-date__year">{dateObj.year}</div>
      <div className="expense-date__day"> {dateObj.day}</div>
    </div>
  );
}

export default ExpenseDate;
