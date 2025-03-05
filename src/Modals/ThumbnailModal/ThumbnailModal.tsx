"use client";

import React, { useState, useRef, useEffect } from "react";
import { generateThumbnails } from "@/utils/generateThumbnails";
import { useFormContext } from "react-hook-form";

interface ThumbnailEditModalProps {
  name: string;
  videoUrl: string;
  onClose: (updatedThumbnail: string) => void;
}

interface Thumbnail {
  name?: string;
  dataUrl: string;
  time: number;
}

export function ThumbnailModal({
  name,
  videoUrl,
  onClose,
}: ThumbnailEditModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const [preview, setPreview] = useState<string>("");
  const { setValue } = useFormContext();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    generateThumbnails(videoRef, setThumbnails, setPreview);
  }, [videoUrl]);

  const handleThumbnailClick = (thumb: Thumbnail) => {
    setPreview(thumb.dataUrl);

    if (videoRef.current) {
      videoRef.current.currentTime = thumb.time;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-[498px] max-w-[90%] overflow-hidden p-6">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Edit Thumbnail
        </h2>
        <video
          ref={videoRef}
          src={videoUrl}
          crossOrigin="anonymous"
          style={{ display: "none" }}
        />

        <div className="flex items-center justify-center mb-6">
          {preview ? (
            <img
              src={preview}
              alt="Video preview"
              className="w-[214px] h-[307px] rounded-lg object-cover"
            />
          ) : (
            <div className="w-[214px] h-[307px] flex items-center justify-center bg-gray-200 rounded-lg">
              Loading preview...
            </div>
          )}
        </div>

        <div className="flex space-x-2 overflow-x-auto my-6">
          {thumbnails.map((thumb, index) => (
            <img
              key={index}
              src={thumb.dataUrl}
              alt={`Thumbnail ${index + 1}`}
              className="w-16 h-16 object-cover cursor-pointer rounded opacity-60 hover:opacity-100"
              onClick={() => handleThumbnailClick(thumb)}
            />
          ))}
        </div>

        <div className="flex flex-col">
          <input
            type="file"
            ref={fileInputRef}
            accept=".png, .jpg"
            className="hidden"
            onChange={(e) => {
              const dataurl = URL.createObjectURL(e.target.files[0]);
              // setValue(name, dataurl);
              setPreview(dataurl);
            }}
          />
          <button
            className="flex-1 bg-secondaryBlue text-white rounded-lg text-sm font-semibold py-[6px] px-[16px] leading-6 mb-[10px]"
            onClick={() => fileInputRef.current?.click()}
          >
            Upload Custom Thumbnail
          </button>
          <button
            className="flex-1 text-secondaryBlue rounded-lg text-sm font-semibold py-[6px] px-[16px] leading-6 border border-secondaryBlue"
            onClick={() => {
              setValue(name, preview);
              onClose(preview);
            }}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
