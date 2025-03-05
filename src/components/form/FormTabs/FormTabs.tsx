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
  options: { label: string; value: string; icon?: React.ReactNode }[];
  loading?: boolean;
  label?: string;
  name: string;
  className: string;
  tooltipStyles?: string;
  onChange?: (value: string) => void;
  variant?: "bg" | "underline";
}

export function FormTabs({
  options,
  label,
  name,
  tooltipStyles,
  className,
  onChange,
  variant,
  ...rest
}: Readonly<FormTabsSelectProps>) {
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
            <Tooltip
              onChange={onChange}
              options={options}
              tooltipStyles={tooltipStyles}
              className={className}
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
