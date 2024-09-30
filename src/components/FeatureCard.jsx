import React from 'react';

export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105">
      <div className="mb-4">
        {React.cloneElement(icon, { className: "w-10 h-10 text-blue-600" })}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}