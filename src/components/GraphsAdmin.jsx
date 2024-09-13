import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

// Register Chart.js components
ChartJS.register(
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

// Simulate fetching chart data
const fetchChartData = async () => {
  const today = new Date();
  const data = [];
  const labels = [];

  for (let i = 9; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    labels.push(date.toISOString());
    data.push(Math.floor(Math.random() * 299));
  }

  return { labels, patients: data };
};

const GraphsAdmin = () => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchChartData();
        setChartData({
          labels: data.labels,
          datasets: [
            {
              label: "Number of patients Over Last 10 Days",
              data: data.labels.map((label, index) => ({
                x: label,
                y: data.patients[index],
              })),
              fill: false,
              borderColor: "#4A90E2",
              tension: 0.1,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw.y}`,
        },
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Patients",
        },
        min: 0,
        max: 300,
      },
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "MM/dd/yyyy", // Corrected format
        },
        title: {
          display: true,
          text: "Date",
        },
      },
    },
  };

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="shadow-black shadow-sm rounded-md my-6 p-4 flex mx-1 flex-col items-center w-full max-w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">
        Patient/Day
      </h1>
      <div className="w-full max-w-5xl h-60 md:h-80 lg:h-96 flex justify-center items-center">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default GraphsAdmin;
