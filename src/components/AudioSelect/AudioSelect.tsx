import * as React from "react";
import { Search, X } from "lucide-react";
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
import { FormLabel } from "../ui/form";

interface SingleSelectProps {
  options: {
    label: string;
    value: string;
    icon?: React.ReactNode;
  }[];
  defaultValue?: string | null;
  onChange?: (value: string | null) => void;
  label?: string;
}

export function AudioSelect({
  options,
   defaultValue="audio1",
  onChange,
  label,
}: SingleSelectProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<string | null>(
    defaultValue
  );

  const handleSelection = (value: string) => {
    const newValue = value === selectedValue ? null : value;
    setSelectedValue(newValue);
    onChange?.(newValue);
    setOpen(false);
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValue(null);
    onChange?.(null);
  };

  const selectedOption = options.find((f) => f.value === selectedValue);

  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between py-[12px] px-[14px] flex overflow-hidden border rounded-[13px] mb-[8px] hover:bg-white  min-h-[3.5rem]"
          >
            <div className="flex flex-wrap gap-2 w-full max-h-[40px] overflow-y-auto items-center">
              {selectedOption && (
                <span className="font-semiBold text-black text-xs bg-[#FAF7FF] py-[4px] px-[9px] border rounded-[10px] flex items-center gap-2">
                  {selectedOption.icon && <span>{selectedOption.icon}</span>}
                  {selectedOption.label}
                  <span onClick={clearSelection}>
                    <X className="ml-2 h-4 w-4 cursor-pointer" />
                  </span>
                </span>
              )}
            </div>
            <Search className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent className="min-w-[var(--radix-popover-trigger-width)] p-0">
          <Command className="w-full">
            <CommandInput placeholder="Search here..." />
            <CommandList className="max-h-[200px] overflow-y-auto">
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup className="w-full ">
                {options.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={() => handleSelection(framework.value)}
                    className="flex items-center gap-2"
                  >
                    {framework.icon && <span>{framework.icon}</span>}
                    <span>{framework.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
