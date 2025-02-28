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

  useEffect(() => {
    getMediaTypeAndUrl(value, setAssetUrl, setAssetType);
  }, [value]);

  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center">
      <div className="flex space-x-2 justify-center mb-4">
        {ratios.map((ratio) => (
          <button
            key={ratio.label}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedRatio === ratio.value
                ? "bg-gray-600 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedRatio(ratio.value)}
          >
            {ratio.label}
          </button>
        ))}
      </div>
      <div
        className={`relative w-80 ${selectedRatio} bg-gray-800 overflow-hidden rounded-lg rounded-b-none`}
      >
        {assetUrl && assetType === "video" ? (
          <video src={assetUrl} className="w-full h-full object-cover" controls>
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
