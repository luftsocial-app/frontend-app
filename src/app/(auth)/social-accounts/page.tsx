"use client";
import { Button } from "@/components/onBoarding/Button";
import { socialAccounts } from "@/fixtures/socialAccount";
import { LuftIcon } from "@/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type SocialAccount = {
  id: number;
  Icon: React.FC<{ height: number; width: number }>;
  label: string;
};

export default function SocialAccounts() {
  const [checkedState, setCheckedState] = useState<Record<number, boolean>>(
    socialAccounts.reduce(
      (acc: Record<number, boolean>, account: SocialAccount) => {
        acc[account.id] = false;
        return acc;
      },
      {}
    )
  );

  const handleCheckboxChange = (id: number) => {
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="flex flex-col p-[1.875rem] items-center">
      <div className="p-[10px] mb-[0.625rem]">
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
          Social Accounts
        </p>
        <p className="text-xs font-normal text-[#212020]">
          Before you get started, Connect your social accounts
        </p>
      </div>

      <div className="max-w-[19.25rem] w-full mt-[1.375rem]">
        {socialAccounts.map(({ id, Icon, label }: SocialAccount) => (
          <label
            key={id}
            className="flex items-center justify-between w-full rounded-[5px] border border-[#DBDBDB] cursor-pointer bg-white mb-[13px] px-[6px] py-[3px]"
          >
            <div className="flex items-center">
              <Icon height={26} width={26} />
              <span className="text-gray-600 font-normal text-[10px] ml-2">
                {label}
              </span>
            </div>
            <div className="flex items-center">
              <p className="text-gray-600 font-normal text-[10px] mr-[5px]">
                {checkedState[id] ? "Connected" : "Connect"}
              </p>
              <input
                type="checkbox"
                checked={checkedState[id] || false}
                onChange={() => handleCheckboxChange(id)}
                className="w-4 h-4 rounded border-gray-300 text-[#1877F2] focus:ring-[#1877F2]"
              />
            </div>
          </label>
        ))}
      </div>

      <Button
        href="/login"
        className="border text-white mt-[0.562rem] bg-[#1E31D7] text-center"
      >
        Continue
      </Button>
      <Link
        href="/social-accounts"
        className=" py-[6px] px-[16px] text-sm  font-semibold text-[#1E31D7] text-center"
      >
        Skip for now
      </Link>
    </div>
  );
}
