import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["PG1", "PG2", "PG3", "PG4"],
  datasets: [
    {
      label: "No. of Beds",
      data: [12, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = (props) => (
  <>
    <div className="header">
      <h1 className="title">{props.name}</h1>
    </div>
    <div
      id="pie-chart"
      style={{
        width: 300,
        height: 250,
      }}
    >
      <Pie data={data} />
    </div>
  </>
);

export default PieChart;
