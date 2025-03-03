"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tooltip } from "@/components/Common/Tooltip/Tooltip";
import { DialogBox } from "@/components/DialogBox";

interface FormDialogBoxProps extends UseControllerProps {
  options: any[];
  loading?: boolean;
  label?: string;
  name: string;
}

export function FormDialogBox({
  options,
  label,
  name,
  ...rest
}: Readonly<FormDialogBoxProps>) {
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
            <DialogBox />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
