import Image from "next/image";

export function ScheduleHeader() {
  return (
    <div className="py-6 px-[35px] flex justify-between items-center">
      <p className="text-base font-semibold">Scheduled Posts</p>
      <div className="flex items-center gap-2 bg-[#0317C6] py-1 px-[9px] rounded-[6px]">
        <Image
          src="/images/create-post/createPostIcon.png"
          width={20}
          height={20}
          alt="post"
        />
        <button className="text-white font-semibold text-xs">
          Create Post
        </button>
      </div>
    </div>
  );
}
