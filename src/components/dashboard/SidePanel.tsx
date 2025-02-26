import React from "react";
import Image from "next/image";
import Link from "next/link";
import { menuItems } from "@/fixtures/dashboardMenu";
import { SettingsIcon } from "lucide-react";

const SidePanel = () => {
  return (
    <div className="w-full min-h-screen bg-[#0317C6] flex flex-col items-center gap-4 py-[10px] px-[8px] max-w-[5.875rem] max-h-screen overflow-auto">
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
              <button className="w-full max-w-[70px] flex flex-col items-center justify-center text-white hover:bg-[#1E31D7] rounded-[4px] transition-colors py-[8px] px-[10px]">
                <div>{icon}</div>
                <span className="text-[10px] mt-1 font-medium text-white whitespace-nowrap truncate">
                  {label}
                </span>
              </button>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Link href="/settings" className="w-full ">
          <button className=" flex flex-col items-center justify-center text-white rounded-lg transition-colors hover:bg-[#1E31D7]">
            <SettingsIcon />
            <span className="text-xs mt-1 whitespace-nowrap">Settings</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SidePanel;
