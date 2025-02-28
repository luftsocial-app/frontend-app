"use client";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

interface InputWithAISuggestionProps {
  name: string;
  label: string;
  required?: boolean;
}

export function InputWithAISuggestion({
  name,
  label,
  required = false,
}: InputWithAISuggestionProps) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [loading, setLoading] = useState(false);

  const fetchAISuggestion = async () => {
    setLoading(true);
    setTimeout(() => {
      setValue(name, "This is a new AI-generated caption suggestion.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="w-full  p-4  rounded-lg">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative mt-2">
        <div className="flex items-center gap-5">
          <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={required ? { required: "This field is required" } : {}}
            render={({ field }) => (
              <textarea
                {...field}
                id={name}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-primaryBlue focus:border-primaryBlue max-h-[72px] overflow-y-auto"
                rows={3}
                style={{ resize: "none" }}
              />
            )}
          />

          <button
            type="button"
            onClick={fetchAISuggestion}
            className="btn-primary-outline"
            disabled={loading}
          >
            {loading ? "Loading..." : "✨ AI Assist"}
          </button>
        </div>
        {errors[name] && (
          <p className="text-red-500 text-sm mt-1">
            {errors[name]?.message?.toString()}
          </p>
        )}
      </div>
    </div>
  );
}
