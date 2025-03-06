import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FullCalendar from "@fullcalendar/react";
import { ViewType } from "../ViewType";

interface CustomCalendarHeaderProps {
  calendarRef: React.RefObject<FullCalendar | null>;
}

export function CustomCalendarHeader({
  calendarRef,
}: CustomCalendarHeaderProps) {
  const [viewType, setViewType] = useState<"List" | "Grid">("Grid");
  const [calendarView, setCalendarView] = useState<string>("dayGridMonth");

  const calendarApi = calendarRef.current?.getApi();
  const currentStart = calendarApi?.view.currentStart || new Date();

  const handleCalendarViewChange = (viewName: string) => {
    calendarApi?.changeView(viewName);
    setCalendarView(viewName);
  };

  const handleViewTypeChange = (newView: "List" | "Grid") => {
    setViewType(newView);
    if (newView === "List") {
      handleCalendarViewChange("listWeek");
    } else {
      handleCalendarViewChange("dayGridMonth");
    }
  };

  return (
    <div className="flex items-center">
      <div className="flex">
        <div className="flex items-center">
          <button
            onClick={() => handleCalendarViewChange("dayGridMonth")}
            className="px-[18px] py-[5px] text-black border rounded-[6px] mr-[20px] text-xs font-semibold"
            title="Today"
           >
            Today
          </button>
          <button
            onClick={() => {
              calendarApi?.prev();
              setCalendarView(calendarApi?.view.type || "dayGridMonth");
            }}
            className="mr-[10px]"
            title="Previous Month"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => {
              calendarApi?.next();
              setCalendarView(calendarApi?.view.type || "dayGridMonth");
            }}
            className="mr-[10px]"
            title="Next Month"
          >
            <ChevronRight size={16} />
          </button>
          <h2 className="text-xs font-semibold mr-[20px]">
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
            }).format(currentStart)}
          </h2>

          <button
            onClick={() => handleCalendarViewChange("dayGridMonth")}
            className="px-[15px] py-[5px] text-black border rounded-[6px] flex text-xs font-semibold mr-[20.188rem]"
            title="Today"
          >
            GMT + 2
          </button>
        </div>

        <div className="flex items-center">
          <ViewType activeView={viewType} onViewChange={handleViewTypeChange} />

          <div className="border rounded-[4px] text-end flex">
            <button
              onClick={() => handleCalendarViewChange("timeGridDay")}
              className={`px-[20px] py-[5px] ${
                calendarView === "timeGridDay"
                  ? "bg-secondaryBlue text-white rounded-l-[4px]"
                  : "text-black"
              } border-r text-xs font-semibold`}
              title="Day View"
            >
              Daily
            </button>

            <button
              onClick={() => handleCalendarViewChange("timeGridWeek")}
              className={`px-[20px] py-[5px] ${
                calendarView === "timeGridWeek"
                  ? "bg-secondaryBlue text-white"
                  : "text-black"
              } border-r text-xs font-semibold`}
              title="Week View"
            >
              Weekly
            </button>
            <button
              onClick={() => handleCalendarViewChange("dayGridMonth")}
              className={`px-[20px] py-[5px] ${
                calendarView === "dayGridMonth"
                  ? "bg-secondaryBlue text-white rounded-r-[4px]"
                  : "text-black"
              } text-xs font-semibold`}
              title="Month View"
            >
              Monthly
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
