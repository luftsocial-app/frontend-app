// generateThumbnails.ts
import React from "react";

export interface Thumbnail {
  dataUrl: string;
  time: number;
}

export async function generateThumbnails(
  videoRef: React.RefObject<HTMLVideoElement | null>,
  setThumbnails: React.Dispatch<React.SetStateAction<Thumbnail[]>>,
  setPreview: React.Dispatch<React.SetStateAction<string>>
) {
  if (!videoRef.current) return;
  const video = videoRef.current;

  await new Promise<void>((resolve) => {
    const handleMetadata = () => {
      resolve();
      video.removeEventListener("loadedmetadata", handleMetadata);
    };
    video.addEventListener("loadedmetadata", handleMetadata);
    if (video.readyState >= 1) {
      resolve();
      video.removeEventListener("loadedmetadata", handleMetadata);
    }
  });

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const frames = 10;
  const generated: Thumbnail[] = [];

  // Generate thumbnails sequentially
  for (let i = 0; i < frames; i++) {
    const time = (video.duration / frames) * i;
    await new Promise<void>((resolve) => {
      video.onseeked = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        generated.push({ dataUrl: canvas.toDataURL(), time });
        resolve();
      };
      video.currentTime = time;
    });
  }
  setThumbnails(generated);
  // Use the first thumbnail as the main preview
  if (generated.length > 0) {
    setPreview(generated[0].dataUrl);
  }
}
