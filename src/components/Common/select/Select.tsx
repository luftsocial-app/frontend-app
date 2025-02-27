import * as React from "react";
import {
  Select as RadixSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export function Select({
  options,
  placeholder = "Select an option",
  value,
  onChange,
}: SelectProps) {
  return (
    <RadixSelect value={value} onValueChange={onChange}>
      <SelectTrigger className="max-w-[23.563rem] py-[12px] px-[14px] border border-red-400 border-b-0 ">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      <SelectContent className="border border-red-400 border-t-0 bg-white -mt-px">
        <SelectGroup>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className="px-4 py-2"
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </RadixSelect>
  );
}
