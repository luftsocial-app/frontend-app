"use client";
import { GenericTooltip } from "@/components";
import { Button } from "@/components/onBoarding/Button";
import { plans } from "@/fixtures/plan";
import { LuftIcon } from "@/icons";
import { Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";


export default function ChoosePlan() {
  const [selectedPlan, setSelectedPlan] = useState<number>(1);

  const handlePlanSelect = (id: number) => {
    setSelectedPlan(id);
  };

  return (
    <div className="flex flex-col p-[1.875rem] items-center bg-white shadow-sm w-full max-w-md rounded-lg m-auto">
      <div className="p-[10px]">
        <Image
          src="/images/onBoardingScreen/luft_image.png"
          height={60}
          width={60}
          alt="Luft Image"
        />
        <LuftIcon height={40} width={70} />
      </div>

      <div>
        <p className="text-lg font-bold text-[#212020] mb-[4px] text-center">
          Payment Plan
        </p>
        <div className="text-center">
          <p className="text-xs font-normal text-[#212020]">
            Choose your preferred payment plan.
          </p>
          <p className="text-xs font-normal text-[#212020]">
            You can also change it later to a different plan
          </p>
        </div>
      </div>

      <div className=" py-[1.375rem] min-w-[19.25rem]">
        {plans.map((plan, index) => (
          <label
            key={plan.id}
            className={`flex items-center justify-between w-full rounded-[5px] border-[1px] border-[#DBDBDB] cursor-pointer bg-white py-[3px] text-[10px] font-semibold px-[6px]
      ${selectedPlan === plan?.id ? "border-secondaryBlue" : ""}
      ${index === 1 ? "my-[13px]" : ""}
    `}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <div className="flex items-center py-[8px] px-[5px]">
              <span className="font-semiBold text-[10px] text-black">
                {plan?.label}
              </span>
              {plan?.description && (
                <span className="text-gray-600 font-semibold text-[8px] ml-[2px]">
                  {plan?.description}
                </span>
              )}
              <GenericTooltip tooltipText={plan?.tooltipText}>
                <Info size={12} className="ml-[10px]" />
              </GenericTooltip>
            </div>

            <div className="flex items-center">
              <p className="text-gray-600 font-normal text-[10px] mr-[5px]">
                {plan.price}
              </p>
              <input
                type="checkbox"
                checked={selectedPlan === plan?.id}
                onChange={() => {}}
                className={` accent-secondaryBlue w-12px h-12px rounded-sm border border-gray-300 text-secondaryBlue focus:ring-secondaryBlue ${
                  selectedPlan === plan.id ? "bg-secondaryBlue" : ""
                }`}
              />
            </div>
          </label>
        ))}
      </div>

      <Button
        href="/onboarding"
        className="border text-white bg-secondaryBlue text-center"
      >
        Continue
      </Button>
      <Link
        href="/onboarding"
        className="py-[6px] px-[16px] text-sm font-semibold text-secondaryBlue text-center"
      >
        Skip for now
      </Link>
    </div>
  );
}
