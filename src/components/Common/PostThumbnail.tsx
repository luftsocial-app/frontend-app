"use client";

import React, { useRef, useState, useEffect } from "react";
import useMediaInput from "@/hooks/useMediaInput";
import { FormLabel } from "../ui/form";
import Image from "next/image";
import { ThumbnailModal } from "@/Modals/ThumbnailModal";
import { useFormContext } from "react-hook-form";

export function PostThumbnail({
  name,
  label,
  sourceRefFieldName,
}: {
  name: string;
  label?: string;
  sourceRefFieldName?: string;
}) {
  const { watch } = useFormContext();
  const { selectedMedia, mediaPreview, removeMedia } = useMediaInput(
    sourceRefFieldName ?? ""
  );
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isVideo = selectedMedia?.type.startsWith("video/");

  const thumbnail = watch(name);

  if (!mediaPreview || !isVideo) return null;

  return (
    <div>
      <FormLabel className="text-sm  font-semiBold text-black leading-6">
        {label}
      </FormLabel>
      <div className="mt-4 relative">
        <div className="mb-4 relative inline-block">
          <button
            type="button"
            onClick={removeMedia}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-2 h-2 flex items-center justify-center text-sm"
          ></button>

          {/* For images, show the normal preview */}
          {selectedMedia?.type.startsWith("image/") && (
            <img
              src={mediaPreview}
              alt="Media Preview"
              className="w-[66px] h-[103px] object-contain rounded-sm"
            />
          )}

          {/* For videos, display the generated thumbnail */}
          {selectedMedia?.type.startsWith("video/") && (
            <>
              {/* Hidden video element used for generating the thumbnail */}
              <video
                ref={videoRef}
                src={mediaPreview}
                autoPlay={false}
                muted
                playsInline
                crossOrigin="anonymous"
                className="w-[66px] h-[103px] object-contain rounded-sm hidden"
              />
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Video Thumbnail"
                  className="w-[66px] h-[103px] object-cover rounded-sm"
                />
              ) : (
                <video
                  ref={videoRef}
                  src={mediaPreview}
                  autoPlay={false}
                  crossOrigin="anonymous"
                  className="w-[66px] h-[103px] object-cover rounded-sm pointer-events-none"
                  muted
                  playsInline
                />
              )}
            </>
          )}
        </div>

        <div className="flex gap-8 mt-[8px]">
          <div
            className="flex items-center border border-[#EDEDED] max-w-[9.438rem] px-2 py-2 rounded-[10px] w-full h-[32px] bg-white"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src="/images/create-post/library.png"
              height={18}
              width={18}
              alt="library"
            />
            <label className="cursor-pointer text-gray-500 inline-block text-xs font-medium whitespace-nowrap ml-[4px]">
              Edit Thumbnail
            </label>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ThumbnailModal
          name={name}
          videoUrl={mediaPreview}
          onClose={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
