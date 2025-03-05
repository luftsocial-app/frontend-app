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
  className?:string;
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
      <SelectTrigger className={"py-[12px] px-[14px] bg-white h-[48px] rounded-[13px]"}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Options</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </RadixSelect>
  );
}
