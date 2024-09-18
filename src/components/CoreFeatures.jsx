import React from "react";
import { FaComments, FaLock, FaBrain, FaChartBar } from "react-icons/fa";

const features = [
  {
    icon: <FaBrain className="text-[#004d4d] text-5xl" />,
    title: "AI-driven Therapy Recommendations",
    description:
      "Leverage AI to analyze patient data and provide personalized therapy recommendations for more effective treatment.",
  },
  {
    icon: <FaLock className="text-[#004d4d] text-5xl" />,
    title: "Secure Patient Data Management",
    description:
      "Ensure that all patient data is protected using GDPR and HIPAA-compliant systems for secure storage and access control.",
  },
  {
    icon: <FaChartBar className="text-[#004d4d] text-5xl" />,
    title: "Progress Tracking",
    description:
      "Track patient progress in real-time with detailed analytics and reports to ensure continuous improvement and accountability.",
  },
  {
    icon: <FaComments className="text-[#004d4d] text-5xl" />,
    title: "Real-time Communication",
    description:
      "Enable seamless communication between therapists, supervisors, and patients to ensure timely support and feedback.",
  },
];

const CoreFeatures = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#066969]">
            Core Features
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-700">
            Our platform is packed with essential features that enhance the
            therapy experience for both patients and therapists.
          </p>
        </div>
        <hr className="my-6 mx-auto w-full border-1 border-[#066969]" />

        <div className="flex flex-col gap-8 pb-8 pt-4 justify-center">
          {/* Flex container for feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-[#72a0a0] p-6 rounded-[35px] text-center border-2 border-[#5f6d6d]"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#006666]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base lg:text-lg text-[#fbfbfb]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
