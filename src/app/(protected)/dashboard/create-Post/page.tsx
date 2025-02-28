"use client";

import { FormInputSelect, FormSelect } from "@/components";
import { LocationSelect } from "@/components/Common/LocationSelect";
import { MediaInput } from "@/components/Common/MediaInput";
import { MultiSelect } from "@/components/Common/MultipleSelect";
import ScheduleComponent from "@/components/Common/Schedule";
import { ScheduleButton } from "@/components/Common/ScheduleButton";
import { VideoPreviewWithAspectRatio } from "@/components/Common/VideoPreviewWithAspectRatio";
import { FormInput } from "@/components/form/FormInput";
import { InputWithAISuggestion } from "@/components/form/FormInputAISuggestion/FormInputAISuggestion";
import { FormInputMultiSelect } from "@/components/form/FormInputMultiSelect";
import { FormMediaInput } from "@/components/form/MediaInput/MediaInput";
import {
  FacebookIcon,
  InstagramIcon,
  TikTockIcon,
  YoutubeIcon,
} from "@/icons/authIcons";
import { Facebook, Send, Youtube } from "lucide-react";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";

interface FormFields {
  postType: string;
  location: any;
  media: any;
}

export default function CreatePost() {
  const methods = useForm<FormFields>({
    defaultValues: {
      postType: "Reel",
      location: "asdfasdfasdf",
    },
  });

  const frameworksList = [
    {
      value: "facebook",
      label: "Facebook",
      icon: FacebookIcon,
    },
    {
      value: "youTube",
      label: "YouTube",
      icon: YoutubeIcon,
    },
    {
      value: "tikTok",
      label: "TikTok",
      icon: TikTockIcon,
    },
    {
      value: "instagram",
      label: "Instagram",
      icon: InstagramIcon,
    },
  ];

  const frameworks = [
    { value: "next.js", label: "@johndoe" },
    { value: "sveltekit", label: "@abc" },
    { value: "nuxt.js", label: "@abc1" },
    { value: "remix", label: "@abc2" },
    { value: "svwereltekit", label: "@abcwerwe" },
    { value: "nuwrwrxt.js", label: "@abc1werwer" },
    { value: "rewemix", label: "@abc2ewrew" },
  ];

  const postType = [
    { label: "Reel", value: "reel" },
    { label: "Story", value: "story" },
    { label: "Post", value: "post" },
    { label: "Short", value: "short" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <div className="flex">
        <div className="flex-1 h-full ">
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex-grow ml-[20px] "
          >
            <MultiSelect
              options={frameworksList}
              onValueChange={() => {}}
              placeholder="Select options"
              className="my-4"
            />
            <div className="flex items-center gap-x-5  w-full">
              <div className="w-full max-w-[23.563rem]">
                <FormSelect
                  label="Post Type"
                  name="postType"
                  options={postType}
                  rules={{ required: "Please select Post Type" }}
                />
              </div>
              <div className=" w-full max-w-[23.563rem]">
                <FormInput
                  label="Post Title"
                  placeholder="APT Dance"
                  name="input"
                  rules={{ required: "Please enter text" }}
                />
              </div>
            </div>
            <LocationSelect />
            <div className=" max-w-[100px]">
              <FormInputSelect
                label="collaborators"
                loading={false}
                options={[]}
                name={name ?? "collaborators"}
                rules={{
                  required: "Please add a location",
                }}
                onInputChange={() => {}}
              />
            </div>
            <MediaInput name="media" />
            <ScheduleComponent
              scheduleText="Schedule as Public"
              privateMessage="Video will be private before publishing"
            />
            <div className="mt-[10px]">
              <FormInputMultiSelect
                name="tags"
                options={frameworks}
                label="tag"
              />
            </div>
            <InputWithAISuggestion name="suggestions" label="Suggestion" />
            <div className="flex justify-between max-w-[47.5rem] mt-[14px]">
              <button className="p-2 bg-blue-500 text-white ml-[20px]">
                Cancel
              </button>
              <ScheduleButton />
            </div>
          </form>
        </div>
        <div className=" p-4 ">
          <VideoPreviewWithAspectRatio fieldName="media" />
          <div>
            Location:{" "}
            {methods.watch("location")?.label ?? methods.watch("location")}
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
