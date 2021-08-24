import React, { useState } from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  const [filter, setfilter] = useState('2020');

  const changeSelectionHandler = (selectione) => {
    setfilter(selectione);
  };
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selectede={filter}
          onChangeSelection={changeSelectionHandler}
        />
        {props.expenses.map((ex) => (
          <ExpenseItem
            key={ex.id}
            title={ex.title}
            amount={ex.amount}
            date={ex.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
