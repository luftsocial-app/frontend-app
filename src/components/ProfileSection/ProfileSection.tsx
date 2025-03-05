"use client";
import { Facebook } from "@/icons";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Ticktok } from "@/icons/Tiktok";
import { YoutubeIcon } from "@/icons/YoutubeIcon";
import { LinkedinIcon } from "@/icons/LinkedinIcon";
import { XIcon } from "@/icons/XIcon";
import { InstagramIcon } from "@/icons/InstagramIcon";

const profileData = [
  { id: "1", label: "Facebook", icon: <Facebook height="16" width="16" /> },
  { id: "2", label: "TikTok", icon: <Ticktok size={16} /> },
  { id: "3", label: "YouTube", icon: <YoutubeIcon size={16} /> },
  {
    id: "4",
    label: "LinkedIn",
    icon: <LinkedinIcon size={16} />,
  },
  { id: "5", label: "X", icon: <XIcon size={16} /> },
  { id: "6", label: "Instagram", icon: <InstagramIcon size={16} /> },
];

export function ProfileSection() {
  const [selectedProfiles, setSelectedProfiles] = useState(
    Array(profileData.length).fill(true)
  );

  const handleProfileChange = (index: number) => {
    const newSelectedProfiles = [...selectedProfiles];
    newSelectedProfiles[index] = !newSelectedProfiles[index];
    setSelectedProfiles(newSelectedProfiles);
  };

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    setSelectedProfiles(Array(profileData.length).fill(checked === true));
  };

  return (
    <div className="max-w-[233px] border">
      <div className="py-[18px] px-[35px]">
        <p className="text-sm font-semibold ">Social Profiles</p>
      </div>
      <div className=" py-[20px] px-[35px] border-t">
        <div className="flex items-center mb-2">
          <Checkbox
            id="select-all"
            checked={selectedProfiles.every((p) => p)}
            onCheckedChange={handleSelectAll}
            className="w-[18px] h-[18px] border border-gray-300 bg-primaryblue rounded mr-[10px]"
          />
          <label htmlFor="select-all" className="text-sm font-bold">
            Select all profiles
          </label>
        </div>
        <ul className="space-y-2">
          {profileData.map((profile, index) => (
            <li key={profile.id} className="flex items-center">
              <Checkbox
                id={`profile-${index}`}
                checked={selectedProfiles[index]}
                onCheckedChange={() => handleProfileChange(index)}
                className="w-[18px] h-[18px] border border-gray-300 rounded mr-[10px]"
              />
              <span className="mr-[10px]">{profile.icon}</span>
              <label
                htmlFor={`profile-${index}`}
                className="text-sm font-normal"
              >
                {profile.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
