import React from "react";
import speech from "../assets/speech.jpg";
import { MdOutlineDownloading } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-{#eff1f1} text-white py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold text-black leading-tight mb-4">
              Welcome to{" "}
              <span className="bg-gradient-to-r text-5xl from-yellow-800 to-orange-400 text-transparent bg-clip-text">
                SAHAYOG
              </span>
            </h2>

            <p className="text-xl text-black mb-4 mr-16 py-2">
              "Streamline Speech Therapy with Sahayog: Automated, AI-Driven
              Clinical Workflow for Enhanced Patient Care."{" "}
            </p>
            <Link
              to="/login"
              className="bg-[#008000] font-bold py-3 px-6 rounded hover:bg-indigo-600 text-white"
            >
              Get Started
            </Link>
          </div>

          <div className="md:w-1/2">
            <div className="relative w-full h-[750px] bg-cover bg-center flex flex-col justify-center items-center">
              <img
                src={speech}
                alt="Hero Image"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="rounded-t-[50px] md:rounded-t-[75px] lg:rounded-t-[100px] pt-10 bg-[#80ffff] -mt-24">
        <div className="flex flex-wrap justify-center items-center gap-4 px-10">
          <Link
            to="/login"
            className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-44 md:w-52 lg:w-64 bg-indigo-900 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-700"
          >
            <p className="text-sm sm:text-md md:text-md lg:text-lg text-center">
              Book Appointment
            </p>
          </Link>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-72 md:w-80 lg:w-96 bg-indigo-900 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-700">
            <p className="text-sm sm:text-md md:text-md lg:text-lg text-center">
              Book Teleconsultation Appointment
            </p>
          </button>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-44 md:w-52 lg:w-64 bg-indigo-900 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-indigo-700">
            <p className="text-sm sm:text-md md:text-md lg:text-lg text-center">
              Scan and Share
            </p>
          </button>
        </div>

        {/* Other Facilities */}
        <section className="container p-6 mx-auto space-y-3 text-gray-700 dark:text-gray-800">
          <h4 className="text-xl font-bold capitalize md:text-3xl text-center">
            Other Facilities
          </h4>
          <div className="flex items-center py-4 justify-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-1 md:gap-6 sm:grid-cols-1">
              <a href="https://abha.abdm.gov.in/abha/v3" className="text-lg">
                <div className="h-36 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                  <MdOutlineDownloading size={40} className="mb-4" />
                  ABHA
                </div>
              </a>
              <div className="h-36 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                <RiSecurePaymentFill size={40} className="mb-4" />
                <p className="text-lg">Payments</p>
              </div>
              <div className="h-36 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                <TbReport size={40} className="mb-4" />
                <p className="text-lg">Lab Reports</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
