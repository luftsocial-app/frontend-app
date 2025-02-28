"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MediaInput } from "@/components/Common/MediaInput";

interface FormMediaInputProps extends UseControllerProps {
  label?: string;
  name: string;
  className?:string;
}

export function FormMediaInput({
  label,
  name,
  className,
  ...rest
}: Readonly<FormMediaInputProps>) {
  const form = useFormContext();

  return (
    <div className={className}>
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm font-semiBold">{label}</FormLabel>
            <MediaInput {...field} name="attachement" />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
