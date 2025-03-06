import Image from "next/image";
import React from "react";

type BillingSelectorProps = {
  billingCycle: string;
  setBillingCycle: React.Dispatch<React.SetStateAction<string>>;
  platformCount: number;
  setPlatformCount: React.Dispatch<React.SetStateAction<number>>;
};

export function BillingSelector({
  billingCycle,
  setBillingCycle,
  platformCount,
  setPlatformCount,
}: BillingSelectorProps) {
  const incrementCount = () => {
    setPlatformCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setPlatformCount((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleBillingChange = (cycle: string) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="bg-white rounded-md border p-4 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-gray-900 font-medium text-base">Platforms</p>
        <p className="text-gray-600 text-xs">
          Select how many social media platforms you want to connect
        </p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={decrementCount}
          className="disabled:opacity-50"
          disabled={platformCount <= 1}
         >
          <Image
            src="/images/HomeScreenImages/decrementIcon.png"
            width={24}
            height={24}
            alt="decrement"
          />
        </button>
        <span className="text-base font-medium text-gray-900 px-4">
          {platformCount}
        </span>
        <button onClick={incrementCount}>
          <Image
            src="/images/HomeScreenImages/incrementIcon.png"
            width={24}
            height={24}
            alt="increment"
          />
        </button>
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-gray-900 font-medium">Billing</p>
        <p className="text-gray-600 text-xs">
          Select your preferred billing schedule
        </p>
      </div>

      <div className="flex space-x-2 border rounded-md p-1">
        <button
          onClick={() => handleBillingChange("monthly")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            billingCycle === "monthly"
              ? "bg-[#6610EA] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleBillingChange("yearly")}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
            billingCycle === "yearly"
              ? "bg-[#6610EA] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
