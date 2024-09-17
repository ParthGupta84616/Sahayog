import React from "react";
// import speech from "../assets/speech.jpg";
import { MdOutlineDownloading } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
import CoreFeatures from "../components/CoreFeatures";
import ExtraFeature from "../components/ExtraFeature";
import Highlight from "../components/Highlight";
import HomeGraph from "../components/HomeGraph";
// import WelcomeSection from "../components/WelcomeSection";
import RippleBackground from "../components/RippleBackground";

const Home = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* <WelcomeSection /> */}
      <RippleBackground />

      {/* Action Buttons */}
      <div className="relative rounded-t-[50px] md:rounded-t-[75px] lg:rounded-t-[100px] pt-10 bg-gray-100 -mt-16">
        <div className="flex flex-wrap justify-center items-center gap-4 px-10">
          <Link
            to="/bookapp"
            className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-44 md:w-52 lg:w-64 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]"
          >
            <a className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
              Book Appointment
            </a>
          </Link>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-72 md:w-80 lg:w-96 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]">
            <p className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
              Book Teleconsultation Appointment
            </p>
          </button>
          <button className="flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-3 lg:py-3 w-44 md:w-52 lg:w-64 bg-[#008080] text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-xl hover:bg-[#006060]">
            <p className="text-md sm:text-lg md:text-lg lg:text-xl text-center">
              Scan and Share
            </p>
          </button>
        </div>

        {/* Other Facilities */}
        <section className="container p-6 mx-auto space-y-3 text-gray-100">
          <h4 className="text-xl font-bold capitalize md:text-3xl text-center">
            Other Facilities
          </h4>
          <div className="flex items-center py-4 justify-center">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 md:grid-cols-1 md:gap-6 sm:grid-cols-1">
              <a href="https://abha.abdm.gov.in/abha/v3" className="text-lg">
                <div className="h-40 w-56  transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-[#adb8b8] text-[#232929] p-8 flex flex-col items-center">
                  <MdOutlineDownloading className="mb-4  text-5xl" />
                  ABHA
                </div>
              </a>
              <div className="h-40 w-56  transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-[#adb8b8] text-[#232929] p-8 flex flex-col items-center">
                <RiSecurePaymentFill className="mb-4  text-5xl" />
                <p className="text-lg">Payments</p>
              </div>
              <div className="h-40 w-56  transition-transform transform-gpu hover:-translate-y-1 shadow-md hover:shadow-xl rounded-lg bg-[#adb8b8] text-[#232929] p-8 flex flex-col items-center">
                <TbReport className="mb-4  text-5xl" />
                <p className="text-lg">Lab Reports</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <CoreFeatures />
      <ExtraFeature />
      <Testimonials />
      <Highlight />
      <HomeGraph />
    </div>
  );
};

export default Home;
