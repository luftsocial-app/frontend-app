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

interface MultiSelectProps {
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  onValueChange: (value: string[]) => void;
  defaultValue?: string[];
  placeholder?: string;
  className?: string;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  onValueChange,
  defaultValue = [],
  placeholder = "",
  className,
}) => {
  const [selectedValues, setSelectedValues] = React.useState<string[]>(
    defaultValue.length > 0 ? defaultValue : options.map((o) => o?.value)
  );

  //   const [selectedValues, setSelectedValues] =
  //     React.useState<string[]>(defaultValue);
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
      <FormLabel className="text-text-sm  font-semiBold text-black">
        Platforms
      </FormLabel>
      <PopoverTrigger asChild className="">
        <Button
          onClick={() => setIsPopoverOpen((prev) => !prev)}
          className={cn(
            "flex  p-1 rounded-[13px] border min-h-10 h-auto items-center justify-between bg-white w-[760px]",
            className
          )}
        >
          {selectedValues.length > 0 ? (
            <div className="flex flex-wrap items-center w-full gap-2 ">
              {selectedValues.map((value) => {
                const option = options.find((o) => o.value === value);
                return (
                  <React.Fragment key={value}>
                    <Badge className="bg-[#FAF7FF] text-secondaryBlack2 ">
                      {option?.icon && <option.icon className=" mr-2" />}
                      {option?.label}
                      <XCircle
                        className="ml-2 h-4 w-4 cursor-pointer "
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleOption(value);
                        }}
                      />
                    </Badge>
                  </React.Fragment>
                );
              })}
            </div>
          ) : (
            <div className="flex items-center justify-between w-full mx-auto ">
              <span className="text-sm text-muted-foreground mx-3">
                {/* {placeholder} */}
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
                  className="cursor-pointer "
                >
                  {option.icon && <option.icon className=" h-20 w-20" />}
                  <span className="text-xs font-seminbold my-[4px] text-secondaryBlack2">
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
