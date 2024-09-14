import React from "react";
import Card from "../components/Card";
import report from '../assets/report.webp'

const Dashboard = () => {
  return (
    <div className="min-h-full bg-gray-100 p-8">
       <div class="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5" data-aos="fade-right" data-aos-duration="800">
          <div class="pr-2 md:mb-14 py-14 md:py-0">
            <h1 class="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl"><span class="block w-full">Optimizing Access to Healthcare Services</span></h1>
            <p class="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
            Obtaining an OPD appointment, lab results, and blood availability in any government hospital is now simple and accessible online.
            </p>
            <div class="mt-4">
              <a href="#contact" class="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group"><span>Explore More</span> </a>
            </div>
          </div>
  
          <div class="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
            <img id="heroImg1" class="transition-all duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0 opacity-65" src={report} alt="report image" width="550" height="488"/>
          </div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Admin Dashboard"
          description="Access admin features and settings."
          className="w-1/2"
          route="/dashadmin"
        />
        <Card
          title="Supervisor Dashboard"
          description="Access superuser features and settings."
          className="w-1/2"
          route="/dashsuper"
        />
        <Card
          title="Therapist Dashboard"
          description="Access therapist features and settings."
          className="w-1/2"
          route="/dashtherapist"
        />
        <Card
          title="Patient Dashboard"
          description="Access patient features and settings."
          className="w-1/2"
          route="/dashpatient"
        />
      </div>
    </div>
  );
};

export default Dashboard;
