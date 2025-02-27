import React from "react";
import { offers } from "@/fixtures/offers";
import Link from "next/link";

export function ServicesOffered() {
  return (
    <div className="text-center bg-[#FCF8FB] py-12 px-6 sm:py-[6.25rem] sm:px-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold text-[#4601B1] mb-2 sm:mb-[10px]">
          WHY WE ARE THE BEST
        </p>
        <p className="text-3xl sm:text-4xl font-bold text-[#090914] mb-2 sm:mb-[10px]">
          What We Offer
        </p>
        <p className="text-base sm:text-xl font-normal text-gray-600 mb-4 sm:mb-[10px]">
          We’ve gone over everything you could possibly want to have. You are
          one step closer to success.
        </p>
        <div className="flex items-center justify-center mb-8 sm:mb-[3.75rem]">
          <Link
            href=""
            className="px-8 py-3 bg-primaryBlue text-white rounded-[4px] border border-[#F7BE00] w-fit mx-auto md:mx-0 font-bold"
          >
            Get Started
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="rounded-[15px] bg-[#EFE4FF] p-6 sm:p-8 w-full"
          >
            <div className="text-left">
              <img
                src={offer.icon}
                alt={offer.title}
                className="mb-4 h-14 sm:h-16"
              />
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-[16px]">
                {offer.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-600">
                {offer.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
