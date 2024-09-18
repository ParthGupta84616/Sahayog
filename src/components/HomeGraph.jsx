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
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const HomeGraph = () => {
  const data = {
    labels: ["2020-21", "2021-22", "2022-23"],
    datasets: [
      {
        label: "New Cases",
        data: [20880, 33752, 32793],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
        borderColor: "rgba(54, 162, 235, 0.9)",
        borderWidth: 1,
        borderSkipped: false,
      },
      {
        label: "Follow-up Cases",
        data: [33862, 57141, 84028],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 0.9)",
        borderWidth: 1,
        borderSkipped: false,
      },
      {
        label: "Support Services",
        data: [171062, 340616, 374286],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 0.9)",
        borderWidth: 1,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 16,
          },
        },
      },
      datalabels: {
        color: "black",
        display: true,
        anchor: "end",
        align: "top",
        formatter: (value) => value.toLocaleString(),
        font: {
          size: 10,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Years",
          font: {
            size: 16,
          },
          color: "black",
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
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
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-6xl h-96 mb-36">
        <header className="text-center mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#066969]">
            No. of Cases Served During Last Three Years
          </h1>
        </header>
        <hr className=" py-4 border-1 border-[#066969]" />
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HomeGraph;
