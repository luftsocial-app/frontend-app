"use client";
import { getMediaTypeAndUrl } from "@/utils";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type VideoPreviewWithAspectRatioProps = {
  fieldName: string;
};

const ratios = [
  { label: "16:9", value: "aspect-[16/9]" },
  { label: "1:1", value: "aspect-[1/1]" },
  { label: "4:5", value: "aspect-[4/5]" },
  { label: "2:2", value: "aspect-[2/2]" },
];

export function VideoPreviewWithAspectRatio({
  fieldName,
}: VideoPreviewWithAspectRatioProps) {
  const [selectedRatio, setSelectedRatio] = useState(ratios[0].value);
  const [assetUrl, setAssetUrl] = useState<string | null>(null);
  const [assetType, setAssetType] = useState<"image" | "video" | null>(null);

  const { watch } = useFormContext();
  const value = watch(fieldName);

  const posterUrl = watch("thumbnail");
  useEffect(() => {
    getMediaTypeAndUrl(value, setAssetUrl, setAssetType);
  }, [value]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex space-x-2 justify-center my-[30px] border p-[5px] rounded-[100px]">
        {ratios.map((ratio) => (
          <button
            key={ratio.label}
            className={`px-[1.078rem] py-[3px] rounded-full text-sm border ${
              selectedRatio === ratio.value
                ? "bg-[#A8A8A8] text-white"
                : "white border-0"
            }`}
            onClick={() => setSelectedRatio(ratio.value)}
          >
            {ratio.label}
          </button>
        ))}
      </div>
      <div
        className={`relative min-w-[19.625rem] ${selectedRatio} bg-gray-800 overflow-hidden rounded-lg rounded-b-none `}
      >
        {assetUrl && assetType === "video" ? (
          <video
            src={assetUrl}
            className="w-full h-full object-cover"
            controls
            poster={posterUrl ?? ""}
          >
            <source />
            Your browser does not support the video tag.
          </video>
        ) : assetUrl && assetType === "image" ? (
          <img
            src={assetUrl}
            alt="Uploaded preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            No media selected
          </div>
        )}
      </div>
    </div>
  );
}
