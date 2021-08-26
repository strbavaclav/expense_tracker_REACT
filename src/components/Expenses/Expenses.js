import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [filter, setfilter] = useState('2020');

  const changeSelectionHandler = (selectione) => {
    setfilter(selectione);
  };

  const filteredExpenses = props.expenses.filter((ex) => {
    return ex.date.getFullYear().toString() === filter;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectede={filter}
          onChangeSelection={changeSelectionHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
