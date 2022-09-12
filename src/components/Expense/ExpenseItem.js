import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const { amount, date } = props;
  let title = props.title;

  const ChangeHandler = () => {
    title = "Updated!";
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={ChangeHandler}>Chagne Title</button>
    </Card>
  );
};

export default ExpenseItem;
