"use client";

import { useFormContext } from "react-hook-form";
import { useCallback, useState, useEffect } from "react";
import { convertMediaToUrl } from "@/utils";

const useMediaInput = (name: string) => {
  const { setValue, watch } = useFormContext();
  const selectedMedia: File | null = watch(name);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  useEffect(() => {
    if (selectedMedia) {
      convertMediaToUrl(selectedMedia, setMediaPreview);
    } else {
      setMediaPreview(null);
    }
  }, [selectedMedia]);

  const handleMediaSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        setValue(name, file, { shouldValidate: true });
      }
    },
    [name, setValue]
  );

  const removeMedia = useCallback(() => {
    setValue(name, null, { shouldValidate: true });
  }, [name, setValue]);

  return {
    selectedMedia,
    handleMediaSelect,
    removeMedia,
    mediaPreview,
  };
};

export default useMediaInput;
