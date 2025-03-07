"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormSelect } from "../form";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";
import { FormLabel } from "../ui/form";

interface ScheduleComponentProps {
  initialDate?: string;
  scheduleText?: string;
  privateMessage?: string;
  label?: string;
  initialTimezone?: string;
  initialTime?: string;
}

const ScheduleComponent = ({
  scheduleText,
  privateMessage,
  label,
}: ScheduleComponentProps) => {
  const methods = useForm({
    defaultValues: {
      schedule_date: "2025-02-13",
      schedule_time: "12:00",
      time_zone: "time_zone",
    },
  });

  return (
    <FormProvider {...methods}>
      <div>
        <FormLabel>{label}</FormLabel>
        <div className="border rounded-lg py-[12px] px-[14px] font-sans bg-white min-h-[11.625rem]">
          <p className="text-sm mb-[20px] font-bold text-[#6D6D6D]">
            Select a date to Schedule your post and make it Public.
          </p>
          <span className="font-semibold text-sm text-black">
            {scheduleText}
          </span>
          <div>
            <div className="flex gap-2 items-center mt-[10px]">
              <DatePicker name="schedule_date" />
              <TimePicker name="schedule_time" />
              <FormSelect
                name="time_zone"
                options={[
                  { label: "UTC", value: "utc" },
                  { label: "Time Zone", value: "time_zone" },
                ]}
                className="max-w-[10.563rem] items-center text-sm font-medium border active:border-secondaryBlue text-black active:text-secondaryBlue"
              />
            </div>
          </div>
          <p className="text-sm mt-[20px] font-medium">{privateMessage}</p>
        </div>
      </div>
    </FormProvider>
  );
};

export default ScheduleComponent;
