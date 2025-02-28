export function convertMediaToUrl(
  media: File | null,
  onSuccess: (res: string) => void
) {
  if (media) {
    const reader = new FileReader();
    reader.onloadend = () => {
      onSuccess(reader.result as string);
    };
    reader.readAsDataURL(media);
  }
}

export function getMediaTypeAndUrl(
  value: File | string | null,
  setAssetUrl: (url: string | null) => void,
  setAssetType: (type: "image" | "video" | null) => void
) {
  if (!value) {
    setAssetUrl(null);
    setAssetType(null);
    return;
  }

  if (value instanceof File) {
    const fileType = value.type.split("/")[0]; // "image" or "video"
    setAssetType(fileType as "image" | "video");
    convertMediaToUrl(value, setAssetUrl);
  } else if (typeof value === "string") {
    const isImage = value.match(/\.(jpeg|jpg|png|gif|webp)$/i);
    const isVideo = value.match(/\.(mp4|webm|ogg)$/i);

    if (isImage) {
      setAssetType("image");
    } else if (isVideo) {
      setAssetType("video");
    } else {
      setAssetType(null);
    }

    setAssetUrl(value);
  }
}
