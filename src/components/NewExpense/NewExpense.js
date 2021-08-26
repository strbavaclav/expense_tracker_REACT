import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  };

  const showFormHandler = () => {
    setShowForm(true);
  };

  const closeFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className='new-expense'>
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCloseForm={closeFormHandler}
        />
      ) : (
        <button onClick={showFormHandler}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
