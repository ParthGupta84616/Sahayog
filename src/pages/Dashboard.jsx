import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="w-full bg-red-100 p-8">
      <div className="flex w-full bg-blue-300 flex-row  gap-6">
        <Card
          title="Admin Dashboard"
          description="Access admin features and settings."
          className="w-1/2"
          route="/dashadmin"
        />
        <Card
          title="Supervisor Dashboard"
          description="Access superuser features and settings."
          className="w-1/2"
          route="/dashsuper"
        />
        <Card
          title="Therapist Dashboard"
          description="Access therapist features and settings."
          className="w-1/2"
          route="/dashtherapist"
        />
        <Card
          title="Patient Dashboard"
          description="Access patient features and settings."
          className="w-1/2"
          route="/dashpatient"
        />
      </div>
    </div>
  );
};

export default Dashboard;
