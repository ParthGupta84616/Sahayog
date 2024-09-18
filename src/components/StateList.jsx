import React, { useState } from "react";
import { Link } from "react-router-dom";

// State Data
const indianStatesAndUTs = [
  { id: 1, state: "Andhra Pradesh" },
  { id: 2, state: "Arunachal Pradesh" },
  { id: 3, state: "Assam" },
  { id: 4, state: "Bihar" },
  { id: 5, state: "Chhattisgarh" },
  { id: 6, state: "Goa" },
  { id: 7, state: "Gujarat" },
  { id: 8, state: "Haryana" },
  { id: 9, state: "Himachal Pradesh" },
  { id: 10, state: "Jharkhand" },
  { id: 11, state: "Karnataka" },
  { id: 12, state: "Kerala" },
  { id: 13, state: "Madhya Pradesh" },
  { id: 14, state: "Maharashtra" },
  { id: 15, state: "Manipur" },
  { id: 16, state: "Meghalaya" },
  { id: 17, state: "Mizoram" },
  { id: 18, state: "Nagaland" },
  { id: 19, state: "Odisha" },
  { id: 20, state: "Punjab" },
  { id: 21, state: "Rajasthan" },
  { id: 22, state: "Sikkim" },
  { id: 23, state: "Tamil Nadu" },
  { id: 24, state: "Telangana" },
  { id: 25, state: "Tripura" },
  { id: 26, state: "Uttar Pradesh" },
  { id: 27, state: "Uttarakhand" },
  { id: 28, state: "West Bengal" },
  { id: 29, state: "Andaman and Nicobar Islands" },
  { id: 30, state: "Chandigarh" },
  { id: 31, state: "Dadra and Nagar Haveli and Daman and Diu" },
  { id: 32, state: "Lakshadweep" },
  { id: 33, state: "Delhi" },
  { id: 34, state: "Puducherry" },
  { id: 35, state: "Ladakh" },
  { id: 36, state: "Jammu and Kashmir" },
];

// AFMS Data
const AFMS = [
  { id: 1, name: "Base Hospital Delhi", location: "Delhi" },
  {
    id: 2,
    name: "Command Hospital Air Force Bangalore (CHAFB)",
    location: "Bangalore",
  },
  { id: 3, name: "Command Hospital SC Pune", location: "Pune" },
  { id: 4, name: "INHS Asvini", location: "Mumbai" },
];

// AIIMS Data
const AIIMS = [
  { id: 1, name: "AIIMS New Delhi", location: "New Delhi", state: "Delhi" },
  { id: 2, name: "AIIMS Bathinda", location: "Bathinda", state: "Punjab" },
  {
    id: 3,
    name: "AIIMS Bhubaneswar",
    location: "Bhubaneswar",
    state: "Odisha",
  },
  { id: 4, name: "AIIMS Patna", location: "Patna", state: "Bihar" },
  { id: 5, name: "AIIMS Raipur", location: "Raipur", state: "Chhattisgarh" },
  {
    id: 6,
    name: "All India Institute of Ayurveda, New Delhi",
    location: "New Delhi",
    state: "Delhi",
  },
  {
    id: 7,
    name: "All India Institute of Medical Sciences, Deoghar",
    location: "Deoghar",
    state: "Jharkhand",
  },
  {
    id: 8,
    name: "All India Institute of Medical Sciences, Mangalagiri",
    location: "Mangalagiri",
    state: "Andhra Pradesh",
  },
  {
    id: 9,
    name: "All India Institute of Medical Sciences, Nagpur",
    location: "Nagpur",
    state: "Maharashtra",
  },
  {
    id: 10,
    name: "All India Institute of Medical Sciences, Raebareli",
    location: "Raebareli",
    state: "Uttar Pradesh",
  },
  {
    id: 11,
    name: "All India Institute of Medical Sciences, Rajkot",
    location: "Rajkot",
    state: "Gujarat",
  },
  {
    id: 12,
    name: "All India Institute of Medical Sciences, Rishikesh",
    location: "Rishikesh",
    state: "Uttarakhand",
  },
  {
    id: 13,
    name: "All India Institute of Medical Sciences, Bhopal",
    location: "Bhopal",
    state: "Madhya Pradesh",
  },
];

const StatesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("state");

  const filteredStates = indianStatesAndUTs.filter(({ state }) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAIIMS = AIIMS.filter(
    ({ name, location, state }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAFMS = AFMS.filter(
    ({ name, location }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">States & UTs</h1>

      {/* Tabs for State, AIIMS, Defence */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 text-gray-600 focus:outline-none ${
            activeTab === "state" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("state")}
        >
          STATE
        </button>
        <button
          className={`px-4 py-2 text-gray-600 focus:outline-none ${
            activeTab === "aiims" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("aiims")}
        >
          AIIMS
        </button>
        <button
          className={`px-4 py-2 text-gray-600 focus:outline-none ${
            activeTab === "defence" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("defence")}
        >
          DEFENCE(AFMS)
        </button>
      </div>

      {/* Search bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition ease-in-out duration-300"
        />
      </div>

      {/* States list in a grid */}
      {activeTab === "state" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStates.map(({ id, state }) => (
            <div
              key={id}
              className="p-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-200 transition ease-in-out duration-300"
            >
              {id === 13 ? (
                <Link to="/hospitalslist" className="text-gray-800">
                  {state}
                </Link>
              ) : (
                <span>{state}</span>
              )}
            </div>
          ))}
        </div>
      )}

      {/* AIIMS list */}
      {activeTab === "aiims" && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredAIIMS.map(({ id, name, location, state }) => (
            <div
              key={id}
              className="p-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300"
            >
              <Link to={`/appointment/${encodeURIComponent(name)}`}>
                <div>{name}</div>
                <div className="text-gray-500">
                  {location}, {state}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Defence(AFMS) list */}
      {activeTab === "defence" && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {" "}
          {/* Fixed this line */}
          {filteredAFMS.map(({ id, name, location }) => (
            <div
              key={id}
              className="p-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300"
            >
              <Link to={`/appointment/${encodeURIComponent(name)}`}>
                <div>{name}</div>
                <div className="text-gray-500">{location}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatesList;
