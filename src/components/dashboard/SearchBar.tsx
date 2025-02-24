import Image from "next/image";
import React from "react";

export function SearchInput  ({
  label,
  placeholder,
  value,
  onChange,
  icon,
  ...rest
}: any) {
  return (
    <div className="w-full flex flex-col">
      {label && (
        <label className="text-sm font-semibold px-[2px] py-[4px] text-[#1D1C1C]">
          {label}
        </label>
      )}

      <div className="w-full flex items-center border border-gray-300 rounded-[13px] overflow-hidden max-w-[23.563rem]">
        <input
          type="search"
          placeholder={placeholder || "APT Dance"}
          value={value}
          onChange={onChange}
          className="w-full px-[0.875rem] py-[0.75rem] text-sm font-semiBold text-[#6D6D6D] placeholder-[#6D6D6D] focus:outline-none"
          {...rest}
        />

        {icon && (
          <button className="pr-3 flex items-center">
            <Image src={icon} alt="Search Icon" width={20} height={20}/>
          </button>
        )}
      </div>
    </div>
  );
};
