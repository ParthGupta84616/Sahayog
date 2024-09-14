import React from "react";
import SAH from "../assets/Sahayog-full.png";
import { Link } from "react-router-dom";

const img1 = "https://ors.gov.in/orsportal/assets/images/health.png";
const img2 = "https://ors.gov.in/orsportal/assets/images/india.png";
const img3 = "https://ors.gov.in/orsportal/assets/icons/digital.png";
const img4 = "https://ors.gov.in/orsportal/assets/icons/nic_logo.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-700 py-6">
      <div className="container mx-auto px-4">
        {/* Image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex justify-center">
            <img
              width="240"
              alt="Health"
              className="max-w-full h-12 md:h-14"
              src={img1}
            />
          </div>
          <div className="flex justify-center">
            <img
              width="200"
              alt="India"
              className="max-w-full h-12 md:h-14"
              src={img2}
            />
          </div>
          <div className="flex justify-center">
            <img
              width="160"
              alt="Digital"
              className="max-w-full h-12 md:h-14"
              src={img3}
            />
          </div>
          <div className="flex justify-center">
            <img
              width="240"
              alt="NIC Logo"
              className="max-w-full h-12 md:h-14"
              src={img4}
            />
          </div>
        </div>
        {/* Logo and copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-6">
          <Link to="/" className="flex items-center text-white mb-4 md:mb-0">
            <img src={SAH} alt="Sahayog logo" className="w-60 md:w-96 h-auto" />
          </Link>
          <div className="text-center text-white">
            &copy; 2024 Sahayog. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
