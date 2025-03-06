"use client";

import { UseControllerProps, useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DialogBox } from "@/components/DialogBox";

interface FormDialogBoxProps extends UseControllerProps {
  loading?: boolean;
  label?: string;
  name: string;
  title: string;
  subHeading?: string;
  open: boolean;
  onClose: () => void;
  icon?: string;
  buttonText1: string;
  buttonText2: string;
}

export function FormDialogBox({
  label,
  name,
  title,
  open,
  onClose,
  buttonText1,
  buttonText2,
  icon,
  ...rest
}: Readonly<FormDialogBoxProps>) {
  const form = useFormContext();

  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        {...rest}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm  font-semiBold text-black leading-6">
              {label}
            </FormLabel>
            <DialogBox
              title={title}
              open={open}
              buttonText1={buttonText1}
              buttonText2={buttonText2}
              icon={icon}
            />
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
