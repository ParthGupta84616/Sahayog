import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, route }) => {
  const navigate = useNavigate();

  return (
    <div
      className=" bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
      onClick={() => navigate(route)}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default Card;
