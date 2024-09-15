import React, { useContext } from 'react';
import LoginData from './LoginData';

const DashboardComponent = () => {
  const { role } = useContext(LoginData);

  return (
    <div>
      {/* Render content based on role */}
      {role === 'admin' && <p>Admin dashboard</p>}
      {role === 'supervisor' && <p>Supervisor dashboard</p>}
      {role === 'therapist' && <p>Therapist dashboard</p>}
      {role === 'patient' && <p>Patient dashboard</p>}
    </div>
  );
};

export default DashboardComponent;
