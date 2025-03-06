import * as React from "react";
import {
  Select as RadixSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function Select({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  className,
}: SelectProps) {
  return (
    <RadixSelect value={value} onValueChange={onChange}>
      <SelectTrigger className={` ${className}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className=" data-[state=checked]:bg-[#1E31D7] data-[state=checked]:text-white text-sm font-medium py-[8px] px-[14px]"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </RadixSelect>
  );
}
