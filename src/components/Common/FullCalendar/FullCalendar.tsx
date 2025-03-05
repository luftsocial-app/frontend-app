"use client";
import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Facebook } from "@/icons";
import { ScheduleModal } from "@/Modals";
import { ScheduleHeader } from "@/components/ScheduleHeader";
import { ProfileSection } from "@/components/ProfileSection";
import listPlugin from "@fullcalendar/list";
import { GrapghicUi, TextUi } from "@/components/Schedule";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";
import { FacebookIcon } from "@/icons/authIcons";
import { CustomCalendarHeader } from "@/components/CustomCalendarHeader";

function ScheduleFullCalendar() {
  const calendarRef = useRef<FullCalendar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const [expandedDays, setExpandedDays] = useState<{ [key: string]: boolean }>(
    {}
  );

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
            image: <FacebookIcon />,
          },
          {
            title: "Event 2",
            start: `${date.toISOString().split("T")[0]}T12:15:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
            image: <FacebookIcon />,
          },
          {
            title: "Event 3",
            start: `${date.toISOString().split("T")[0]}T11:12:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
            image: <FacebookIcon />,
          },
          {
            title: "Event 4",
            start: `${date.toISOString().split("T")[0]}T14:10:00`,
            allDay: false,
            extendedProps: { icon: <Facebook size={11} /> },
            image: <FacebookIcon />,
          }
        );
      }
    }
    return events;
  };
  const initialEvents = generateEvents();

  const getEventsForDate = (date: any) => {
    const formattedDate = date.toISOString().split("T")[0];
    return initialEvents.filter((event) =>
      event.start.startsWith(formattedDate)
    );
  };

  const handleExpandClick = (date: string) => {
    setExpandedDays((prev) => ({
      ...prev,
      [date]: !prev[date],
    }));
  };

  const customViewType = "text";

  const eventContent = (eventInfo: any) => {
    const selectedDate = new Date(eventInfo.event.start);
    const formattedDate = selectedDate.toISOString().split("T")[0];
    const dailyEvents = getEventsForDate(selectedDate);
    const eventIndex = dailyEvents.findIndex(
      (event) => event?.title === eventInfo?.event?.title
    );

    if (customViewType === "text") {
      if (eventIndex < 2) {
        return (
          <div className="flex flex-col items-start">
            <TextUi eventInfo={eventInfo} />
            {eventIndex === 1 &&
              !expandedDays[formattedDate] &&
              dailyEvents.length > 2 && (
                <p
                  onClick={() => handleExpandClick(formattedDate)}
                  className="cursor-pointer text-[11px] text-[#1E31D7] mt-4 font-semibold"
                >
                  All ({dailyEvents.length - 2} posts)
                </p>
              )}
          </div>
        );
      }
    } else {
      if (eventIndex === 0 && !expandedDays[formattedDate]) {
        return (
          <div className="flex flex-col items-start">
            <GrapghicUi eventInfo={eventInfo} />
            {dailyEvents.length > 1 && (
              <p
                onClick={() => handleExpandClick(formattedDate)}
                className="cursor-pointer text-[11px] text-[#1E31D7] mt-4 font-semibold"
              >
                All ({dailyEvents.length - 1} posts)
              </p>
            )}
          </div>
        );
      }
    }
    if (expandedDays[formattedDate]) {
      return (
        <div>
          {customViewType === "text" ? (
            <TextUi eventInfo={eventInfo} />
          ) : (
            <GrapghicUi eventInfo={eventInfo} />
          )}
        </div>
      );
    }

    return null;
  };

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi();
    if (calendarApi) {
      const handleViewChange = () => {
        setCurrentView(calendarApi.view.type);
      };
      calendarApi.on("datesSet", handleViewChange);
      return () => {
        calendarApi.off("datesSet", handleViewChange);
      };
    }
  }, []);

  return (
    <div className="" onClick={() => setIsModalOpen(false)}>
      <ScheduleHeader />
      <div className="calendar-container bg-white rounded-md shadow-sm">
        <div className="flex">
          <ProfileSection />
          <div className="flex-1">
            <div className="py-[14px] px-[20px] border border-b-0 border-l-0">
              <CustomCalendarHeader calendarRef={calendarRef} />
            </div>
            <FullCalendar
              ref={calendarRef}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              dayHeaderClassNames={() => "px-[25px] py-[12px] font-semibold"}
              dayHeaderContent={(args: DayHeaderContentArg) =>
                args.date.toLocaleDateString("en-US", { weekday: "long" })
              }
              dayCellClassNames={"bg-[#F9FBFC]"}
              initialView="dayGridMonth"
              headerToolbar={false}
              events={initialEvents}
              dateClick={handleDateClick}
              eventClick={handleEventClick}
              eventsSet={handleEventsSet}
              selectable={true}
              editable={true}
              eventContent={eventContent}
            />
            {isModalOpen && <ScheduleModal />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleFullCalendar;
