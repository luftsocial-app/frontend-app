"use client";

import React, { useState } from "react";
import { FormSelect } from "../form";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";

interface ScheduleComponentProps {
  initialDate?: string;
  scheduleText?: string;
  privateMessage?: string;
}

const ScheduleComponent = ({
  initialDate,
  scheduleText,
  privateMessage,
}: ScheduleComponentProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined | null>(
    initialDate ? new Date(initialDate) : undefined
  );
  const [selectedTimezone, setSelectedTimezone] = useState<string>("UTC");

  return (
    <div>
      <div className="border rounded-lg py-[12px] px-[14px] font-sans mt-10 max-w-[47.5rem]">
        <p className="text-sm mb-[20px] font-medium">
          Select a date to Schedule your post and make it Public.
        </p>
        <span className="font-semibold text-sm text-black">{scheduleText}</span>
        <div>
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
                className={`max-w-[10.563rem] items-center text-sm font-medium 
                  border ${
                    selectedTimezone
                      ? "border-secondaryBlue text-secondaryBlue"
                      : "border-secondaryBlue"
                  }`}
              />
            </div>
          </div>
          <p className="text-sm mt-[20px]">{privateMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
