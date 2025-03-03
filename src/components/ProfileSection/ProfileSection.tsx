"use client";
import { Facebook } from "@/icons";
import { Checkbox, CheckboxIndicator } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { Instagram, Linkedin, TicketIcon, X, Youtube } from "lucide-react";
import { useState } from "react";

export function ProfileSection() {
  const [selectedProfiles, setSelectedProfiles] = useState(Array(6).fill(true));

  const handleProfileChange = (index: number) => {
    const newSelectedProfiles = [...selectedProfiles];
    newSelectedProfiles[index] = !newSelectedProfiles[index];
    setSelectedProfiles(newSelectedProfiles);
  };

  const handleSelectAll = (checked: boolean | "indeterminate") => {
    setSelectedProfiles(Array(6).fill(checked === true));
  };

  return (
    <div className="max-w-[233px] border-r py-[20px] px-[35px]">
      <div className="flex items-center mb-2">
        <Checkbox
          id="select-all"
          checked={selectedProfiles.every((p) => p)}
          onCheckedChange={handleSelectAll}
          className="w-4 h-4 border border-gray-300 bg-white rounded"
        >
          <CheckboxIndicator className="flex items-center justify-center text-white bg-blue-500 rounded">
            <CheckIcon className="w-3 h-3" />
          </CheckboxIndicator>
        </Checkbox>
        <label htmlFor="select-all" className="text-sm font-bold ml-2">
          Select All
        </label>
      </div>
      <ul className="space-y-2">
        {[
          {
            id: "1",
            label: "Facebook",
            icon: <Facebook height="16" width="16" />,
          },
          { id: "2", label: "TikTok", icon: <TicketIcon size={16} /> },
          { id: "3", label: "YouTube", icon: <Youtube size={16} /> },
          {
            id: "4",
            label: "LinkedIn",
            icon: (
              <Linkedin
                size={16}
                className="bg-[#0076B2] fill-white stroke-white"
              />
            ),
          },
          { id: "5", label: "X", icon: <X size={16} /> },
          { id: "6", label: "Instagram", icon: <Instagram size={16} /> },
        ].map((profile, index) => (
          <li key={profile?.id} className="flex items-center">
            <Checkbox
              id={`profile-${index}`}
              checked={selectedProfiles[index]}
              onCheckedChange={() => handleProfileChange(index)}
              className="w-4 h-4 border border-gray-300 bg-white rounded"
            >
              <CheckboxIndicator className="flex items-center justify-center text-white bg-blue-500 rounded">
                <CheckIcon className="w-3 h-3" />
              </CheckboxIndicator>
            </Checkbox>
            <span className="mx-[10px]">{profile?.icon}</span>
            <label htmlFor={`profile-${index}`} className="text-sm font-normal">
              {profile?.label ?? ""}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
