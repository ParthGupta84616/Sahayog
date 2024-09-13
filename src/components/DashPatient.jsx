import React from "react";
import GraphsAdmin from "./GraphsAdmin";

// Card component to avoid redundancy
const Card = ({ title, count }) => (
  <div className="md:w-1/2 lg:w-1/3 mb-4">
    <div className=" shadow-sm shadow-black p-6 rounded-md mx-1">
      <h1 className="text-lg font-medium text-gray-900 mb-3">{title}</h1>
      <p className="leading-relaxed mb-3 text-xl font-semibold">{count}</p>
      <div className="flex items-center">
        <a
          href="#!" // Replace with actual URL or route if needed
          className="text-indigo-500 inline-flex items-center"
          aria-label={`Go to ${title}`}
        >
          Go to
          <svg
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

const DashaPatient = () => {
  return (
    <div className="container mx-auto py-8 flex flex-wrap justify-center">
      <Card title="Upcoming Session" count="11" />
      <Card title="Current Progress" count="16" />
      <Card title="Previous Cases" count="10" />
      <Card title="Contact supervisor" count="10" />
      <Card title="Report/Feedback" count="10" />
      <GraphsAdmin />
    </div>
  );
};

export default DashaPatient;
