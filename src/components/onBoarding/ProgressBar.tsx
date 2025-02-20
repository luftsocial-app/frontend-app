import React from "react";

export const ProgressBar = ({ currentStep, totalSteps }:any) => {
  const segmentWidth = 100 / totalSteps;

  return (
    <div className="relative w-full h-6 flex items-center gap-2">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <div
          key={index}
          className={`h-2 rounded-full transition-all duration-500 ${
            index === currentStep - 1 ? "bg-blue-600" : "bg-gray-200"
          }`}
          style={{ width: `${segmentWidth}%` }}
        />
      ))}
    </div>
  );
};
