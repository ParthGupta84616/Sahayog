import React, { createContext, useState, useContext } from 'react';

const SignupContext = createContext();

export const useSignup = () => {
  const context = useContext(SignupContext);
  if (context === undefined) {
    throw new Error('useSignup must be used within a SignupProvider');
  }
  return context;
};

const SignupProvider = ({ children }) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [otpStage, setOtpStage] = useState(false);

  const handleMobileNumberChange = (value) => {
    setMobileNumber(value);
    setOtpStage(true); // Show OTP stage when mobile number changes
  };

  const handleOtpChange = (value) => setOtp(value);
  const handleOtpVerification = () => {
    if (otp === '123456') {
      setIsVerified(true);
      setOtpStage(false); // Hide OTP stage after verification
    }
  };

  const handleNameChange = (value) => setName(value);
  const handleRoleChange = (value) => setRole(value);

  return (
    <SignupContext.Provider
      value={{
        mobileNumber,
        otp,
        isVerified,
        name,
        role,
        otpStage,
        handleMobileNumberChange,
        handleOtpChange,
        handleOtpVerification,
        handleNameChange,
        handleRoleChange,
      }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export default SignupProvider;
