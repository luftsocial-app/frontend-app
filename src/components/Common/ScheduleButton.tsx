"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { FormDialogBox } from "../form/FormDialogBox/FormDialogBox";

export function ScheduleButton() {
  const { watch } = useFormContext();
  const [open, setOpen] = useState(false);

  const hasAnyValues = watch([
    "time_zone",
    "schedule_date",
    "schedule_time",
  ]).some((val) => !!val);

  const label = hasAnyValues ? "Schedule Post" : "Post Now";

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <div className="flex  justify-end w-full">
        <button
          type="button"
          onClick={handleClick}
          className="flex py-[8px] px-[16px] border rounded-[6px] items-center bg-secondaryBlue"
        >
          <Send size={24} className="mr-[2px]" stroke="white" />
          <span className="text-sm font-semibold text-white">{label}</span>
        </button>
        {label === "Schedule Post" && (
          <FormDialogBox
            name="schedulepost"
            open={open}
            title={"Your Post has been Scheduled"}
            onClose={() => setOpen(false)}
            buttonText1={"Continue"}
            buttonText2={"Review Scheduled Posts"}
            icon={"/images/create-post/schedule.png"}
          />
        )}
        {label === "Post Now" && (
          <FormDialogBox
            name="postnow"
            open={open}
            title={"Confirm Post Publishing"}
            subHeading="Your post will go live immediately. Are you sure you want to proceed?"
            onClose={() => setOpen(false)}
            buttonText1={"Continue"}
            buttonText2={"Review Post"}
          />
        )}
      </div>
    </>
  );
}
