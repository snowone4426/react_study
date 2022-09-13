import React, { useState } from 'react'

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpenseChart from './ExpenseChart'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const yearHandler = (year) => {
    setFilteredYear(year)
  }

  const filteredData = expenses.filter(
    (el) => el.date.getFullYear().toString() === filteredYear,
  )

  return (
    <Card className="expenses">
      <ExpensesFilter yearHandler={yearHandler} filteredYear={filteredYear} />
      <ExpenseChart expenses={filteredData} />
      <ExpensesList filteredData={filteredData} />
    </Card>
  )
}

export default Expenses
