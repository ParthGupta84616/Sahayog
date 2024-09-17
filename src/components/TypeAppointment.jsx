import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const AppointmentBooking = () => {
  const [step, setStep] = useState(1); // Tracks the step of the form (1: appointment type, 2: department, 3: calendar)
  const { hospitalName } = useParams();

  // Calendar slot data (mock data)
  const availableSlots = {
    "2024-09-05": "Available",
    "2024-09-12": "All slots are full",
    "2024-09-19": "Holiday",
  };

  const getDayStatus = (date) => {
    return availableSlots[date] || "Slots not opened yet";
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-lg font-bold text-green-600">
        {decodeURIComponent(hospitalName)}
      </h1>

      {step === 1 && (
        <div>
          <div>
            <h2 className="text-md font-bold">Select Appointment Type</h2>
            <div className="mt-4">
              <button
                onClick={() => setStep(2)}
                className="block w-full bg-gray-200 hover:bg-gray-300 text-left p-2 rounded-md mb-2"
              >
                New Appointment{" "}
                <span className="text-sm text-gray-500">
                  (Don't have UHID/Registration Number)
                </span>
              </button>
              <button
                onClick={() => setStep(2)}
                className="block w-full bg-gray-200 hover:bg-gray-300 text-left p-2 rounded-md mb-2"
              >
                Follow-up Appointment{" "}
                <span className="text-sm text-gray-500">
                  (Have UHID/Registration Number)
                </span>
              </button>
            </div>
            <p className="text-red-500 text-xs">
              NOTE: Please check your OPD Card for UHID/Registration Number
            </p>
          </div>
          <div className="mt-6 flex justify-between">
            <Link
              to={`/appointment/${encodeURIComponent(hospitalName)}`}
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
      )}

      {step === 2 && (
        <div>
          <h2 className="text-md font-bold">Department</h2>
          <div className="mt-4">
            <button
              onClick={() => setStep(3)}
              className="block w-full bg-gray-200 hover:bg-gray-300 text-left p-2 rounded-md mb-2"
            >
              Clinical Oncology (CO)
            </button>
            <button
              onClick={() => setStep(3)}
              className="block w-full bg-gray-200 hover:bg-gray-300 text-left p-2 rounded-md mb-2"
            >
              Preventive Oncology (PO)
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="text-lg font-bold">Calendar</h2>
          <h2 className="text-md font-semibold">Choose any available date</h2>
          <div className="grid grid-cols-7 gap-2 mt-4">
            {/* Weekday Headers */}
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day} className="text-center font-bold">
                {day}
              </div>
            ))}

            {/* Empty slots for the previous month (September starts on a Sunday, so no empty slots) */}
            {[...Array(0)].map((_, idx) => (
              <div key={idx}></div>
            ))}

            {/* Days in September */}
            {Array.from({ length: 30 }).map((_, idx) => {
              const day = idx + 1;
              const dateStr = `2024-09-${String(day).padStart(2, "0")}`;
              const status = getDayStatus(dateStr);

              return (
                <div key={day} className="text-center p-2 border">
                  <p>{day}</p>
                  {status === "Available" && (
                    <p className="text-green-500 text-xs">Available</p>
                  )}
                  {status === "All slots are full" && (
                    <p className="text-red-500 text-xs">All slots are full</p>
                  )}
                  {status === "Holiday" && (
                    <p className="text-yellow-500 text-xs">Holiday</p>
                  )}
                  {status === "Slots not opened yet" && (
                    <p className="text-gray-500 text-xs">Slots not opened yet</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {step > 1 && (
        <div className="mt-4">
          <button
            onClick={() => setStep(step - 1)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Previous
          </button>
          <Link
            to="/bookapp"
            className="ml-4 bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Start Again
          </Link>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
