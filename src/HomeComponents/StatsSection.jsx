import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: "15k+", label: "Incredible Volunteers", color: "text-teal-600" },
    { value: "1k+", label: "Successful Campaigns", color: "text-yellow-500" },
    { value: "400+", label: "Monthly Donors", color: "text-teal-600" },
    { value: "35k+", label: "Team Support", color: "text-yellow-500" },
  ];

  return (
    <div className="bg-white py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.value}</h3>
            <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;