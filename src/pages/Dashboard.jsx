import React from "react";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="min-h-full bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card
          title="Admin Dashboard"
          description="Access admin features and settings."
          route="/dashadmin"
        />
        <Card
          title="Supervisor Dashboard"
          description="Access superuser features and settings."
          route="/dashsuper"
        />
        <Card
          title="Therapist Dashboard"
          description="Access therapist features and settings."
          route="/dashtherapist"
        />
        <Card
          title="Patient Dashboard"
          description="Access patient features and settings."
          route="/dashpatient"
        />
      </div>
    </div>
  );
};

export default Dashboard;
