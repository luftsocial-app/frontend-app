"use client";
import { useState, useRef, useEffect } from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

type Option = { label: string; value: any };

interface InputSelectProps {
  options: { label: string; value: string }[];
  placeholder?: string;
  onSelect?: (option: Option | null) => void;
  onInputChange: (value: string) => void;
  loading?: boolean;
  defaultValue?: Option | string;
}

export function InputSelect({
  options,
  placeholder = "Search for a location...",
  onSelect,
  onInputChange,
  loading,
  defaultValue = "",
}: InputSelectProps) {
  const isobject = typeof defaultValue === "object";
  const [inputValue, setInputValue] = useState(
    isobject ? defaultValue?.label : defaultValue
  );
  const [open, setOpen] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() !== "") {
      setOpen(true);
    } else {
      setOpen(false);
    }

    if (onInputChange) {
      onInputChange(value);
      onSelect?.(null);
    }

    if (value.trim() === "") {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSelect = (option: Option) => {
    setInputValue(option.label);
    setOpen(false);

    if (onSelect) onSelect(option.value);

    // inputRef.current?.focus();
  };

  return (
    <div className="relative w-full ">
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        type="text"
        onFocus={() => inputValue.trim() !== "" && setOpen(true)}
        placeholder={placeholder ?? ""}
        className="w-full text-black "
      />
      {open && (
        <div
          ref={dropdownRef}
          className="absolute w-full mt-1 border border-gray-200 shadow-lg z-50 py-[12px] px-[14px] bg-white rounded-[13px]"
        >
          <Command>
            <CommandList className="py-2">
              {loading ? (
                <div className="flex flex-col gap-1">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
              ) : filteredOptions?.length > 0 ? (
                filteredOptions.map((option) => (
                  <CommandItem
                    key={option.label}
                    onSelect={() => handleSelect(option)}
                    className="cursor-pointer hover:bg-gray-100"
                  >
                    {option.label}
                  </CommandItem>
                ))
              ) : (
                <div className=" text-center px-2 py-1.5 text-sm text-gray-500">
                  No results found.
                </div>
              )}
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
}
