"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Select } from "@/components/Common/select";

interface PostTypeSelectProps {
  name: string;
  label?: string;
  required?: boolean;
  options: any[];
  validate?: any;
  className?: string;
}

export const FormSelect: React.FC<PostTypeSelectProps> = ({
  name,
  label,
  required,
  options,
  validate,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  let rules: any = {};
  if (required) {
    rules.required = "This field is required";
  }

  if (validate) {
    rules.validate = validate;
  }

  return (
    <div className={`mb-4 ${className || ""}`}>
      {/* {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )} */}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            options={options}
            placeholder="Select an option"
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors[name] && (
        <p className="text-sm text-red-700 font-medium">
          {errors[name]?.message ?? ""}
        </p>
      )}
    </div>
  );
};
