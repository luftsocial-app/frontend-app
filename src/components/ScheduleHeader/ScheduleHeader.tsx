import Image from "next/image";

export function ScheduleHeader() {
  return (
    <div className="py-[20px] px-[35px] flex justify-between items-center">
      <p className="text-base font-semibold">Scheduled Posts</p>
      <div className="flex items-center gap-2 bg-primaryBlue2 py-[4px] px-[9px] rounded-[6px] h-8">
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
