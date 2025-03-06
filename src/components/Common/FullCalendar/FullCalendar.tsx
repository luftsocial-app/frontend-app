"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Facebook } from "@/icons";
import { ScheduleModal } from "@/Modals";
import { ScheduleHeader } from "@/components/ScheduleHeader";
import { ProfileSection } from "@/components/ProfileSection";
import { GrapghicUi, TextUi } from "@/components/Schedule";
import { DayHeaderContentArg } from "@fullcalendar/core/index.js";
import { FacebookIcon } from "@/icons/authIcons";
import { CustomCalendarHeader } from "@/components/CustomCalendarHeader";

function ScheduleFullCalendar() {
  const calendarRef = useRef<FullCalendar | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scheduleModalData, setScheduleModalData] = useState(null);
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const [expandedDays, setExpandedDays] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleDateClick = (info: any) => {
    alert("Date clicked: " + info.dateStr);
  };

  const handleEventClick = (info: any) => {
    setScheduleModalData(info?.event?.extendedProps);
    setIsModalOpen(true);
  };
  const handleEventsSet = (events: any) => {
    console.log("Events loaded:", events);
  };

  const eventData = [
    {
      id: "1",
      title: "Event 1",
      icon: <Facebook size={11} />,
      modalimage: "/images/create-post/ai-fill.png",
      sound: "Original Sound - APT - Rose & Bruno Mars",
      location: "New York, United States",
      collaborate: "@JohnDoe",
      tag: "@JohnDoe",
      modaltitle: "APT Dance",
      description:
        "Okay last time, We promise! 😆🥲🤪, Sped up version of the APT Dance! If you win, you live. If you lose, you die. If you don’t fight, you can’t win. If someone is willing to take my freedom,💗",
      hashtags:
        "#fyp #foryoupage #foryou #apt #aptdancechallenge #dance #dancechallenge",
    },
    {
      id: "2",
      title: "Event 2",
      icon: <Facebook size={11} />,
      modalimage: "/images/create-post/ai-fill.png",
      sound: "Original Sound - APT - Rose & Bruno Mars",
      location: "New York, United States",
      collaborate: "@JohnDoe",
      tag: "@JohnDoe",
      modaltitle: "APT Dance",
      description:
        "Okay last time, We promise! 😆🥲🤪, Sped up version of the APT Dance! If you win, you live. If you lose, you die. If you don’t fight, you can’t win. If someone is willing to take my freedom,💗",
      hashtags:
        "#fyp #foryoupage #foryou #apt #aptdancechallenge #dance #dancechallenge",
    },
  ];

  const generateEvents = () => {
    const events: {
      id: string;
      title: string;
      start: string;
      allDay: boolean;
      extendedProps: {
        id: string;
        title: string;
        icon: React.JSX.Element;
        modalimage: string;
        sound: string;
        location: string;
        collaborate: string;
        tag: string;
        modaltitle: string;
        description: string;
        hashtags: string;
      };
      image: React.JSX.Element;
    }[] = [];
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    for (let day = 1; day <= 31; day++) {
      const date = new Date(year, month, day);
      if (date.getMonth() === month) {
        eventData.forEach((dataItem) => {
          events.push({
            id: dataItem.id,
            title: dataItem.title,
            start: `${date.toISOString().split("T")[0]}T11:15:00`,
            allDay: false,
            extendedProps: {
              ...dataItem,
            },
            image: dataItem.icon,
          });
        });
      }
    }
    return events;
  };

  const initialEvents = useMemo(() => generateEvents(), []);

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
    <div>
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
            {isModalOpen && scheduleModalData && (
              <ScheduleModal
                open={isModalOpen}
                data={scheduleModalData}
                onContinue={() => setIsModalOpen(false)}
                onClose={() => setIsModalOpen(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduleFullCalendar;
