import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = ({ filteredData }) => {
  if (filteredData.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>
  }
  return filteredData.map((el) => <ExpenseItem key={el.id} {...el} />)
}

export default ExpensesList
