import React from "react";
import speech from "../assets/speech.jpg";
import { MdOutlineDownloading } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { IoWater } from "react-icons/io5"; // Corrected icon import

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Background Image with Animation */}
      <div className="w-full overflow-hidden -mb-12 md:-mb-20 lg:-mb-24">
        <img
          className="w-full h-auto max-h-[750px] object-cover object-center animate-zoom"
          src={speech}
          alt="Speech"
        />
      </div>

      {/* Buttons */}
      <div className="rounded-t-[50px] md:rounded-t-[75px] lg:rounded-t-[100px] pt-10 bg-gray-100">
        <div className="flex flex-wrap justify-center items-center gap-4 px-10">
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-44 md:w-52 lg:w-64 bg-indigo-900 text-white font-bold rounded-full
    transition-transform transform-gpu hover:-tr hover:bg-gray-100nslate-y-1 hover:shadow-xl hover:bg-indigo-700"
          >
            <p className="text-sm sm:text-md md:text-md lg:text-lg">
              Book Appointment
            </p>
          </button>
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-72 md:w-80 lg:w-96 bg-indigo-900 text-white font-bold rounded-full
    transition-transform transform-gpu hover:-tr hover:bg-gray-100nslate-y-1 hover:shadow-xl hover:bg-indigo-700"
          >
            <p className="text-sm sm:text-md md:text-md lg:text-lg">
              Book Teleconsultation Appointment
            </p>
          </button>
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 w-44 md:w-52 lg:w-64 bg-indigo-900 text-white font-bold rounded-full
    transition-transform transform-gpu hover:-tr hover:bg-gray-100nslate-y-1 hover:shadow-xl hover:bg-indigo-700"
          >
            <p className="text-sm sm:text-md md:text-md lg:text-lg">
              Scan and Share
            </p>
          </button>
        </div>

        <section className="container p-6 mx-auto space-y-3 text-gray-700 dark:text-gray-800">
          <h4 className="text-xl font-bold capitalize md:text-3xl text-center">
            Other Facilities
          </h4>

          <div className="flex items-center py-4 justify-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-cols-2 md:gap-6 sm:grid-cols-2">
              <div
                className="h-36 transition-transform transform-gpu hover:-translate-y-1 hover:bg-gray-100 shadow-md hover:shadow-xl
               rounded-lg bg-gray-100 p-8 flex flex-col items-center"
              >
                <MdOutlineDownloading size={40} className="mb-4" />
                <p className="text-lg">e-OPD Card</p>
              </div>
              <div
                className="h-36 transition-transform transform-gpu hover:-translate-y-1 hover:bg-gray-100 shadow-md hover:shadow-xl
               rounded-lg bg-gray-100 p-8 flex flex-col items-center"
              >
                <RiSecurePaymentFill size={40} className="mb-4" />
                <p className="text-lg">Payments</p>
              </div>
              <div
                className="h-36 transition-transform transform-gpu hover:-translate-y- hover:bg-gray-100 shadow-md hover:shadow-xl
               rounded-lg bg-gray-100 p-8 flex flex-col items-center"
              >
                <TbReport size={40} className="mb-4" />
                <p className="text-lg">Lab Reports</p>
              </div>
              <div
                className="h-36 transition-transform transform-gpu hover:-translate-y- hover:bg-gray-100 shadow-md hover:shadow-xl
               rounded-lg bg-gray-100 p-8 flex flex-col items-center"
              >
                <IoWater size={40} className="mb-4" />{" "}
                {/* Corrected icon usage */}
                <p className="text-lg">Blood Availability</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
