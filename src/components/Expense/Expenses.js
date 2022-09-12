import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((el) => (
        <ExpenseItem key={el.id} {...el} />
      ))}
    </Card>
  );
};

export default Expenses;
