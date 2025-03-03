"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tooltip } from "@/components/Common/Tooltip/Tooltip";

interface FormTabsSelectProps extends UseControllerProps {
  options: any[];
  loading?: boolean;
  label?: string;
  name: string;
}

export function FormTabsSelect({
  options,
  label,
  name,
  ...rest
}: Readonly<FormTabsSelectProps>) {
  const form = useFormContext();

  return (
    <div className="min-w-[23.563rem]">
      <FormField
        control={form?.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <Tooltip onChange={field.onChange} options={options} />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
