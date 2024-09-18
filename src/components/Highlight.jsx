import React from "react";
import { FaHospitalUser, FaUsers, FaCalendarDay } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const HighlightCard = ({ icon, title, value }) => (
  <div className="flex flex-col rounded-3xl border-2 bg-[#72a0a0] border-[#5f6d6d] p-4 hover:-translate-y-1 transition-transform transform-gpu shadow-md hover:shadow-xl duration-300 h-full flex-grow">
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/3 p-4 flex items-center justify-center text-[#004d4d]">
        {icon}
      </div>
      <div className="lg:hidden my-2 w-full border-t border-[#066969]" />
      <div className="lg:w-2/3 py-2 px-2 h-full flex flex-col items-start justify-between">
        <div>
          <h2 className="flex-wrap pr-2 text-[#006666] text-lg md:text-lg lg:text-xl font-medium">
            {title}
          </h2>
          <p className="text-[#fbfbfb] text-sm md:text-base lg:text-lg">
            {value}
          </p>
        </div>
        <a
          href="/"
          className="py-2 text-indigo-700 inline-flex items-center text-sm md:text-base lg:text-base"
          aria-label={`More about ${title}`}
        >
          More
          <IoIosArrowForward className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </div>
);

const Highlight = () => (
  <section className="bg-gray-100 body-font">
    <div className="container px-4 sm:px-6 md:px-8 py-12 mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#066969]">
          Highlights
        </h1>
        <hr className="my-6 mx-auto w-full border-1 border-[#066969]" />
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <HighlightCard
          icon={
            <FaHospitalUser className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          }
          title="Number of Hospitals"
          value="716"
        />
        <HighlightCard
          icon={
            <FaUsers className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          }
          title="Number of Therapists"
          value="4261"
        />
        <HighlightCard
          icon={
            <FaCalendarDay className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          }
          title="Total Online Appointments"
          value="10,098,207"
        />
        <HighlightCard
          icon={
            <FaCalendarDay className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />
          }
          title="Online Appointments Taken Today"
          value="3331"
        />
      </div>
    </div>
  </section>
);

export default Highlight;
