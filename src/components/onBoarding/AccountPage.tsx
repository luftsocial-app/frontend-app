import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { ProgressBar } from "./ProgressBar";

const pages = [
  {
    title: "Understanding Your Goals",
    data: [
      "Growing my brand or business",
      "Engaging with my audience more effectively",
      "Organizing and scheduling content",
      "Tracking performance and analytics",
      "Managing multiple accounts with ease",
    ],
    image: '/images/onBoardingScreen/account1.png',
  },
  {
    title: "Platform Selection",
    data: [
      "Instagram",
      "Facebook",
      "YouTube",
      "LinkedIn",
      "TikTok",
      "Other",
    ],
    image: '/images/onBoardingScreen/account2.png',

  },
  {
    title: "Key Features You Need",
    data: [
      "Post Scheduling",
      "Analytics & Insights",
      "Comment & DM Management",
      "Team Collaboration",
      "Hashtag & Trend Tracking",
      "Content Repurposing",
    ],
    image: '/images/onBoardingScreen/account3.png',
  },
];

const AccountPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleContinue = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const { title, data, image } = pages[currentPage];

  return (
    <div className="w-full h-screen flex px-8 py-6 gap-8">
      <div className=" h-full max-w-[30.25rem]">
        <Image
          src={image || "/images/onBoardingScreen/account1.png"}
                    width={484}
          height={902}
          alt="Onboarding"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="w-2/3 flex flex-col pt-4">
        <div className="space-y-[1.5rem]">
          <p className="text-xl font-semibold text-gray-900">Account Setup</p>
          <ProgressBar
            currentStep={currentPage + 1}
            totalSteps={pages.length}
          />
          <Image
            src="/images/onBoardingScreen/arrow_back.png"
            height={24}
            width={24}
            alt="back"
            className="mr-2"
          />
        </div>

        <h2 className="text-3xl font-semibold text-gray-900 mb-8 mt-[4rem]">
          {title}
        </h2>

        <div className="mb-12">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center p-4 border border-gray-200 ${
                index === 0 ? "rounded-t-lg" : ""
              } ${index === data.length - 1 ? "rounded-b-lg" : "border-b-0"}`}
            >
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mr-4"
                aria-label={item}
              />
              <label
                htmlFor={`checkbox-${index}`}
                className="text-base text-gray-900"
              >
                {item}
              </label>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          <Link
            href="/"
            className="flex-1 py-2.5 px-4 text-center border border-[#1E31D7] text-[#1E31D7] rounded-lg"
          >
            Skip
          </Link>
          <button
            onClick={handleContinue}
            className="flex-1 py-2.5 px-4 text-center bg-[#1E31D7] text-white rounded-lg "
          >
            {currentPage < pages.length - 1 ? "Continue" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
