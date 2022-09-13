import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = ({ addExpensesHandler, editHandler }) => {
  const [data, setData] = useState({
    title: '',
    amount: 0,
    date: new Date().toISOString().substring(0, 10),
  })

  const formHandler = (e) => {
    setData((previousState) => {
      return { ...previousState, [e.target.name]: e.target.value }
    })
  }

  const submitHanlder = (e) => {
    e.preventDefault()
    if (data.title && data.amount) {
      addExpensesHandler(data)
      setData({
        title: '',
        amount: 0,
        date: new Date().toISOString().substring(0, 10),
      })
      editHandler()
    }
  }

  return (
    <form onSubmit={submitHanlder}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            name="title"
            value={data.title}
            type="text"
            onChange={formHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            name="amount"
            value={data.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={formHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            name="date"
            value={data.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={formHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        <button onClick={editHandler}>cancel</button>
      </div>
    </form>
  )
}

export default ExpenseForm
