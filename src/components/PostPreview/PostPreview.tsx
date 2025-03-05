import { VideoPreviewWithAspectRatio } from "../Common/VideoPreviewWithAspectRatio";
import { UseFormReturn } from "react-hook-form";

interface PostPreviewProps {
  methods: UseFormReturn<any>;
}
export function PostPreview({ methods }: PostPreviewProps) {
  return (
    <div className="mx-[5.188rem]">
      <VideoPreviewWithAspectRatio fieldName="postMedia" />
      <div className="py-[20px] rounded-bl-[12px] rounded-br-[12px] w-80 border">
        <div className="mt-[20px] ">
          <div className=" px-[6px]">
            <span className="text-xs font-bold">Location:</span>
            <span className="text-[#6D6D6D] text-xs font-bold">
              {methods.watch("location")?.label ?? methods.watch("location")}
            </span>
            <div className="mt-[10px]">
              <span className="text-xs font-bold">Collaborate:</span>
              <span className="text-[#6D6D6D] text-xs font-bold">
                {methods.watch("collaborators") ?? ""}
              </span>
            </div>
            <div className="my-[10px]">
              <span className="text-xs font-bold">Tag:</span>
              <span className="text-[#6D6D6D] text-xs font-bold">
                {methods.watch("tags")?.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="ml-[2px] text-[#6D6D6D] text-xs font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="border border-l-0 border-r-0 border-b-0" />
        <div className=" px-[6px]">
          <div className="mt-[10px]">
            <span className="text-xs font-bold">Title:</span>
            <span className="text-[#6D6D6D] text-xs font-bold">
              {methods.watch("title") ?? ""}
            </span>
          </div>
          <div className="my-[10px]">
            <span className="text-xs font-bold">Description:</span>
            <span className="text-[#6D6D6D] text-xs font-bold">
              {methods.watch?.("description") ?? ""}
            </span>
          </div>
          <div>
            <span className="text-xs font-bold">Hashtags:</span>
            <span className="text-[#6D6D6D] text-xs font-bold">
              {methods.watch("hashtags") ?? ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
