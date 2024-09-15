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
import { FaBrain, FaChartBar } from "react-icons/fa";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
// import { FaUserPlus, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Dr. Emily Smith",
    role: "Speech Therapist",
    text: "This platform has significantly streamlined my workflow and enhanced my ability to provide personalized care to my patients. Highly recommended!",
    image: "path-to-emily-image.jpg", // Replace with actual image path
  },
  {
    name: "John Doe",
    role: "Patient",
    text: "I’ve seen tremendous improvement in my speech therapy sessions thanks to the innovative tools and real-time support provided by this platform.",
    image: "path-to-john-image.jpg", // Replace with actual image path
  },
  {
    name: "Dr. Emily Smith",
    role: "Speech Therapist",
    text: "This platform has significantly streamlined my workflow and enhanced my ability to provide personalized care to my patients. Highly recommended!",
    image: "path-to-emily-image.jpg", // Replace with actual image path
  },
  {
    name: "John Doe",
    role: "Patient",
    text: "I’ve seen tremendous improvement in my speech therapy sessions thanks to the innovative tools and real-time support provided by this platform.",
    image: "path-to-john-image.jpg", // Replace with actual image path
  },
  // Add more testimonials as needed
];

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

  const features = [
    {
      icon: <FaBrain className="text-blue-600 text-5xl" />,
      title: "AI-driven Therapy Recommendations",
      description:
        "Leverage AI to analyze patient data and provide personalized therapy recommendations for more effective treatment.",
    },
    {
      icon: <FaLock className="text-blue-600 text-5xl" />,
      title: "Secure Patient Data Management",
      description:
        "Ensure that all patient data is protected using GDPR and HIPAA-compliant systems for secure storage and access control.",
    },
    {
      icon: <FaChartBar className="text-blue-600 text-5xl" />,
      title: "Progress Tracking",
      description:
        "Track patient progress in real-time with detailed analytics and reports to ensure continuous improvement and accountability.",
    },
    {
      icon: <FaComments className="text-blue-600 text-5xl" />,
      title: "Real-time Communication",
      description:
        "Enable seamless communication between therapists, supervisors, and patients to ensure timely support and feedback.",
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  //   const steps = [
  //     {
  //       icon: <FaUserPlus className="text-blue-600 text-5xl" />,
  //       title: 'Sign Up',
  //       description: 'Create an account and set up your profile to start using our platform. It’s quick and easy to get started.'
  //     },
  //     {
  //       icon: <FaBriefcase className="text-blue-600 text-5xl" />,
  //       title: 'Assign a Case',
  //       description: 'Assign new therapy cases and manage patient information efficiently through our intuitive dashboard.'
  //     },
  //     {
  //       icon: <FaChartLine className="text-blue-600 text-5xl" />,
  //       title: 'Track Progress',
  //       description: 'Monitor patient progress with detailed analytics and real-time updates to ensure effective treatment.'
  //     },
  //     {
  //       icon: <FaRobot className="text-blue-600 text-5xl" />,
  //       title: 'AI-Enhanced Recommendations',
  //       description: 'Receive AI-driven recommendations for personalized therapy plans based on patient data and progress.'
  //     },
  //     {
  //       icon: <FaCheckCircle className="text-blue-600 text-5xl" />,
  //       title: 'Therapy Completion',
  //       description: 'Complete the therapy process with comprehensive reports and follow-up steps to ensure lasting success.'
  //     }
  //   ];

  return (
    <div>
{/* Hero section  */}

      <section className="relative bg-blue-100 h-screen flex items-center justify-center">
        {/* Background Image or Illustration */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('path-to-your-image.jpg')" }} 
        ></div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl px-4">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Revolutionizing Speech and Language Therapy through Technology
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Transforming the therapy process with cutting-edge digital solutions
            that streamline care for patients and therapists alike.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="/get-started"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

{/* Our mission and vision  */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Vision & Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We aim to empower therapists and patients with cutting-edge
              digital tools for personalized, efficient care.
            </p>
          </div>

          {/* Vision and Mission Cards */}
          <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
            {/* Vision Card */}
            <div className="bg-white p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <FaEye className="text-blue-600 text-6xl" /> {/* Vision Icon */}
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
            <div className="bg-white p-8 shadow-lg rounded-lg flex-1 text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-6">
                <FaHandsHelping className="text-blue-600 text-6xl" />{" "}
                {/* Mission Icon */}
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

{/* Our Objectives  */}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Our Objectives</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform is designed to address the key challenges in speech
              and language therapy through innovation and technology.
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 shadow-lg rounded-lg text-center"
              >
                {/* Icon */}
                <div className="mb-4">{objective.icon}</div>
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {objective.title}
                </h3>
                {/* Description */}
                <p className="mt-2 text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Core features  */}

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Core Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform is packed with essential features that enhance the
              therapy experience for both patients and therapists.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-lg rounded-lg text-center"
              >
                {/* Icon */}
                <div className="mb-4">{feature.icon}</div>
                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     
   {/* How does it works  */}

      <section id="works" class="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
              Our AI solution will help you from start to finish
            </p>
          </div>
          <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="500"
                height="500"
                decoding="async"
                data-nimg="1"
                class="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>

            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-12">
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                Sign Up
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                Create an account and set up your profile to start using our platform. It’s quick and easy to get started.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Assign a Case
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                Assign new therapy cases and manage patient information efficiently through our intuitive dashboard.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                Track Progress
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                Monitor patient progress with detailed analytics and real-time updates to ensure effective treatment.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">4</span>
                </div>
                <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                AI-Enhanced Recommendations
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                Receive AI-driven recommendations for personalized therapy plans based on patient data and progress.
                </p>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">5</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                Therapy Completion
                </h3>
                <p class="mt-4 text-base text-gray-400 md:text-lg">
                'Complete the therapy process with comprehensive reports and follow-up steps to ensure lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
      </section>

      {/* Highlights  */}
      <div class="h-screen  flex justify-center items-center">
    <section class="grid gap-6 md:grid-cols-3 p-4 md:p-8 max-w-5xl mx-auto w-full ">
        <div className="flex justify-center it" >
            <h1>Highlights</h1>
            <hr />
            <div class="p-6 bg-white shadow rounded-2xl ">
            <dl class="space-y-2">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Unique views</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-black">192.1k</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
                    <span>32k increase</span>

                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 15.25V6.75H8.75"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17 7L6.75 17.25"></path>
                    </svg>
                </dd>
            </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl ">
            <dl class="space-y-2">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Bounce rate</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-black">21%</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-red-500 dark:text-red-400">
                    <span>7% increase</span>

                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 8.75V17.25H8.75"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17 17L6.75 6.75"></path>
                    </svg>
                </dd>
            </dl>
        </div>

        <div class="p-6 bg-white shadow rounded-2xl">
            <dl class="space-y-2">
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">Average time on page</dt>

                <dd class="text-5xl font-light md:text-6xl dark:text-black">03:12</dd>

                <dd class="flex items-center space-x-1 text-sm font-medium text-green-500 dark:text-green-400">
                    <span>3% increase</span>

                    <svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17.25 15.25V6.75H8.75"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M17 7L6.75 17.25"></path>
                    </svg>
                </dd>
            </dl>
        </div>
        </div>
 
    </section>

</div>

      {/* testitmonial section  */}

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              What Our Users Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Hear from therapists and patients about their experiences with our
              platform.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Slider {...settings} className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 shadow-lg rounded-lg text-center"
              >
                <div className="mb-4 flex justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="mb-4 text-gray-600">
                  <FaQuoteLeft className="text-2xl text-gray-400 inline-block" />
                  <p className="mt-4">{testimonial.text}</p>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
  
  {/* Call to action  */}

      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          {/* Section Header */}
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">
            Take the next step towards enhancing your speech and language
            therapy practice. Choose an option below to get started.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4">
            <a
              href="/demo"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition ease-in-out duration-300 flex items-center"
            >
              Request a Demo
              <FaArrowRight className="ml-2" />
            </a>
            <a
              href="/trial"
              className="bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-green-400 transition ease-in-out duration-300"
            >
              Start Your Free Trial
            </a>
            <a
              href="/contact"
              className="bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-700 transition ease-in-out duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
