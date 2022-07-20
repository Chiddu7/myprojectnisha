import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [choosenValue, setChoosenValue] = useState("2020");
  const changeHandler = (SelectedItem) => {
    setChoosenValue(SelectedItem);
  };
  console.log(props.items);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          Selected={choosenValue}
          onChangeFilter={changeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
