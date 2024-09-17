import React from "react";
import { FaHospitalUser, FaUsers } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

const HighlightCard = ({ icon, title, value }) => (
  <div className="p-4 md:w-1/3">
    <div className="flex rounded-2xl h-full border-2 border-[#5f6d6d]  bg-[#72a0a0] p-8 flex-col">
      <div className="flex items-center mb-3">
        <div className="w-16 h-16 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
          {icon}
        </div>
        <div>
          <h2 className="text-gray-900 text-lg title-font font-medium">
            {title}
          </h2>
          <p className="leading-relaxed text-base">{value}</p>
        </div>
      </div>
      <div className="flex-grow">
        <a href='/' className="mt-3 text-indigo-500 inline-flex items-center">
          {" "}
          More
          <IoIosArrowForward className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </div>
);

const Highlight = () => {
  return (
    <div>
      {/* Highlights  */}
      <section className="text-gray-600 bg-gray-100 body-font">
        <div className="container px-10 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Highlights
            </h1>
            <hr className="mt-6 mx-auto w-1/3" />
          </div>
          <div className="flex flex-wrap -m-4">
            <HighlightCard
              icon={<FaHospitalUser />}
              title="Number of Hospitals"
              value="716"
            />
            <HighlightCard
              icon={
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              }
              title="Online Appointments Taken Today"
              value="3331"
            />
            <HighlightCard
              icon={<FaUsers />}
              title="Total Online Appointments"
              value="10098207"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Highlight;
