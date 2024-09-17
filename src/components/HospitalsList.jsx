// Hospitals.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const hospitals = [
  { id: 1, hp: "Bhimrao Ambedkar District Hospital Shajapur" },
  { id: 2, hp: "Bundelkhand Medical College Sagar" },
  { id: 3, hp: "CHC, NASRULLAGANJ, SEHORE" },
  { id: 4, hp: "CIVIL HOSPITAL MAIHAR" },
  { id: 5, hp: "Community Health Center Budni District Sehore" },
  { id: 6, hp: "COMMUNITY HEALTH CENTER, SHYAMPUR, DISTRICT SEHORE" },
  { id: 7, hp: "Composite Hospital Crpf Bhopal" },
  { id: 8, hp: "Distrcit Hospital Anuppur" },
  { id: 9, hp: "Distrcit Hospital chhindwara" },
  { id: 10, hp: "Distrcit Hospital Narmadapuram" },
  { id: 11, hp: "Distrcit hospital raisen" },
  { id: 12, hp: "Distrcit Hospital Ujjain" },
  { id: 13, hp: "district bhoj hospital dhar" },
  { id: 14, hp: "District hodpital Burhanpur" },
  { id: 15, hp: "District Hospital Alirajpur" },
  { id: 16, hp: "District Hospital Ashoknagar" },
  { id: 17, hp: "District Hospital Barwani" },
  { id: 18, hp: "district hospital betul" },
  { id: 19, hp: "District Hospital Bhind,M.P." },
  { id: 20, hp: "District Hospital Chhatarpur" },
  { id: 21, hp: "District hospital damoh" },
  { id: 22, hp: "District Hospital Datia" },
  { id: 23, hp: "DISTRICT HOSPITAL DINDORI" },
  { id: 24, hp: "District Hospital Guna" },
  { id: 25, hp: "District Hospital Harda" },
  { id: 26, hp: "District Hospital Indore" },
  { id: 27, hp: "District Hospital Jhabua" },
  { id: 28, hp: "District Hospital Katni" },
  { id: 29, hp: "District hospital Khandwa" },
  { id: 30, hp: "District Hospital Khargone" },
  { id: 31, hp: "District Hospital Morar , Gwalior" },
  { id: 32, hp: "District Hospital Morena" },
  { id: 33, hp: "District Hospital Narsinghpur" },
  { id: 34, hp: "District Hospital Panna" },
  { id: 35, hp: "District hospital Rajgarh" },
  { id: 36, hp: "District Hospital Ratlam" },
  { id: 37, hp: "District Hospital Sagar" },
  { id: 38, hp: "district hospital sehore" },
  { id: 39, hp: "District Hospital Sheopur" },
  { id: 40, hp: "District Hospital Shivpuri" },
  { id: 41, hp: "District Hospital Sidhi" },
  { id: 42, hp: "District Hospital Singrauli" },
  { id: 43, hp: "District Hospital Umaria" },
  { id: 44, hp: "District Hospital Vidisha" },
  { id: 45, hp: "Dr. Rajendra prasad Hospital Tikamgarh" },
  { id: 46, hp: "Indra Gandhi Distrcit Hospital Mandsaur" },
  { id: 47, hp: "J.P Hospital district bhopal" },
  { id: 48, hp: "mahatma gandhi jila chikitsalay dewas" },
  { id: 49, hp: "M.G.M. Medical College and associated Hospitals, Indore" },
  { id: 50, hp: "Netaji Subhash Chandra Bose Medical college Jabalpur" },
  { id: 51, hp: "sardar vallabhbhai patel district hospital satna" },
  { id: 52, hp: "Seth Govind Das Distrcit Hospital Jabalpur" },
  { id: 53, hp: "shaheed bhagat singh district hospital balaghat" },
  { id: 54, hp: "shri kushabhau thakre district hospital shahdol" },
  { id: 55, hp: "Vijyaraje sindhiya Distrcit Hospital Neemuch" },
];

const HospitalsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.hp.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">List of Hospitals</h1>

      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 border border-gray-300 rounded-lg shadow-sm"
        />
      </div>

      {/* Hospitals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredHospitals.map(hospital => (
          <div
            key={hospital.id}
            className="p-2 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition ease-in-out duration-300"
          >
            <Link
              to={`/appointment/${encodeURIComponent(hospital.hp)}`}
              className="text-gray-800 hover:underline"
            >
              {hospital.hp}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalsList;