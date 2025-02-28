import * as React from "react";
import { Check, ChevronsUpDown, Search, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface MultiSelectProps {
  options: { value: string; label: string }[];
  value: string[];
  onChange: (value: string[]) => void;
}

export function InputMultiSelect({
  options,
  value,
  onChange,
}: MultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const toggleSelection = (selectedValue: string) => {
    const newValues = value.includes(selectedValue)
      ? value.filter((val) => val !== selectedValue)
      : [...value, selectedValue];

    onChange(newValues);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        asChild
        className="w-full max-w-[23.563rem] border rounded-[13px] h-auto"
      >
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between py-[12px] px-[14px] flex overflow-hidden"
        >
          <div className="flex flex-wrap gap-2 max-w-[377px] max-h-[40px] overflow-y-auto">
            {value.length > 0 ? (
              value.map((selected) => {
                const label = options.find((f) => f.value === selected)?.label;
                return (
                  <span
                    key={selected}
                    className="font-semiBold text-black text-xs bg-[#FAF7FF] py-[4px] px-[9px] border rounded-[10px] flex items-center"
                  >
                    {label}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSelection(selected);
                      }}
                    >
                      <X className="ml-2 h-4 w-4 cursor-pointer" />
                    </button>
                  </span>
                );
              })
            ) : (
              <span className="text-gray-400">Select framework...</span>
            )}
          </div>

          <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="min-w-[23.563rem] p-0">
        <Command>
          <CommandInput placeholder="Search here..." />
          <CommandList className="max-h-[200px] overflow-y-auto">
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="w-full">
              {options.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={() => toggleSelection(framework.value)}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(framework.value)
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
