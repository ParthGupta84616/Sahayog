import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState(""); // For patient signup
  const [role, setRole] = useState(""); // For staff signup
  const [staffNumber, setStaffNumber] = useState(""); // For staff number input
  const [isStaff, setIsStaff] = useState(false); // Track if the user is a staff member
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setIsStaff(selectedRole !== "patient"); // If role is not patient, it's staff
    if (selectedRole === "patient") {
      setStaffNumber(""); // Clear staff number if switching to patient
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const newUser = {
      mobileNumber,
      otp,
      name: isStaff ? undefined : name, // Patients will have a name
      role: isStaff ? role : undefined, // Staff will have a role
      staffNumber: isStaff ? staffNumber : undefined, // Staff will have a staff number
    };

    // Store user in local storage
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Sign up successful!");
    navigate("/login"); // Redirect to login after signup
  };

  const handleUseTestData = () => {
    // Predefined test data
    const testData = {
      admin: {
        mobileNumber: "1234567891",
        otp: "123456",
        name: "Mayank",
        staffNumber: "ad1234",
      },
      supervisor: {
        mobileNumber: "1234567892",
        otp: "123456",
        name: "Mohit",
        staffNumber: "su1234",
      },
      therapist: {
        mobileNumber: "1234567893",
        otp: "123456",
        name: "Namish",
        staffNumber: "th1234",
      },
      patient: {
        mobileNumber: "1234567894",
        otp: "123456",
        name: "Patient1",
      },
    };

    // Set test data based on role
    if (role in testData) {
      const data = testData[role];
      setMobileNumber(data.mobileNumber);
      setOtp(data.otp);
      setName(data.name || "");
      setStaffNumber(data.staffNumber || "");
    } else {
      alert("Please select a role to use test data.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <label className="block mb-2">
          Role:
          <select
            value={role}
            onChange={handleRoleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="therapist">Therapist</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <label className="block mb-2">
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </label>
        <label className="block mb-2">
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </label>
        {isStaff && (
          <>
            <label className="block mb-2">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </label>
            <label className="block mb-2">
              Staff Number:
              <input
                type="text"
                value={staffNumber}
                onChange={(e) => setStaffNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                required
              />
            </label>
          </>
        )}
        {!isStaff && (
          <label className="block mb-2">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </label>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handleUseTestData}
          className="w-full py-2 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        >
          Use Test Data
        </button>
      </form>
    </div>
  );
};

export default Signup;
