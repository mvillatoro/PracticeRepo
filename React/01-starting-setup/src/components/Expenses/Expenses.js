import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {

    const item0 = props.expenseList[0];
    const item1 = props.expenseList[1];
    const item2 = props.expenseList[2];
    const item3 = props.expenseList[3];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={item0.title}
        amount={item0.amount}
        date={item0.date}
      />
      <ExpenseItem
        title={item1.title}
        amount={item1.amount}
        date={item1.date}
      />
      <ExpenseItem
        title={item2.title}
        amount={item2.amount}
        date={item2.date}
      />
      <ExpenseItem
        title={item3.title}
        amount={item3.amount}
        date={item3.date}
      />
    </Card>
  );
}

export default Expenses;
