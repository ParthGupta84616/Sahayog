import React from 'react';
import speech from '../assets/speech.jpg'; // Import the image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import RippleBackground from './RippleBackground'; // Import the RippleBackground component

const WelcomeSection = () => {
  return (
    <div className="relative">
      <RippleBackground /> 
      <div className="relative z-10 bg-[#cccccc] text-black py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-2 md:mb-0 text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight mb-4">
              Welcome to{' '}
              <span className="bg-gradient-to-r text-5xl from-yellow-800 to-orange-400 text-transparent bg-clip-text">
                SAHAYOG
              </span>
            </h2>
            <div className="flex flex-row justify-center items-center">
              <p className="text-wrap text-xl py-2 mb-4 lg:mr-16">
                "Streamline Speech Therapy with Sahayog: Automated, AI-Driven
                Clinical Workflow for Enhanced Patient Care."
              </p>
            </div>
            <Link
              to="/login"
              className="bg-[#008000] font-bold py-3 px-6 rounded hover:bg-indigo-600 text-white"
            >
              Get Started
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative w-full h-[350px] lg:h-[650px] lg:mb-8 mb-8 p-4 bg-cover bg-center flex flex-col justify-center items-center">
              <img src={speech} alt="Hero" className="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
