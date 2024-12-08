import React from 'react';
import { Fade } from 'react-awesome-reveal';
const StatsSection = () => {
  const stats = [
    { value: "15k+", label: "Incredible Volunteers" },
    { value: "1k+", label: "Successful Campaigns" },
    { value: "400+", label: "Monthly Donors" },
    { value: "35k+", label: "Team Support" },
  ];

  return (
    <div className="bg-slate-600 dark:bg-opacity-55 bg-opacity-10 py-10">
      <Fade>
      <div className="max-w-6xl  mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className={`text-4xl font-bold text-white`}>{stat.value}</h3>
            <p className=" text-white text-sm mt-2">{stat.label}</p>
          </div>

        ))}
      </div>
      </Fade>
    </div>
  );
};

export default StatsSection;