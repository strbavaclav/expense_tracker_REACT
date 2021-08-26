import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const epxenseData = { title: title, amount: +amount, date: new Date(date) };

    props.onSaveExpenseData(epxenseData);
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              placeholder='type a title'
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              placeholder='what it costs?'
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
        <div className='new-expense__actions'>
          <button onClick={props.onCloseForm}>Cancel</button>
          <button type='submit'>Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
