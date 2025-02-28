"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Select } from "@/components/Common/select";
import { Input } from "@/components/ui/input";

interface PostTypeSelectProps {
  placeholder?: string;
  required?: string;
  name: string;
  validate?: any;
  className?: string;
}

export const FormInput: React.FC<PostTypeSelectProps> = ({
  placeholder,
  required,
  validate,
  className,
  name,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const rules: any = {};
  if (required) {
    rules.required = "This field is required";
  }

  if (validate) {
    rules.validate = validate;
  }

  return (
    <div className={`mb-4 ${className || ""}`}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            className="max-w-[23.563rem]"
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-700 font-medium">
          {typeof errors[name]?.message === "string"
            ? errors[name]?.message
            : ""}
        </p>
      )}
    </div>
  );
};
