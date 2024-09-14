import React from "react";

import speech from "../assets/speech.jpg";
import { MdOutlineDownloading } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { FaDroplet } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="flex flex-col ">
      <div className="  max-w-full -mb-28 ">
        <img className="w-full h-[750px] object-center" src={speech} alt="" />
      </div>
      {/* Buttons  */}
      <div className=" bg-white rounded-t-[100px]">
        <div className="flex flex-wrap justify-center gap-8 p-2 my-4">
          <button className="px-4 py-2  bg-[#ca4e00] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:bg-[#fc0f22]">
            <p className="text-md">Book Appointment</p>
          </button>
          <button className="px-8 py-4 bg-[#ca4e00] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:bg-[#fc0f22]">
            <p className="text-md">Book Teleconsultation Appointment</p>
          </button>
          <button className="px-8 py-4 bg-[#ca4e00] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg hover:bg-[#fc0f22]">
            <p className="text-md">Scan and share</p>
          </button>
        </div>
        <section className="container p-6 mx-auto space-y-3  dark:text-black">
          <h4 className="text-xl font-bold text-gray-700 capitalize dark:text-gray-800 md:text-3xl text-center">
            Other Facilities
          </h4>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 md:grid-col-3 md:gap-6 sm:grid-cols-2">
              <div className="h-36 rounded-lg bg-gray-100 p-8 flex flex-col items-center ">
                <MdOutlineDownloading size={40} className="mb-4" />
                <p className="text-lg">e-OPD Card</p>
              </div>
              <div className="h-36 rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                <RiSecurePaymentFill size={40} className="mb-4" />
                <p className="text-lg">Payments</p>
              </div>
              <div className="h-36 rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                <TbReport size={40} className="mb-4" />
                <p className="text-lg">Lab reports</p>
              </div>
              <div className="h-36 rounded-lg bg-gray-100 p-8 flex flex-col items-center">
                <FaDroplet size={40} className="mb-4" />
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
