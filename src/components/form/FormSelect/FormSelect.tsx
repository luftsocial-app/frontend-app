"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Select } from "@/components/Common/select/SelectPost/SelectPost";

interface FormSelectProps extends UseControllerProps {
  name: string;
  label?: string;
  required?: boolean;
  options: any[];
  validate?: any;
  className?: string;

}

export function FormSelect({
  name,
  label,
  required,
  options,
  validate,
  className,
  ...rest
}: Readonly<FormSelectProps>) {
  const form = useFormContext();

  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <Select
              options={options}
              placeholder="Select an option"
              value={field.value}
              onChange={field.onChange}
              className="py-[12px] px-[14px] bg-white"
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
