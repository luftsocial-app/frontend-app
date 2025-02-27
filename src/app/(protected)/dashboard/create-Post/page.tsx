"use client";

import { FormInput, FormSelect, InputLocation } from "@/components";
import { InputLabel } from "@/components/Common/label";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

export default function CreatePost() {
  const methods = useForm({
    defaultValues: {
      postType: "Reel",
    },
  });

  const fruitOptions = [
    { label: "Reel", value: "Reel" },
    { label: "Story", value: "Story" },
    { label: "Post", value: "Post" },
    { label: "Short", value: "Short" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex-grow ml-[20px] "
      >
        <div className="flex items-center gap-x-5  w-full">
          <div className="w-full max-w-[23.563rem]">
            <InputLabel
              label="Post Type"
              classname="text-sm mb-1 font-semibold"
            />
            <FormSelect
              name="postType"
              options={fruitOptions}
              className="border-orange-900 border-0 rounded-none shadow-none w-full"
            />
          </div>
          <div className=" w-full max-w-[23.563rem]">
            <InputLabel
              label="Post Title"
              classname="text-sm mb-1 font-semibold"
            />
            <FormInput
              placeholder="APT Dance"
              name="input"
              className="w-full"
            />
          </div>
        </div>
        <div className="w-full max-w-[23.563rem]">
          <InputLocation />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white ml-[20px]"
        >
          Submit
        </button>
      </form>
    </FormProvider>
  );
}
