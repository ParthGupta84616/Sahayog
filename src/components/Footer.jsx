import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 py-4">
      <div className="container-fluid flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center mb-2">
          <img
            alt="Health"
            className="max-w-full h-auto"
            src="../../orsportal/assets/images/health.png"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center mb-2">
          <img
            width="190"
            alt="India"
            className="max-w-full h-auto"
            src="../../orsportal/assets/images/india.png"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center mb-2">
          <img
            width="150"
            alt="Digital"
            className="max-w-full h-auto"
            src="../../orsportal/assets/icons/digital.png"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-center mb-2">
          <img
            width="200"
            alt="NIC Logo"
            className="max-w-full h-auto"
            src="../../orsportal/assets/icons/nic_logo.png"
          />
        </div>
      </div>
      <div className="flex justify-center py-2">
        <div className="text-center text-white">
          {/* This div is empty but can be used for additional content if needed */}
        </div>
      </div>
      <div className="flex justify-center py-2">
        <div className="text-center text-white">
          &copy; 2024 Sahayog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
