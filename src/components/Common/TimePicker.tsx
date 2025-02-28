"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFormContext, Controller } from "react-hook-form";

interface TimePickerProps {
  name: string;
  label?: string;
}

export function TimePicker({ name, label }: TimePickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col text-black text-sm font-medium">
          {label && <label className="mb-1">{label}</label>}
          <Select onValueChange={field.onChange} value={field.value ?? ""}>
            <SelectTrigger className="font-normal focus:ring-0 w-[120px] border border-gray-300 rounded-md p-2">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="bg-white shadow-md rounded-md">
              <ScrollArea className="h-[15rem]">
                {Array.from({ length: 96 }).map((_, i) => {
                  const hour = Math.floor(i / 4)
                    .toString()
                    .padStart(2, "0");
                  const minute = ((i % 4) * 15).toString().padStart(2, "0");
                  return (
                    <SelectItem key={i} value={`${hour}:${minute}`}>
                      {hour}:{minute}
                    </SelectItem>
                  );
                })}
              </ScrollArea>
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
