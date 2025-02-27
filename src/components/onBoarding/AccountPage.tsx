"use client";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ProgressBar } from "./ProgressBar";
import { onboardingSteps } from "@/fixtures";

const AccountSetup: React.FC = () => {
  const [stepIndex, setStepIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[][]>(
    onboardingSteps.map(() => [])
  );
  const router = useRouter();

  const handleOptionToggle = useCallback(
    (optionIndex: number) => {
      setSelectedOptions((prevSelections) => {
        const updatedSelections = [...prevSelections];
        const currentSelections = updatedSelections[stepIndex] || [];

        updatedSelections[stepIndex] = currentSelections.includes(optionIndex)
          ? currentSelections.filter((index) => index !== optionIndex)
          : [...currentSelections, optionIndex];

        return updatedSelections;
      });
    },
    [stepIndex]
  );

  const handleNext = async () => {
    if (stepIndex < onboardingSteps.length - 1) {
      setStepIndex((prev) => prev + 1);
    } else {
      await handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (stepIndex > 0) {
      setStepIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const selectedData = onboardingSteps
      .map((step, index) => ({
        key: step.key,
        selectedOptions: selectedOptions[index].map(
          (optIdx) => step.options[optIdx].value
        ),
      }))
      .filter((step) => step.selectedOptions.length > 0);

    try {
      await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedData }),
      });

      router.push("/dashboard");
    } catch (error) {
      console.error("Error submitting onboarding data:", error);
    }
  };

  const { options, image, label } = onboardingSteps[stepIndex];

  return (
    <div className="w-full h-full flex flex-col md:flex-row px-4 md:px-8 gap-4 md:gap-8">
      <div className="h-0 md:h-full hidden md:block py-[2.5rem] max-w-[30.25rem]">
        <Image
          key={label}
          src={image}
          width={484}
          height={902}
          alt="Onboarding"
          className="w-full h-full max-h-[calc(100vh-5rem)] object-cover rounded-lg animate-fadeIn "
        />
      </div>

      <div className="w-full py-[2.5rem] no-scrollbar max-h-screen overflow-scroll md:w-2/3 flex flex-col h-full justify-between">
        <div>
          <div className="space-y-6">
            <p className="text-xl font-semibold text-gray-900">
              Account set up
            </p>
            <ProgressBar
              currentStep={stepIndex + 1}
              totalSteps={onboardingSteps.length}
            />

            {stepIndex > 0 && (
              <button onClick={handlePrevious} className="flex">
                <Image
                  src="/images/onBoardingScreen/arrow_back.png"
                  height={24}
                  width={24}
                  alt="Back"
                  className="mr-2 "
                />
              </button>
            )}
          </div>

          <p className="text-[#1D1C1C] my-4  text-[34px] font-semibold">
            {label}
          </p>
          <div className="mb-6 md:mb-12">
            {options.map((option, index) => (
              <div
                key={index}
                className={`flex items-center p-3 md:p-4 border border-gray-200 ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${
                  index === options.length - 1 ? "rounded-b-lg" : "border-b-0"
                }`}
              >
                <input
                  type="checkbox"
                  id={`option-${stepIndex}-${index}`}
                  checked={selectedOptions[stepIndex]?.includes(index)}
                  onChange={() => handleOptionToggle(index)}
                  className="h-4 w-4 md:h-5 md:w-5 rounded border-gray-300 text-blue-600 mr-3 md:mr-4 checked:bg-[#1E31D7] accent-secondaryBlue "
                  aria-label={option.label}
                />
                <label
                  htmlFor={`option-${stepIndex}-${index}`}
                  className="text-sm md:text-base text-gray-900"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
          {stepIndex < onboardingSteps.length - 1 && (
            <Link
              href="/dashboard"
              className="flex-1 py-2.5 px-4 text-center border border-secondaryBlue text-secondaryBlue rounded-lg"
            >
              Skip
            </Link>
          )}
          <button
            onClick={handleNext}
            className={`py-2.5 px-4 text-center bg-[#1E31D7] text-white rounded-lg ${
              stepIndex < onboardingSteps.length - 1
                ? "flex-1"
                : "w-full md:w-1/2"
            }`}
          >
            {stepIndex < onboardingSteps.length - 1 ? "Continue" : "Finish"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountSetup;
