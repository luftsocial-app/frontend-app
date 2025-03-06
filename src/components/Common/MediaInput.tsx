"use client";

import useMediaInput from "@/hooks/useMediaInput";
import { CrossIcon } from "lucide-react";
import { useRef } from "react";
import { FormLabel } from "../ui/form";
import Image from "next/image";

export function MediaInput({ name, label }: { name: string; label? :string}) {
  const { handleMediaSelect, removeMedia, selectedMedia, mediaPreview } =
    useMediaInput(name);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <FormLabel className="text-sm  font-semiBold text-black leading-6">
        {label}
      </FormLabel>
      <div className="mt-4 relative ">
        {mediaPreview && (
          <div className="mb-4 relative inline-block">
            <button
              type="button"
              onClick={removeMedia}
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-2 h-2 flex items-center justify-center text-sm "
            >
              <CrossIcon />
            </button>

            {selectedMedia?.type.startsWith("image/") && (
              <img
                src={mediaPreview}
                alt="Media Preview"
                className="w-[66px] h-[103px] object-contain rounded-sm"
              />
            )}

            {selectedMedia?.type.startsWith("video/") && (
              <video
                src={mediaPreview}
                className="w-[66px] h-[103px] object-cover rounded-md shadow"
              />
            )}
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,video/*"
          onChange={handleMediaSelect}
          className="hidden"
        />
        <div className="flex gap-8 mt-[8px] ">
          <div className="flex items-center border border-[#EDEDED] max-w-[9.438rem] px-2 py-2 rounded-[10px] w-full min-h-[2rem] bg-white">
            <Image
              src="/images/create-post/library.png"
              height={18}
              width={18}
              alt="library"
            />
            <label
              className="cursor-pointer  text-gray-500 inline-block text-xs font-medium whitespace-nowrap ml-[4px]"
              onClick={() => fileInputRef.current?.click()}
            >
              Select From Library
            </label>
          </div>
          <div className="flex items-center bg-white border border-[#EDEDED] max-w-[9.438rem] px-2 py-2 rounded-[10px] w-full min-h-[2rem]">
            <Image
              src="/images/create-post/media.png"
              height={18}
              width={18}
              alt="media"
            />
            <label
              className="cursor-pointer  text-gray-500 inline-block text-xs font-medium whitespace-nowrap"
              onClick={() => fileInputRef.current?.click()}
            >
              Upload Media
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
