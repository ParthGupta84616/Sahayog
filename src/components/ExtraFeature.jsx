import React from "react";

const ExtraFeature = () => {
  return (
    <div>
      {/* How does it work */}

      <section
        id="works"
        className="relative bg-gray-900 py-10 sm:py-16 lg:py-24"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-white font-extrabold md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 md:text-2xl">
              Our AI solution will help you from start to finish
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-5 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold md:mt-10">
                  Sign Up
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Create an account and set up your profile to start using our
                  platform. It’s quick and easy to get started.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold md:mt-10">
                  Assign a Case
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Assign new therapy cases and manage patient information
                  efficiently through our intuitive dashboard.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold md:mt-10">
                  Track Progress
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Monitor patient progress with detailed analytics and real-time
                  updates to ensure effective treatment.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">4</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold md:mt-10">
                  AI-Enhanced Recommendations
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Receive AI-driven recommendations for personalized therapy
                  plans based on patient data and progress.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">5</span>
                </div>
                <h3 className="mt-6 text-xl text-white font-semibold md:mt-10">
                  Therapy Completion
                </h3>
                <p className="mt-4 text-base text-gray-400 md:text-lg">
                  Complete the therapy process with comprehensive reports and
                  follow-up steps to ensure lasting success.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div> */}
      </section>
    </div>
  );
};

export default ExtraFeature;
