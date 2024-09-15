import React from "react";
import { FaComments, FaLock, FaBrain, FaChartBar } from "react-icons/fa";

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

const CoreFeatures = () => {
  return (
    <div>
      {/* Core Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Core Features</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform is packed with essential features that enhance the
              therapy experience for both patients and therapists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8 shadow-lg rounded-lg text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoreFeatures;
