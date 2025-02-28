import { Send } from "lucide-react";
import { useFormContext } from "react-hook-form";

export function ScheduleButton() {
  const { watch } = useFormContext();
  const hasAnyValues = watch(["time_zone", "schedule_date", "schedule_time"]).some(
    (val) => !!val
  );
  console.log(watch(), "asdfasdfasdasd");

  const label = hasAnyValues ? "Schedule Post" : "Post Now";
  return (
    <button
      type="submit"
      className="flex py-[8px] px-[16px] border rounded-[6px]  items-center bg-secondaryBlue"
    >
      <Send size={24} className="mr-[2px] " stroke="white" />
      <button className="text-sm font-semibold text-white">{label} </button>
    </button>
  );
}
