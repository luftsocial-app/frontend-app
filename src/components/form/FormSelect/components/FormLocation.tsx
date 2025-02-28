"use client";

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { LocationSelect } from "@/components/Common/LocationSelect";

interface FormLocationProps {
  placeholder?: string;
  required?: string;
  name: string;
  validate?: any;
  className?: string;
  label: string;
}

export const FormLocation: React.FC<FormLocationProps> = ({
  placeholder,
  required,
  validate,
  className,
  name,
  label,
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
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <LocationSelect {...field}/>
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
