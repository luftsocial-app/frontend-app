import Image from "next/image";

export function GrapghicUi({ eventInfo = {} }) {
  const { event} = eventInfo;
  const { start, title, extendedProps = {} } = event;
  const eventTime = start
    ? new Date(start).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "";

  return (
    <div className="flex flex-col items-start gap-1 p-1 overflow-hidden">
      <div className="w-[50px] h-[80px] bg-gray-200 mb-2 relative rounded-[4px]">
        <Image
          className="object-cover"
          height={80}
          width={50}
          src={"/images/create-post/dummy.png"}
          alt="dfsd"
        />
        {/* <video
          className="w-full h-full object-cover"
          controls
          src="/path/to/your/video.mp4"
        /> */}
      </div>

      {/* Event Content */}
      <div className="flex items-center gap-1">
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
    </div>
  );
}
