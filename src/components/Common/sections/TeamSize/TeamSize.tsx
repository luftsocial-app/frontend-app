import { teamSize } from "@/fixtures/teamSize";
import Image from "next/image";
import React from "react";

export function TeamSize() {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-4 sm:px-8">
      <p className="text-lg font-bold text-[#6610EA]">Meet our team</p>
      <p className="text-2xl sm:text-4xl font-bold text-gray-900 text-center max-w-3xl mt-2">
        Passionate tech innovators redefining social media automation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 bg-[#FCF8FB] py-10 px-6 sm:px-10 rounded-lg w-full">
        {teamSize.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative">
              <Image
                src={member.icon}
                width={270}
                height={308}
                alt={member.name}
                className="w-full max-w-[16.875rem] rounded-lg shadow-lg"
              />
              <div className="absolute left-4 bottom-4 bg-white py-3 px-4 rounded-lg shadow-md w-[90%]">
                <p className="text-lg font-bold text-[#4601B1]">
                  {member.position}
                </p>
                <p className="text-sm font-semibold text-[#4601B1]">
                  {member.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
