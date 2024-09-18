import React from "react";

import WelcomeSection from "../components/WelcomeSection";
import OtherFacilities from "../components/OtherFacilities";
import CoreFeatures from "../components/CoreFeatures";
import WorkFlow from "../components/WorkFlow";
import Highlight from "../components/Highlight";
import Testimonials from "../components/Testimonials";
import HomeGraph from "../components/HomeGraph";

const Home = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <WelcomeSection />
      <OtherFacilities />
      <CoreFeatures />
      <WorkFlow />
      <Testimonials />
      <Highlight />
      <HomeGraph />
    </div>
  );
};

export default Home;
