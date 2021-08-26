import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  let noContent = <h2 className='expenses-list__fallback'>No content</h2>;
  let filteredContent = props.expenses.map((ex) => (
    <ExpenseItem
      key={ex.id}
      title={ex.title}
      amount={ex.amount}
      date={ex.date}
    />
  ));
  return (
    <ul className='expenses-list'>
      {filteredContent.length === 0 ? noContent : filteredContent}
    </ul>
  );
};

export default ExpensesList;
