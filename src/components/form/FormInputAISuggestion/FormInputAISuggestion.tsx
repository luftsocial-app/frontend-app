"use client";
import Image from "next/image";
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
    <div className="w-full rounded-lg">
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative mt-2 bg-white">
        <div className="flex items-center border border-gray-300 rounded-lg py-[12px] px-[14px]">
          <Controller
            name={name}
            control={control}
            defaultValue=""
            rules={required ? { required: "This field is required" } : {}}
            render={({ field }) => (
              <textarea
                {...field}
                id={name}
                className="w-full overflow-y-auto focus:outline-none text-sm font-semibold text-secondaryBlack2"
                // rows={3}
                style={{ resize: "none" }}
              />
            )}
          />
          <button
            type="button"
            onClick={fetchAISuggestion}
            className="btn-primary-outline border-[1px] border-[#0317C6] rounded-[6px] w-[89px] text-xs font-semibold py-[8px] px-[10px] whitespace-nowrap text-[#0317C6] flex items-center justify-center"
            disabled={loading}
          >
            <Image
              src="/images/create-post/ai-fill.png"
              width={20}
              height={20}
              alt="ai-fill"
              className="mr-1"
            />
            <span>{loading ? "Loading..." : "AI Assist"}</span>
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
