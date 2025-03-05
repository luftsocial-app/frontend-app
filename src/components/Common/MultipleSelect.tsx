import * as React from "react";
import { XCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FormLabel } from "../ui/form";
import Image from "next/image";

interface MultiSelectProps {
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  onValueChange: (value: string[]) => void;
  defaultValue?: string[];
  className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onValueChange,
  defaultValue = [],
  className,
}) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    defaultValue.length > 0 ? defaultValue : options.map((o) => o?.value)
  );

  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);

  const toggleOption = (option: string) => {
    const newSelectedValues = selectedValues.includes(option)
      ? selectedValues.filter((value) => value !== option)
      : [...selectedValues, option];
    setSelectedValues(newSelectedValues);
    onValueChange(newSelectedValues);
  };

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <FormLabel className="text-text-sm  font-semiBold text-black ">
        Platforms
      </FormLabel>
      <PopoverTrigger asChild className="">
        <Button
          onClick={() => setIsPopoverOpen((prev) => !prev)}
          className={cn(
            "flex  rounded-[13px] border min-h-10 items-center justify-between bg-white  h-[48px] w-full",
            className
          )}
        >
          {selectedValues.length > 0 ? (
            <div className="flex flex-wrap items-center w-full py-[8px] gap-[10px] ">
              {selectedValues.map((value) => {
                const option = options.find((o) => o.value === value);
                return (
                  <React.Fragment key={value}>
                    <Badge className="bg-[#FAF7FF] text-secondaryBlack2 py-[4px] px-[9px] hover:bg-[#FAF7FF]">
                      {option?.icon && <option.icon className="" />}
                      {option?.label && (
                        <span className="mx-[10px]">{option?.label}</span>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          const updatedValues = selectedValues.filter(
                            (v) => v !== value
                          );
                          setSelectedValues(updatedValues);
                          onValueChange(updatedValues);
                        }}
                      >
                        <Image
                          src="/images/create-post/cross.png"
                          height={13}
                          width={13}
                          alt="cross"
                        />
                      </button>
                    </Badge>
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-between w-full mx-auto ">
              <span className="text-sm text-muted-foreground mx-3">
                {"placeholder"}
              </span>
              <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
            </div>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="min-w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
        onEscapeKeyDown={() => setIsPopoverOpen(false)}
      >
        <Command>
          <CommandList>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option?.value}
                  onSelect={() => toggleOption(option.value)}
                  className={cn(
                    "cursor-pointer",
                    selectedValues.includes(option.value)
                      ? "bg-secondaryBlue text-white"
                      : ""
                  )}
                >
                  {option.icon && <option.icon className="h-20 w-20" />}
                  <span className="text-xs font-semibold my-[4px]">
                    {option.label}
                  </span>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

MultiSelect.displayName = "MultiSelect";
