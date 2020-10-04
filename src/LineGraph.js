import React from "react";
import { Bar } from "react-chartjs-2";
const BarGraph = () => {
  const data = {
    labels: [
      "Aarush",
      "Aakarsh",
      "Chirag",
      "Aditya Bhatt",
      "Aanshik",
      "Shreshth Chandra"
    ],
    datasets: [
      {
        label: "Results of students out of 10",
        data: [5, 5, 9, 4, 5, 6],
        borderColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ],
        backgroundColor: [
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(54, 162, 235, 0.2)"
        ]
      }
    ]
  };
  const options = {
    title: {
      display: true,
      text: "Results"
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 11,
            stepSize: 1
          }
        }
      ]
    }
  };
  return (
    <Bar
      class="bar-graph"
      data={data}
      width={80}
      height={30}
      options={options}
    />
  );
};
export default BarGraph;
