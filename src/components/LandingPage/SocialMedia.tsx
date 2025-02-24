import Image from 'next/image'
import React from 'react'
import { Button } from './Button';

const SocialMedia = () => {
  return (
    <div className="flex bg-[#FCF8FB] justify-center items-center px-[12.938rem] py-[4.625rem] mb-[6.25rem] gap-[1.813rem]">
      <div className=" max-w-[33.25rem] w-full">
        <p className="text-lg font-bold text-[#4601B1]">Your Social Hub</p>
        <p className="text-4xl font-bold text-[#090914] my-[10px]">
          Your Social Media, Unified
        </p>
        <p className="text-xl font-normal text-[#52525B] mb-[10px]">
          Simplify your workflow by managing Facebook, Instagram, and YouTube
          from one intuitive platform. Automation made easy.
        </p>
        <Button
          href="/priicng"
          className="bg-[#6610EA] text-white text-lg font-bold border-[1px] border-[#F7BE00] py-[10px]"
        >
          {"See all integrations"}
        </Button>
      </div>
      <div className="max-w-[36.063rem]">
        <Image
          src="/images/HomeScreenImages/socialAccounts.png"
          width={577}
          height={257}
          alt="social-accounts"
        />
      </div>
    </div>
  );
}

export default SocialMedia