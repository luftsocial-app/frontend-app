"use client";
import React from "react";

import { FormInputSelect } from "../form";
import { useGoogleLocations } from "@/hooks";

export function LocationSelect({ name }: { name?: string }) {
  const { loading, options, handleChange } = useGoogleLocations();

  return (
    <div className="flex flex-col gap-2 max-w-[23.563rem]">
      <FormInputSelect
        label="Location"
        loading={loading}
        options={options}
        name={name ?? "location"}
        rules={{
          required: "Please add a location",
        }}
        onInputChange={handleChange}
      />
    </div>
  );
}
