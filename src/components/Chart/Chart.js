import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((el) => el.value)
  const maxValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {dataPoints.map((el) => (
        <ChartBar
          value={el.value}
          maxValue={maxValue}
          label={el.label}
          key={el.label}
        />
      ))}
    </div>
  )
}

export default Chart
