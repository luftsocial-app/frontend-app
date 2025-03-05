import Image from "next/image";

export function TextUi({ eventInfo = {} }) {
  const { event } = eventInfo;
  const { start, title, extendedProps = {} } = event;
  const eventTime = start
    ? new Date(start).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "";

  return (
    <div className="flex items-center gap-1 p-1 overflow-hidden">
      <div className="h-4 w-[2px] bg-red-600 rounded"></div>
      <span className="text-[10px] text-gray-600">{eventTime}</span>
      <Image
        src="/images/create-post/attachement.png"
        height={9}
        width={9}
        alt="attachment"
      />
      <span className="text-[10px]">{title}</span>
      {extendedProps.icon}
    </div>
  );
}
