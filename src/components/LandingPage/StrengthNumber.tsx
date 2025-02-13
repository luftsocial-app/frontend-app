import React from "react";

export function StrengthNumber () {
  const stats = [
    { number: "100K", label: "Minutes Saved" },
    { number: "4390", label: "Active Users" },
    { number: "4390", label: "Projects Done" },
    { number: "4390", label: "Happy Clients" }
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col space-y-6 max-w-xl">
        <span className="text-lg font-bold text-primaryBlue">Our stats</span>
        
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Our strength is expressed in numbers
        </h2>
        
        <p className="text-gray-600 text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>
        
        <button className="px-8 py-3 bg-primaryBlue text-white rounded-lg hover:bg-blue-700 transition-colors w-fit">
          Get Started
        </button>
      </div>

      <div className="flex-shrink-0">
        <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 bg-white">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-8 min-w-[180px]"
            >
              <span className="text-4xl font-semibold text-gray-900 mb-2">
                {stat.number}
              </span>
              <span className="text-primaryPurple text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};