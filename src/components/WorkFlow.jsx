import React from "react";
import image6 from "../assets/image6.png";

const WorkFlow = () => {
  return (
    <div className="flex items-center bg-[#adb8b8] border-y-2 border-gray-500 m-2  justify-center">
      {/* How does it work */}
        <div className="px-4 mx-auto max-w-full sm:px-6 lg:px-8">
          <img src={image6} alt="workflow image" />
        </div>
    </div>
  );
};

export default WorkFlow;
