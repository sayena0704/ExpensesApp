import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
// import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter( (expense) => {
    return expense.date.getFullYear().toString() === (filteredYear);  
  });

  // let expensesContent = <p>No expenses found.</p>;

  // if(filteredExpenses.length > 0){
  //   expensesContent = (
  //     filteredExpenses.map((expense) => (
  //     <ExpenseItem 
  //     key ={expense.id}
  //     title={expense.title} 
  //     amount={expense.amount} 
  //     date={expense.date} />
  //     )));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter 
      selectedYear={filteredYear} 
      onChangeFilter={filterChangeHandler} />
      {/* using list (map function) for extracting values from expenses array */}
    
      <ExpenseChart expenses = {filteredExpenses} />
     {/* {expensesContent} */}
      <ExpensesList expenses ={filteredExpenses}/>
    
      {/* <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;