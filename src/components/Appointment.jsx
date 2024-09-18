import React from "react";
import { Link, useParams } from "react-router-dom";

const Appointment = () => {
  const { hospitalName, state, location } = useParams();

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Hospital Name */}
      <h1 className="text-lg font-bold text-green-600">
        {decodeURIComponent(hospitalName)}
      </h1>

      {/* Appointment Booking */}
      <p className="mt-2 text-gray-700 font-semibold">Appointment booking</p>

      {/* Consultation Mode */}
      <div className="mt-4">
        <p className="text-gray-600 font-semibold">Select consultation mode</p>
        <Link
          to={`/typeappointment/${encodeURIComponent(hospitalName)}`}
          className="mt-2 border rounded-lg p-4 flex justify-between items-center"
        >
          <div>
            <p className="font-bold">Appointment</p>
            <p className="text-sm text-gray-500">
              (For physical consultation with doctors)
            </p>
          </div>
          <div>
            <span role="img" aria-label="person walking">
              🧍‍♂️
            </span>
          </div>
        </Link>
      </div>

      {/* Existing Appointment Options */}
      <div className="mt-6">
        <p className="text-gray-600 font-semibold">For existing appointment</p>

        {/* Appointment Status */}
        <Link
          to="/login"
          className="mt-2 border rounded-lg p-4 flex justify-between items-center"
        >
          <p>Appointment status</p>
          <span role="img" aria-label="calendar">
            📅
          </span>
        </Link>

        {/* View/Print Appointment Slip */}
        <Link
          to="/login"
          className="mt-2 border rounded-lg p-4 flex justify-between items-center"
        >
          <p>View/Print appointment slip</p>
          <span role="img" aria-label="document">
            📄
          </span>
        </Link>

        {/* Cancel Appointment */}
        <Link
          to="/login"
          className="mt-2 border rounded-lg p-4 flex justify-between items-center"
        >
          <p>Cancel appointment</p>
          <span role="img" aria-label="trash">
            🗑️
          </span>
        </Link>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-between">
        <Link
          to="/hospitalslist"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          ← Previous
        </Link>
        <Link
          to="/bookapp"
          className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md"
        >
          Start Again ↻
        </Link>
      </div>
    </div>
  );
};

export default Appointment;
