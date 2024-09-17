import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels // Register the plugin
);

const HomeGraph = () => {
  const data = {
    labels: ["2020-21", "2021-22", "2022-23"],
    datasets: [
      {
        label: "New Cases",
        data: [20880, 33752, 32793],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue color for New Cases
        borderColor: "rgba(54, 162, 235, 0.9)", // Slightly darker blue for border
        borderWidth: 1, // Border width to simulate shadow
        // Add shadow properties (not natively supported but using border for simulation)
        borderSkipped: false, // Show border on all sides
      },
      {
        label: "Follow-up Cases",
        data: [33862, 57141, 84028],
        backgroundColor: "rgba(255, 99, 132, 0.6)", // Red color for Follow-up Cases
        borderColor: "rgba(255, 99, 132, 0.9)", // Slightly darker red for border
        borderWidth: 1, // Border width to simulate shadow
        borderSkipped: false, // Show border on all sides
      },
      {
        label: "Support Services",
        data: [171062, 340616, 374286],
        backgroundColor: "rgba(75, 192, 192, 0.6)", // Green color for Support Services
        borderColor: "rgba(75, 192, 192, 0.9)", // Slightly darker green for border
        borderWidth: 1, // Border width to simulate shadow
        borderSkipped: false, // Show border on all sides
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "No. of Cases Served During Last Three Years",
        font: {
          size: 28,
        },
        color: "black",
        padding: {
          top: 20,
          bottom: 20,
        },
      },
      datalabels: {
        color: "black",
        display: true,
        anchor: 'end',
        align: 'top',
        formatter: (value) => value.toLocaleString(), // Format numbers with commas
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Cases",
          font: {
            size: 16,
          },
          color: "black",
        },
      },
    },
  };

  return (
    <div className="flex flex-row justify-center items-center bg-gray-100">
      <div className="w-full max-w-6xl p-6 bg-gray-100 ">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HomeGraph;
