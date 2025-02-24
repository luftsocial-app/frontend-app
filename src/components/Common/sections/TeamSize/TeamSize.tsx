import { teamSize } from "@/fixtures/teamSize";
import Image from "next/image";
import React from "react";

const TeamSize = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-10">
      <p className="text-lg font-bold text-[#6610EA]">Meet our team</p>
      <p className="text-4xl font-bold text-gray-900 text-center max-w-3xl">
        Passionate tech innovators redefining social media automation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 bg-[#FCF8FB] py-[2.75rem] px-[2.25rem]">
        {teamSize.map((member, index) => (
          <div key={index} className="flex flex-col items-center ">
            <div className="relative p-[10]">
              <Image
                src={member.icon}
                width={270}
                height={308}
                alt={member.name}
                className="max-w-[16.875rem] rounded-lg shadow-lg"
              />
              <div className="absolute left-[1.5rem] bottom-8 bg-white py-[0.875rem] px-[0.813rem] items-center justify-center max-w-[15.063rem] w-full">
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
};

export default TeamSize;
