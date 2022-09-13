import { useState } from 'react'

import Expenses from './components/Expense/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]

  const [expensesData, setExpensesData] = useState(expenses)

  const addExpensesHandler = (obj) => {
    obj.amount = Number(obj.amount)
    setExpensesData((prevData) => {
      return [
        { ...obj, id: `e${prevData.length + 1}`, date: new Date(obj.date) },
        ...prevData,
      ]
    })
  }

  return (
    <div>
      <NewExpense addExpensesHandler={addExpensesHandler} />
      <Expenses expenses={expensesData} />
    </div>
  )
}

export default App
