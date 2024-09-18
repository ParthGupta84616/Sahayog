import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2024-09-09", patients: 108 },
  { date: "2024-09-10", patients: 246 },
  { date: "2024-09-11", patients: 145 },
  { date: "2024-09-12", patients: 109 },
  { date: "2024-09-13", patients: 273 },
  { date: "2024-09-14", patients: 69 },
  { date: "2024-09-15", patients: 168 },
  { date: "2024-09-16", patients: 134 },
  { date: "2024-09-17", patients: 108 },
  { date: "2024-09-18", patients: 78 },
];

const PatientChart = () => {
  return (
    <div className="w-full h-96 bg-gray-100 p-4 rounded-lg mb-36">
      <div className="text-center mt-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 lg:mb-8">
          Patient/Day
        </h1>
        <span className="text-gray-600 font-semibold">
          Number of Patients Over Last 10 Days
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="patients"
            stroke="#0000ff"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PatientChart;
