import logo from "./logo.svg";
import "./App.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {Bar} from 'react-chartjs-2'
import React, { useState, useEffect } from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  useEffect(() => {
    setChartData({
      labels: ["sunday", "monday", "tuesday", "wednesday",'thursday','friday','saturday'],
      datasets: [
        {
          label: "reach on post",
          data: [21, 2, 12, 22, 32,57,67],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(33,192,235,0.5)",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "sample data",
        },
      },
    });
  }, []);

  return <div className="App">
    <Bar options={chartOptions} data={chartData}/>
  </div>;
}

export default App;
