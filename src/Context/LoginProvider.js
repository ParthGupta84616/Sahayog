import React, { createContext, useState, useContext } from "react";

// Create a Context for the login state
const LoginContext = createContext();

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLogin must be used within a LoginProvider");
  }
  return context;
};

// Provider component
export const LoginProvider = ({ children }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpStage, setIsOtpStage] = useState(false);
  const [isRoleAndNameStage, setIsRoleAndNameStage] = useState(false);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  // Handles mobile number input and moves to OTP stage
  const handleMobileNumberChange = (value) => {
    setMobileNumber(value);
    setIsOtpStage(true);
  };

  // Handles OTP input
  const handleOtpChange = (value) => {
    setOtp(value);
  };

  // Verifies the OTP and moves to the role and name input stage if valid
  const handleOtpVerification = () => {
    if (otp === "123456") {
      setIsOtpStage(false);
      setIsRoleAndNameStage(true);
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Updates the role state
  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  // Updates the name and completes the login process
  const handleNameChange = (newName) => {
    setName(newName);
    setUser({ mobileNumber, role, name: newName });
    setIsRoleAndNameStage(false);
  };

  // Logs the user out and resets all states
  const logout = () => {
    setUser(null);
    setMobileNumber("");
    setOtp("");
    setRole("");
    setName("");
    setIsOtpStage(false);
    setIsRoleAndNameStage(false);
  };

  return (
    <LoginContext.Provider
      value={{
        mobileNumber,
        otp,
        isOtpStage,
        isRoleAndNameStage,
        role,
        name,
        user,
        handleMobileNumberChange,
        handleOtpChange,
        handleOtpVerification,
        handleRoleChange,
        handleNameChange,
        logout,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
