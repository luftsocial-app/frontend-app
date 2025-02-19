import React from "react";

export function StrengthNumber() {
  const stats = [
    { number: "100K", label: "Minutes Saved" },
    { number: "1M+", label: "Traffic Generated" },
    { number: "50K", label: "Daily Articles" },
    { number: "5M", label: "AI Data Set" },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-secondaryPink px-6 py-12 md:px-[12.9375rem] md:py-[12.5rem]">
      <div className="flex flex-col space-y-6 max-w-xl text-center md:text-left">
        <span className="text-lg font-bold text-primaryBlue">OUR STATS</span>
        <h2 className="text-4xl font-bold text-gray-900 leading-tight">
          Our strength is expressed in numbers
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-[33.25rem] w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation
        </p>

        <button className="px-8 py-3 bg-primaryBlue text-white rounded-[4px] border border-[#F7BE00] hover:bg-blue-700 transition-colors w-fit mx-auto md:mx-0">
          Get Started
        </button>
      </div>

      <div className="flex-shrink-0 w-full md:w-auto">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 min-w-[180px]"
            >
              <span className="text-4xl font-semibold text-gray-900 mb-2">
                {stat.number}
              </span>
              <span className="text-purple-600 text-sm">{stat.label}</span>
            </div>
          ))}

          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200"></div>
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
