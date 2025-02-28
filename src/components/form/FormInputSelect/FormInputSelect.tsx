"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputSelect } from "@/components/Common/select/InputSelect";

interface FormInputSelectProps extends UseControllerProps {
  options: any[];
  loading?: boolean;
  label?: string;
  name: string;
  onInputChange: (value: string) => void;
}

export function FormInputSelect({
  options,
  loading,
  label,
  name,
  onInputChange,
  ...rest
}: Readonly<FormInputSelectProps>) {
  const form = useFormContext();

  return (
    <div className="min-w-[23.563rem]">
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <InputSelect
              options={options}
              onInputChange={onInputChange}
              onSelect={field.onChange}
              loading={loading}
              defaultValue={field.value}
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
