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

const About = () => {
  const objectives = [
    {
      icon: <FaCloud className="text-blue-600 text-5xl" />,
      title: "Digitize the Therapy Process",
      description:
        "Transform manual workflows into a digital, streamlined process to improve efficiency and patient outcomes.",
    },
    {
      icon: <FaComments className="text-blue-600 text-5xl" />,
      title: "Enhance Collaboration",
      description:
        "Facilitate better communication between therapists, supervisors, and patients through integrated messaging and feedback loops.",
    },
    {
      icon: <FaRobot className="text-blue-600 text-5xl" />,
      title: "Support Therapy with AI",
      description:
        "Leverage AI to provide personalized therapy recommendations and optimize treatment plans for better patient outcomes.",
    },
    {
      icon: <FaLock className="text-blue-600 text-5xl" />,
      title: "Ensure Data Privacy & Compliance",
      description:
        "Protect sensitive patient information with GDPR/HIPAA-compliant systems and ensure secure data storage and access controls.",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-5xl" />,
      title: "Promote Accountability & Transparency",
      description:
        "Real-time progress tracking, clinical evaluations, and detailed reporting to ensure patients receive the best care.",
    },
    {
      icon: <FaMapMarkerAlt className="text-blue-600 text-5xl" />,
      title: "Improve Access to Therapy",
      description:
        "Enable therapists to manage cases effectively, helping more patients receive timely therapy, regardless of geographic location.",
    },
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="relative  h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://picsum.photos/3000/4500?random=2')" }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Revolutionizing Speech and Language Therapy through Technology
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Transforming the therapy process with cutting-edge digital solutions
            that streamline care for patients and therapists alike.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/get-started"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
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
            <h2 className="text-4xl font-bold text-gray-800">
              Our Vision & Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We aim to empower therapists and patients with cutting-edge
              digital tools for personalized, efficient care.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Vision Card */}
            <div className="bg-white flex flex-col items-center p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <FaEye className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600">
                To create a world where speech and language therapy is
                accessible, efficient, and personalized through cutting-edge
                technology. We focus on overcoming challenges in rehabilitation
                with AI-driven care.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white flex flex-col items-center p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <FaHandsHelping className="text-blue-600 text-6xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600">
                Our mission is to empower therapists with a seamless, digital
                platform that automates administrative tasks, provides AI-driven
                recommendations, and improves patient care by reducing delays
                and enhancing treatment efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Objectives */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Objectives</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform is designed to address the key challenges in speech
              and language therapy through innovation and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 flex flex-col items-center p-6 shadow-lg rounded-lg text-center"
              >
                <div className="mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {objective.title}
                </h3>
                <p className="mt-2 text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
