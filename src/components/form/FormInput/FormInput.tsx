"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputSelectProps extends UseControllerProps {
  placeholder:string;
  label?: string;
  name: string;
}

export function FormInput({
  label,
  name,
  placeholder,
  ...rest
}: Readonly<FormInputSelectProps>) {
  const form = useFormContext();

  return (
    <div className="">
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Input {...field} placeholder={placeholder} className="" />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}