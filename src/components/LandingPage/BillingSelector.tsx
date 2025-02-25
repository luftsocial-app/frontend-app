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
    setPlatformCount(platformCount + 1);
  };

  const decrementCount = () => {
    if (platformCount > 1) {
      setPlatformCount(platformCount - 1);
    }
  };

  const handleBillingChange = (cycle: string) => {
    setBillingCycle(cycle);
  };

  return (
    <div className="bg-white rounded-[4px] border flex items-center justify-between p-4 gap-8">
      <div className="flex flex-col text-left">
        <p className="text-gray-900 font-medium text-[16px]">Platforms</p>
        <p className="text-gray-900 text-[10px] font-normal">
          Select how many social media platforms you want to connect
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrementCount}
          className=""
          disabled={platformCount <= 1}
        >
          <Image
            src="/images/HomeScreenImages/decrementIcon.png"
            width={30}
            height={30}
            alt="decrement"
          />
        </button>
        <span className="text-[16px] font-medium text-gray-900 px-[1.313rem]">
          {platformCount}
        </span>
        <button onClick={incrementCount} className=" ">
          <Image
            src="/images/HomeScreenImages/incrementIcon.png"
            width={30}
            height={30}
            alt="increment"
          />
        </button>
      </div>
      <div className="flex flex-col text-left">
        <p className="text-gray-800 font-medium">Billing</p>
        <p className="text-gray-500 text-[10px]">
          Select your preferred billing schedule
        </p>
      </div>
      <div className="flex space-x-2 border rounded-[4px] p-1">
        <button
          onClick={() => handleBillingChange("monthly")}
          className={`px-4 py-2  rounded-[50px] text-[14px] font-semibold ${
            billingCycle === "monthly"
              ? "bg-[#6610EA] text-white"
              : "bg-white text-gray-700 "
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => handleBillingChange("yearly")}
          className={`px-3 py-1 rounded-[50px] text-[14px] font-semibold ${
            billingCycle === "yearly"
              ? "bg-[#6610EA] text-white"
              : "bg-white text-gray-700"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
}
