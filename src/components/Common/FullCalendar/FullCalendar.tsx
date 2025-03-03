"use client";
import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Facebook } from "@/icons";
import { ScheduleModal } from "@/Modals";
import { ScheduleHeader } from "@/components/ScheduleHeader";
import { ProfileSection } from "@/components/ProfileSection";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip } from "../Tooltip/Tooltip";
import listPlugin from "@fullcalendar/list";
import Image from "next/image";

function ScheduleFullCalendar() {
  const calendarRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDateClick = (info: any) => {
    alert("Date clicked: " + info.dateStr);
  };

  const handleEventClick = (info: any) => {
    setIsModalOpen(true);
  };

  const handleEventsSet = (events: any) => {
    console.log("Events loaded:", events);
  };

  const generateEvents = () => {
    const events = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() === month) {
        events.push(
          {
            title: "Event 1",
            start: `${date.toISOString().split("T")[0]}T11:15:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
          },
          {
            title: "Event 2",
            start: `${date.toISOString().split("T")[0]}T12:15:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
          },
          {
            title: "Event 3",
            start: `${date.toISOString().split("T")[0]}T11:12:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
          }
        );
      }
    }
    return events;
  };

  const initialEvents = generateEvents();

  const renderCustomHeader = () => {
    return (
      <div className="flex items-center gap-4">
        <div className="max-w-[233px] border-r px-[22px]">
          <p className="text-sm font-semibold ">Social Profiles</p>
        </div>
        <div className="flex gap-28">
          <div className="flex items-center gap-2 ml-4 ">
            <button
              onClick={() => calendarRef.current?.getApi().today()}
              className="px-[18px] py-[5px] text-black border rounded-[6px] mr-[20px]"
              title="Today"
            >
              Today
            </button>
            <button
              onClick={() => calendarRef.current?.getApi().prev()}
              className="px-2 py-1"
              title="Previous Month"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => calendarRef.current?.getApi().next()}
              className="py-1"
              title="Next Month"
            >
              <ChevronRight size={20} />
            </button>

            <h2 className="text-lg font-semibold mr-[20px]">
              {calendarRef.current?.getApi().view.title}
            </h2>
            <button
              onClick={() => calendarRef.current?.getApi().today()}
              className="px-[18px] py-[5px] text-black border rounded-[6px] flex"
              title="Today"
            >
              GMT + 2
            </button>
          </div>

          <div className="flex items-center">
            <Tooltip
              options={[
                { label: "Grid View", value: "dayGridMonth" },
                { label: "List View", value: "listWeek" },
              ]}
              onChange={(value) =>
                calendarRef.current?.getApi().changeView(value)
              }
            />

            <div className="border rounded-[4px] text-end flex">
              <button
                onClick={() =>
                  calendarRef.current?.getApi().changeView("timeGridDay")
                }
                className={`px-4 py-2 ${
                  calendarRef.current?.getApi().view.type === "timeGridDay"
                    ? "bg-blue-600 text-white"
                    : "text-black"
                }`}
                title="Day View"
              >
                Daily
              </button>

              <button
                onClick={() =>
                  calendarRef.current?.getApi().changeView("timeGridWeek")
                }
                className={`px-4 py-2 ${
                  calendarRef.current?.getApi().view.type === "timeGridWeek"
                    ? "bg-blue-600 text-white"
                    : "text-black"
                } border-r`}
                title="Week View"
              >
                Weekly
              </button>
              <button
                onClick={() =>
                  calendarRef.current?.getApi().changeView("dayGridMonth")
                }
                className={`px-4 py-2 ${
                  calendarRef.current?.getApi().view.type === "dayGridMonth"
                    ? "bg-secondaryBlue text-white"
                    : "text-black"
                } border-r`}
                title="Month View"
              >
                Monthly
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="" onClick={() => setIsModalOpen(false)}>
      <ScheduleHeader />
      <div className="py-[10px] px-[35px] border">{renderCustomHeader()}</div>

      <div className="calendar-container bg-white rounded-md shadow-sm">
        <div className="flex">
          <ProfileSection />
          <div className="flex-1">
            <FullCalendar
              ref={calendarRef}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              initialView="dayGridMonth"
              headerToolbar={false}
              events={initialEvents}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={handleEventsSet}
              selectable={true}
              editable={true}
              eventContent={(eventInfo) => (
                <div className="flex items-center gap-1 p-[5px] overflow-hidden">
                  <div className="h-4 w-[2px] bg-red-600 rounded"></div>
                  <span className="text-[10px] text-gray-600">
                    {new Date(eventInfo.event.start).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </span>
                  <Image
                    src="/images/create-post/attachement.png"
                    height={9}
                    width={9}
                    alt="attachment"
                  />
                  <span className="text-[10px]">{eventInfo.event.title}</span>
                  {eventInfo.event.extendedProps.icon}
                </div>
              )}
            />
            {isModalOpen && <ScheduleModal />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleFullCalendar;
