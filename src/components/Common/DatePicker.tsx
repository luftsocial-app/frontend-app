"use client";

import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { parseISO,format } from "date-fns";
import { UpDownArrow } from "@/icons/UpDownArrow";

interface DatePickerProps {
  name: string;
  label?: string;
}

export function DatePicker({ name, label }: DatePickerProps) {
  const { control } = useFormContext();
  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => {
        const formattedDate = field.value
          ? format(parseISO(field.value), "dd MMM yyyy")
          : "Select Date";
        return (
          <FormItem>
            {label && (
              <FormLabel className="text-sm  font-semiBold text-black leading-6">
                {label}
              </FormLabel>
            )}
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "max-w-[10.563rem] text-center text-sm font-medium rounded-[6px] py-[8px] px-[16px]",
                    error ? "border-red-500" : "text-gray-500"
                  )}
                >
                  <span className="text-black font-medium text-sm">
                    {formattedDate}
                  </span>
                  <UpDownArrow className="h-4 w-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  onSelect={(date) => {
                    if (date) {
                      field.onChange(date.toISOString());
                    }
                    setOpen(false);
                  }}
                  initialFocus
                  selected={field.value}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
