import { useState } from 'react'

import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = ({ addExpensesHandler }) => {
  const [isEdit, setIsEdit] = useState(false)

  const editHandler = () => {
    setIsEdit(!isEdit)
  }

  let editComponent = <button onClick={editHandler}>Add New Expense</button>

  if (isEdit) {
    editComponent = (
      <ExpenseForm
        addExpensesHandler={addExpensesHandler}
        editHandler={editHandler}
      />
    )
  } else {
    editComponent = <button onClick={editHandler}>Add New Expense</button>
  }

  return <div className="new-expense">{editComponent}</div>
}

export default NewExpense
