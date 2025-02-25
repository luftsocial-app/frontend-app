import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ProgressBar } from "./ProgressBar";
import { Pages } from "@/fixtures/onBoarding";

const AccountPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
 const [selectedCheckboxes, setSelectedCheckboxes] = useState<number[][]>(
   Pages.map(() => [])
 );

 const handleCheckboxChange = (index: number) => {
   setSelectedCheckboxes((prev: number[][]) => {
     const updated = [...prev];
     const currentPageSelections = updated[currentPage] ?? [];

     if (currentPageSelections.includes(index)) {
       updated[currentPage] = currentPageSelections.filter((i) => i !== index);
     } else {
       updated[currentPage] = [...currentPageSelections, index];
     }

     return updated;
   });
 };


  const handleContinue = () => {
    if (currentPage < Pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const { title, data, image } = Pages[currentPage];

  return (
    <div className="w-full h-screen flex flex-col md:flex-row px-4 md:px-8 py-6 gap-4 md:gap-8">
      <div className="h-full max-w-[30.25rem]">
        <Image
          src={image || "/images/onBoardingScreen/account1.png"}
          width={484}
          height={902}
          alt="Onboarding"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-full md:w-2/3 flex flex-col pt-4">
        <div className="space-y-[1.5rem]">
          <p className="text-xl font-semibold text-gray-900">Account Setup</p>
          <ProgressBar
            currentStep={currentPage + 1}
            totalSteps={Pages.length}
          />
          {currentPage > 0 && (
            <button onClick={handleBack} className="flex">
              <Image
                src="/images/onBoardingScreen/arrow_back.png"
                height={24}
                width={24}
                alt="back"
                className="mr-2"
              />
            </button>
          )}
        </div>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 md:mb-8 mt-6 md:mt-[4rem]">
          {title}
        </h2>

        <div className="mb-6 md:mb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-3 md:p-4 border border-gray-200 ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === data.length - 1 ? "rounded-b-lg" : "border-b-0"}`}
            >
              <input
                type="checkbox"
                id={`checkbox-${currentPage}-${index}`}
                checked={selectedCheckboxes[currentPage]?.includes(index)}
                onChange={() => handleCheckboxChange(index)}
                className="h-4 w-4 md:h-5 md:w-5 rounded border-gray-300 text-blue-600 mr-3 md:mr-4 checked:bg-[#1E31D7]"
                aria-label={item}
              />
              <label
                htmlFor={`checkbox-${currentPage}-${index}`}
                className="text-sm md:text-base text-gray-900"
              >
                {item}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          {currentPage < Pages.length - 1 && (
            <Link
              href="/"
              className="flex-1 py-2.5 px-4 text-center border border-[#1E31D7] text-[#1E31D7] rounded-lg"
            >
              Skip
            </Link>
          )}
          <button
            onClick={handleContinue}
            className={`py-2.5 px-4 text-center bg-[#1E31D7] text-white rounded-lg ${
              currentPage < Pages.length - 1 ? "flex-1" : "w-full md:w-1/2"
            }`}
          >
            {currentPage < Pages.length - 1 ? "Continue" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
