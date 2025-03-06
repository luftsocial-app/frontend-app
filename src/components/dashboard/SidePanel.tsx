"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/fixtures/dashboardMenu";
import { SettingsIcon } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const SidePanel = () => {
  const { user, isSignedIn } = useUser();
  return (
    <div className="w-full bg-primaryBlue2 flex flex-col items-center gap-4 py-[10px] px-[8px] max-w-[5.875rem] ">
      <Link
        href="/"
        className="flex flex-col items-center justify-center p-[10px]"
      >
        <Image
          src="/images/dashboard/luftLogo.png"
          width={40}
          height={40}
          alt="Luft Logo"
          className="cursor-pointer mb-[8px]"
        />
        <Image
          src="/images/dashboard/luftLabel.png"
          width={58}
          height={10}
          alt="Luft Logo"
          className="cursor-pointer"
        />
      </Link>

      <ul className="w-full">
        {menuItems.map(({ icon, label, href }, index) => (
          <li key={index}>
            <Link href={href} className="block">
              <button className="w-full max-w-[70px] flex flex-col items-center justify-center text-white hover:bg-secondaryBlue rounded-[4px] transition-colors py-[8px] px-[10px]">
                <div>{icon}</div>
                <span className="text-[10px] mt-1 font-medium text-white whitespace-nowrap truncate">
                  {label}
                </span>
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-[auto] flex flex-col items-center">
        <div className="h-[1px] bg-white w-full mb-[18px] max-w-[3.094rem]" />
        <Link href="/settings" className="w-full ">
          <button className="flex flex-col items-center justify-center text-white rounded-lg transition-colors hover:bg-secondaryBlue px-[10px] py-[8px]">
            <SettingsIcon />
            <span className="text-[10px] mt-1 whitespace-nowrap">Settings</span>
          </button>
        </Link>
      </div>

      {isSignedIn && user ? (
        <div className="flex flex-col items-center mt-[3px]">
          <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
            <Image
              src={user.imageUrl || "/images/default-avatar.png"}
              width={30}
              height={30}
              alt={user.fullName || "User"}
            />
          </div>
          <div className="flex items-center mt-[4px] space-x-[4px]">
            <p className="text-[11px] font-medium text-white">
              {user.firstName || user.fullName || "Joshua "}
            </p>
            <Image
              src="/images/create-post/downArrow.png"
              height={4}
              width={6}
              alt="downarrow"
              className="object-contain"
            />
          </div>
        </div>
      ) : (
        <p className="text-[11px] font-medium text-white mt-[3px]">Guest</p>
      )}
    </div>
  );
};

export default SidePanel;
