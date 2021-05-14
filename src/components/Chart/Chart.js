import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.amount);
  // pull out values whit spred operators.
  const totalAmountOfExpenses = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.amount}
          maxValue={totalAmountOfExpenses}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
