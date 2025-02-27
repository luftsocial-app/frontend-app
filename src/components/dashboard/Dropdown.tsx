import Image from "next/image";
import React from "react";

export function Dropdown({
  label,
  placeholder,
  value,
  onChange,
  options,
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
        <select
          value={value}
          onChange={onChange}
          className="w-full px-[0.875rem] py-[0.75rem] text-sm font-semiBold text-[#6D6D6D] placeholder-[#6D6D6D] focus:outline-none appearance-none bg-white"
          {...rest}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {options?.map((option: any, index: number) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {icon && (
          <button
            type="button"
            className="pr-3 flex items-center cursor-pointer"
            onClick={() => {}}
          >
            <Image src={icon} height={20} width={20} alt="dropdown icon" />
          </button>
        )}
      </div>
    </div>
  );
}
