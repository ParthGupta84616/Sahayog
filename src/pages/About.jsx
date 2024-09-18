import React from "react";
import { FaEye, FaHandsHelping } from "react-icons/fa";
import {
  FaCloud,
  FaComments,
  FaRobot,
  FaLock,
  FaChartLine,
  FaMapMarkerAlt,
} from "react-icons/fa";
import image2 from "../assets/image2.jpg";

const About = () => {
  const objectives = [
    {
      icon: <FaCloud className="text-[#004d4d] text-5xl" />,
      title: "Digitize the Therapy Process",
      description:
        "Transform manual workflows into a digital, streamlined process to improve efficiency and patient outcomes.",
    },
    {
      icon: <FaComments className="text-[#004d4d] text-5xl" />,
      title: "Enhance Collaboration",
      description:
        "Facilitate better communication between therapists, supervisors, and patients through integrated messaging and feedback loops.",
    },
    {
      icon: <FaRobot className="text-[#004d4d] text-5xl" />,
      title: "Support Therapy with AI",
      description:
        "Leverage AI to provide personalized therapy recommendations and optimize treatment plans for better patient outcomes.",
    },
    {
      icon: <FaLock className="text-[#004d4d] text-5xl" />,
      title: "Ensure Data Privacy & Compliance",
      description:
        "Protect sensitive patient information with GDPR/HIPAA-compliant systems and ensure secure data storage and access controls.",
    },
    {
      icon: <FaChartLine className="text-[#004d4d] text-5xl" />,
      title: "Promote Accountability & Transparency",
      description:
        "Real-time progress tracking, clinical evaluations, and detailed reporting to ensure patients receive the best care.",
    },
    {
      icon: <FaMapMarkerAlt className="text-[#004d4d] text-5xl" />,
      title: "Improve Access to Therapy",
      description:
        "Enable therapists to manage cases effectively, helping more patients receive timely therapy, regardless of geographic location.",
    },
  ];

  return (
    <div>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="object-cover w-full h-full opacity-80"
            src={image2}
            alt="Sahayog Image"
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#036969]">
            Revolutionizing Speech and Language Therapy through Technology
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Transforming the therapy process with cutting-edge digital solutions
            that streamline care for patients and therapists alike.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="/login"
              className="px-6 py-3 bg-[#036969] text-white font-semibold rounded-lg shadow-lg hover:bg-[#338080] transition-colors"
            >
              Get Started
            </a>
            <a
              href="/login"
              className="px-6 py-3 bg-transparent border-2 border-[#036969] text-[#036969] font-semibold rounded-lg hover:bg-[#036969] hover:text-white transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Our Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#066969]">
              Our Vision & Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We aim to empower therapists and patients with cutting-edge
              digital tools for personalized, efficient care.
            </p>
          </div>
          <hr className="my-6 mx-auto w-full border-1 border-[#066969]" />

          <div className="flex flex-col md:flex-row justify-center  space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-[#72a0a0] flex flex-col p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex-grow flex flex-col items-center">
                <FaEye className="text-[#004d4d] text-6xl mb-6" />
                <h3 className="text-2xl font-semibold text-[#006666]">
                  Our Vision
                </h3>
                <p className="mt-4 text-[#fbfbfb]">
                  To create a world where speech and language therapy is
                  accessible, efficient, and personalized through cutting-edge
                  technology. We focus on overcoming challenges in
                  rehabilitation with AI-driven care.
                </p>
              </div>
            </div>
            <div className="bg-[#72a0a0] flex flex-col p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex-grow flex flex-col items-center">
                <FaHandsHelping className="text-[#004d4d] text-6xl mb-6" />
                <h3 className="text-2xl font-semibold text-[#006666]">
                  Our Mission
                </h3>
                <p className="mt-4 text-[#fbfbfb]">
                  Our mission is to empower therapists with a seamless, digital
                  platform that automates administrative tasks, provides
                  AI-driven recommendations, and improves patient care by
                  reducing delays and enhancing treatment efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#066969]">
              Our Objectives
            </h2>
            <p className="mt-4 text-lg text-gray-600 px-14">
              Our platform is designed to address the key challenges in speech
              and language therapy through innovation and technology.
            </p>
          </div>
          <hr className="my-6 mx-auto w-full border-1 border-[#066969]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-[#72a0a0] flex flex-col items-center p-6 shadow-lg rounded-lg text-center border-2 border-[#5f6d6d]"
              >
                <div className="mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold text-[#006666]">
                  {objective.title}
                </h3>
                <p className="mt-2 text-[#fbfbfb]">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
