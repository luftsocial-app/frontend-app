import Image from "next/image";
import React from "react";
import { Button } from "./Button";

const SocialMedia = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-[#FCF8FB] justify-center items-center px-6 sm:px-10 md:px-16 lg:px-[12.938rem] py-10 sm:py-14 md:py-[4.625rem] mb-10 sm:mb-16 md:mb-[6.25rem] gap-8 sm:gap-[1.813rem]">
      <div className="max-w-[33.25rem] w-full text-center lg:text-left">
        <p className="text-base sm:text-lg font-bold text-[#4601B1]">
          Your Social Hub
        </p>
        <p className="text-2xl sm:text-4xl font-bold text-[#090914] my-2 sm:my-[10px]">
          Your Social Media, Unified
        </p>
        <p className="text-base sm:text-xl font-normal text-[#52525B] mb-4 sm:mb-[10px]">
          Simplify your workflow by managing Facebook, Instagram, and YouTube
          from one intuitive platform. Automation made easy.
        </p>
        <Button
          href="/pricing"
          className="bg-[#6610EA] text-white text-base sm:text-lg font-bold border-[1px] border-[#F7BE00] py-2 sm:py-[10px] px-4"
        >
          See all integrations
        </Button>
      </div>

      <div className="max-w-full lg:max-w-[36.063rem] w-full flex justify-center">
        <Image
          src="/images/HomeScreenImages/socialAccounts.png"
          width={577}
          height={257}
          alt="social-accounts"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
