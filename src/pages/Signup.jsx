import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [staffNumber, setStaffNumber] = useState("");
  const [isStaff, setIsStaff] = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    setIsStaff(selectedRole !== "patient");
    if (selectedRole === "patient") {
      setStaffNumber("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      mobileNumber,
      otp,
      name: isStaff ? undefined : name,
      role: isStaff ? role : undefined,
      staffNumber: isStaff ? staffNumber : undefined,
    };
    localStorage.setItem("user", JSON.stringify(newUser));
    alert("Sign up successful!");
    navigate("/login");
  };

  const handleUseTestData = () => {
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
        className="flex flex-col justify-between bg-[#72a0a0] p-8 rounded-2xl shadow-md w-full max-w-[500px] h-auto min-h-[700px] border-2 border-[#5f6d6d]"
      >
        {" "}
        <h2 className="text-[#026969] text-3xl font-bold mb-4">Sign Up</h2>
        <label className="block mb-2 text-lg">
          Role:
          <select
            value={role}
            onChange={handleRoleChange}
            className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
            required
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="supervisor">Supervisor</option>
            <option value="therapist">Therapist</option>
            <option value="patient">Patient</option>
          </select>
        </label>
        <label className="block mb-2 text-lg">
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
            required
          />
        </label>
        <label className="block mb-2 text-lg">
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
            required
          />
        </label>
        {isStaff && (
          <>
            <label className="block mb-2 text-lg">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
                required
              />
            </label>
            <label className="block mb-2 text-lg">
              Staff Number:
              <input
                type="text"
                value={staffNumber}
                onChange={(e) => setStaffNumber(e.target.value)}
                className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
                required
              />
            </label>
          </>
        )}
        {!isStaff && (
          <label className="block mb-2 text-lg">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full h-14 bg-[#fafafa] px-3 py-2 border border-[#5f6d6d] rounded-lg shadow-sm focus:outline-none focus:ring-[#006666] focus:border-[#006666]"
              required
            />
          </label>
        )}
        <button
          type="submit"
          className="w-full py-2 h-14 text-xl mt-4 bg-[#006666] text-white rounded-md hover:bg-[#004d4d]"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handleUseTestData}
          className="w-full py-2 h-14  text-xl mt-4 bg-[#301010] text-white rounded-md hover:bg-[#502020]"
        >
          Use Test Data
        </button>
      </form>
    </div>
  );
};

export default Signup;
