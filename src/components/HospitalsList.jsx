// Hospitals.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hospitals = [
  { id: 1, hp: "Bhimrao Ambedkar District Hospital Shajapur" },
  { id: 2, hp: "Bundelkhand Medical College Sagar" },
  { id: 3, hp: "CHC, Nasrullaganj, Sehore" },
  { id: 4, hp: "Civil Hospital Maihar" },
  { id: 5, hp: "Community Health Center Budni District Sehore" },
  { id: 6, hp: "Community Health Center, Shyampur, District Sehore" },
  { id: 7, hp: "Composite Hospital CRPF Bhopal" },
  { id: 8, hp: "District Hospital Anuppur" },
  { id: 9, hp: "District Hospital Chhindwara" },
  { id: 10, hp: "District Hospital Narmadapuram" },
  { id: 11, hp: "District Hospital Raisen" },
  { id: 12, hp: "District Hospital Ujjain" },
  { id: 13, hp: "District Bhoj Hospital Dhar" },
  { id: 14, hp: "District Hospital Burhanpur" },
  { id: 15, hp: "District Hospital Alirajpur" },
  { id: 16, hp: "District Hospital Ashoknagar" },
  { id: 17, hp: "District Hospital Barwani" },
  { id: 18, hp: "District Hospital Betul" },
  { id: 19, hp: "District Hospital Bhind, M.P." },
  { id: 20, hp: "District Hospital Chhatarpur" },
  { id: 21, hp: "District Hospital Damoh" },
  { id: 22, hp: "District Hospital Datia" },
  { id: 23, hp: "District Hospital Dindori" },
  { id: 24, hp: "District Hospital Guna" },
  { id: 25, hp: "District Hospital Harda" },
  { id: 26, hp: "District Hospital Indore" },
  { id: 27, hp: "District Hospital Jhabua" },
  { id: 28, hp: "District Hospital Katni" },
  { id: 29, hp: "District Hospital Khandwa" },
  { id: 30, hp: "District Hospital Khargone" },
  { id: 31, hp: "District Hospital Morar, Gwalior" },
  { id: 32, hp: "District Hospital Morena" },
  { id: 33, hp: "District Hospital Narsinghpur" },
  { id: 34, hp: "District Hospital Panna" },
  { id: 35, hp: "District Hospital Rajgarh" },
  { id: 36, hp: "District Hospital Ratlam" },
  { id: 37, hp: "District Hospital Sagar" },
  { id: 38, hp: "District Hospital Sehore" },
  { id: 39, hp: "District Hospital Sheopur" },
  { id: 40, hp: "District Hospital Shivpuri" },
  { id: 41, hp: "District Hospital Sidhi" },
  { id: 42, hp: "District Hospital Singrauli" },
  { id: 43, hp: "District Hospital Umaria" },
  { id: 44, hp: "District Hospital Vidisha" },
  { id: 45, hp: "Dr. Rajendra Prasad Hospital Tikamgarh" },
  { id: 46, hp: "Indra Gandhi District Hospital Mandsaur" },
  { id: 47, hp: "J.P Hospital District Bhopal" },
  { id: 48, hp: "Mahatma Gandhi Jila Chikitsalay Dewas" },
  { id: 49, hp: "M.G.M. Medical College And Associated Hospitals, Indore" },
  { id: 50, hp: "Netaji Subhash Chandra Bose Medical College Jabalpur" },
  { id: 51, hp: "Sardar Vallabhbhai Patel District Hospital Satna" },
  { id: 52, hp: "Seth Govind Das District Hospital Jabalpur" },
  { id: 53, hp: "Shaheed Bhagat Singh District Hospital Balaghat" },
  { id: 54, hp: "Shri Kushabhau Thakre District Hospital Shahdol" },
  { id: 55, hp: "Vijyaraje Sindhiya District Hospital Neemuch" },
];

const HospitalsList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHospitals = Hospitals.filter((Hospital) =>
    Hospital.hp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">List of Hospitals</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search Hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Hospitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHospitals.map((Hospital) => (
          <div
            key={Hospital.id}
            className="p-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300"
          >
            <Link
              to={`/appointment/${encodeURIComponent(Hospital.hp)}`}
              className="text-gray-800 hover:underline"
            >
              {Hospital.hp}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;
