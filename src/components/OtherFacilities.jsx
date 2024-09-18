import React from "react";
import { MdOutlineDownloading } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { Link } from "react-router-dom";

const OtherFacilities = () => {
  return (
    <div className="pt-10 bg-gray-100">
      <div className="flex flex-wrap justify-center items-center gap-4 px-10 pt-8">
        <button
          className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-72 md:w-80 lg:w-96 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]"
          aria-label="Book Teleconsultation Appointment"
        >
          <p className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
            Book Teleconsultation Appointment
          </p>
        </button>
        <Link
          to="/bookapp"
          className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-44 md:w-52 lg:w-64 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]"
          aria-label="Book Appointment"
        >
          <p className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
            Book Appointment
          </p>
        </Link>
        <button
          className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-44 md:w-52 lg:w-64 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]"
          aria-label="Scan and Share"
        >
          <p className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
            Scan and Share
          </p>
        </button>
      </div>

      {/* Other Facilities */}
      <section className="container p-6 mx-auto space-y-3 py-20 lg:py-24">
        <h4 className=" font-bold text-center capitalize text-2xl md:text-3xl py-4  lg:text-4xl text-[#066969]">
          Other Facilities
        </h4>
        <hr className="py-2 mx-auto w-full border-1  border-[#066969]" />

        <div className="flex items-center py-4 justify-center">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-1 md:gap-6 sm:grid-cols-1">
            <a
              href="https://abha.abdm.gov.in/abha/v3"
              className="text-lg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit ABHA"
            >
              <div
                className="h-56 w-72 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl
               justify-center rounded-lg bg-[#adb8b8] text-[#004d4d] p-8 flex flex-col items-center"
              >
                <MdOutlineDownloading className="mb-4 text-5xl" />
                <p className="text-lg font-semibold">ABHA</p>
              </div>
            </a>
            <div
              className="h-56 w-72 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl
             justify-center rounded-lg bg-[#adb8b8] text-[#004d4d] p-8 flex flex-col items-center"
            >
              <RiSecurePaymentFill className="mb-4 text-5xl" />
              <p className="text-lg font-semibold">Payments</p>
            </div>
            <div
              className="h-56 w-72 transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl
             justify-center rounded-lg bg-[#adb8b8] text-[#004d4d] p-8 flex flex-col items-center"
            >
              <TbReport className="mb-4 text-5xl" />
              <p className="text-lg font-semibold">Lab Reports</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherFacilities;
