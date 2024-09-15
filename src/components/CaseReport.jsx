import React, { useState } from "react";
import ReportTable from "./ReportTable";

const CaseReport = () => {
  // State to handle input fields
  const [formData, setFormData] = useState({
    name: "",
    ca: "",
    ha: "",
    dateOfAssessment: "",
    audition: "",
    speech: "",
    speechIntelligibilityRatingScale: "",
    language: "",
    receptiveLanguageAge: "",
    expressiveLanguageAge: "",
    cognition: "",
    cognitionAge: "",
  });

  // Handler to update form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6  bg-white rounded-lg shadow-md">
      {/* Form Section (as a table) */}
      <h2 className="text-2xl font-extrabold mb-6 text-center text-black">
        Pre and Post Test Assessment Formats
      </h2>
      <table className="min-w-full my-4 bg-white border border-black rounded-lg shadow-lg">
        <tbody>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-bold text-black">Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">CA:</td>
            <td>
              <input
                type="text"
                name="ca"
                value={formData.ca}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">HA:</td>
            <td>
              <input
                type="text"
                name="ha"
                value={formData.ha}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Date of Assessment:
            </td>
            <td>
              <input
                type="text"
                name="dateOfAssessment"
                value={formData.dateOfAssessment}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-bold text-black">
              Audition:
            </td>
            <td>
              <input
                type="text"
                name="audition"
                value={formData.audition}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Categories of Auditory Perception (Use)
            </td>
            <td>
              <input
                type="text"
                name="speech"
                value={formData.speech}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Step:
            </td>
            <td>
              <input
                type="text"
                name="speechIntelligibilityRatingScale"
                value={formData.speechIntelligibilityRatingScale}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-bold text-black">Speech:</td>
            <td>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Speech Intelligibility Rating Scale (Use)
            </td>
            <td>
              <input
                type="text"
                name="receptiveLanguageAge"
                value={formData.receptiveLanguageAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Score:
            </td>
            <td>
              <input
                type="text"
                name="expressiveLanguageAge"
                value={formData.expressiveLanguageAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-bold text-black">
              Language:
            </td>
            <td>
              <input
                type="text"
                name="cognition"
                value={formData.cognition}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Integrated Scale Development (Use)
            </td>
            <td>
              <input
                type="text"
                name="cognitionAge"
                value={formData.cognitionAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Receptive Language Age:
            </td>
            <td>
              <input
                type="text"
                name="cognitionAge"
                value={formData.cognitionAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Expressive Language Age:
            </td>
            <td>
              <input
                type="text"
                name="cognitionAge"
                value={formData.cognitionAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white  border-black">
            <td className="pl-16 py-1 text-md font-bold text-black">
              Cognition:
            </td>
            <td>
              <input
                type="text"
                name="cognitionAge"
                value={formData.cognitionAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
          <tr className="bg-white border-b border-black">
            <td className="pl-16 py-1 text-md font-semibold text-black">
              Integrated Scale Development (Use)Cognition Age:
            </td>
            <td>
              <input
                type="text"
                name="cognitionAge"
                value={formData.cognitionAge}
                onChange={handleChange}
                className="px-3 py-1 my-1 rounded bg-white border border-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-black"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <hr className="border-t-2 border-black" />
      <ReportTable />
    </div>
  );
};

export default CaseReport;
