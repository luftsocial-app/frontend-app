"use client";

import useMediaInput from "@/hooks/useMediaInput";
import { CrossIcon, UploadIcon } from "lucide-react";
import { useRef } from "react";

export function MediaInput({ name }: { name: string }) {
  const { handleMediaSelect, removeMedia, selectedMedia, mediaPreview } =
    useMediaInput(name);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="mt-4 relative ">
      {mediaPreview && (
        <div className="mb-4 relative inline-block">
          <button
            type="button"
            onClick={removeMedia}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-2 h-2 flex items-center justify-center text-sm "
          >
            {/* ✖ */}
            <CrossIcon />
          </button>

          {selectedMedia?.type.startsWith("image/") && (
            <img
              src={mediaPreview}
              alt="Media Preview"
              className="max-w-[66px] max-h-[103px] object-contain rounded-sm"
            />
          )}

          {selectedMedia?.type.startsWith("video/") && (
            <video
              src={mediaPreview}
              controls
              className="max-w-xs max-h-48 object-contain rounded-md shadow"
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
      <div className="flex gap-8">
        <div className="flex items-center border border-[#EDEDED] px-2 py-2 max-w-[7.5rem] rounded-[10px] w-full">
          <UploadIcon className="mr-2" />
          <label
            className="cursor-pointer bg-white text-gray-500 inline-block text-xs font-medium whitespace-nowrap"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Media
          </label>
        </div>
        <div className="flex items-center border border-[#EDEDED] px-2 py-2 max-w-[9.438rem] rounded-[10px] w-full">
          <UploadIcon className="mr-2" />
          <label
            className="cursor-pointer bg-white text-gray-500 inline-block text-xs font-medium whitespace-nowrap"
            onClick={() => fileInputRef.current?.click()}
          >
            Select From Library
          </label>
        </div>
      </div>
    </div>
  );
}
