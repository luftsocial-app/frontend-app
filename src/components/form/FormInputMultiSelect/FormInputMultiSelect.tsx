"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputMultiSelect } from "@/components/Common/select";

interface MultiSelectProps extends UseControllerProps {
  label?: string;
  name: string;
  options: { value: string; label: string }[];
}

export function FormInputMultiSelect({
  name,
  label,
  options,
  ...rest
}: MultiSelectProps) {
  const form = useFormContext();

  return (
    <div className="min-w-[23.563rem]">
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm  font-semiBold text-black leading-6">
              {label}
            </FormLabel>
            <InputMultiSelect
              options={options}
              onChange={field.onChange}
              value={field.value}
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
