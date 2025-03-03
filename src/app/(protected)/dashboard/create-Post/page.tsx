"use client";

import { FormInputSelect, FormSelect } from "@/components";
import { LocationSelect } from "@/components/Common/LocationSelect";
import { MediaInput } from "@/components/Common/MediaInput";
import { MultiSelect } from "@/components/Common/MultipleSelect";
import ScheduleComponent from "@/components/Common/Schedule";
import { ScheduleButton } from "@/components/Common/ScheduleButton";
import { Tooltip } from "@/components/Common/Tooltip/Tooltip";
import { VideoPreviewWithAspectRatio } from "@/components/Common/VideoPreviewWithAspectRatio";
import { FormInput } from "@/components/form/FormInput";
import { InputWithAISuggestion } from "@/components/form/FormInputAISuggestion/FormInputAISuggestion";
import { FormInputMultiSelect } from "@/components/form/FormInputMultiSelect";
import { FormTabsSelect } from "@/components/form/FormTabs/FormTabs";
import { PostPreview } from "@/components/PostPreview/PostPreview";
import {
  FacebookIcon,
  InstagramIcon,
  TikTockIcon,
  YoutubeIcon,
} from "@/icons/authIcons";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Facebook, TicketIcon, Youtube } from "lucide-react";
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

  const tags = [
    { value: "@johndoe", label: "@johndoe" },
    { value: "@abc", label: "@abc" },
    { value: "@nuxt.js", label: "@abc1" },
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
  const postVisibility = [
    { label: "Public", value: "public" },
    { label: "Private", value: "private" },
  ];
  const tabOption = [
    {
      value: "facebook",
      label: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      value: "tiktok",
      label: "TikTok",
      icon: <TicketIcon className="h-4 w-4" />,
    },
    {
      value: "youtube",
      label: "YouTube",
      icon: <Youtube className="h-4 w-4" />,
    },
  ];
  const collab = [
    { value: "@johndoe", label: "@johndoe" },
    { value: "@abc", label: "@abc" },
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
            className="py-[27px] px-[35px]"
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
                  name="title"
                  rules={{ required: "Please enter text" }}
                />
              </div>
            </div>
            <div className="flex gap-x-5 ">
              <LocationSelect />
              <div className="">
                <FormInputSelect
                  label="collaborators"
                  loading={false}
                  options={collab}
                  name={"collaborators"}
                  rules={{
                    required: "Please add a collab",
                  }}
                  onInputChange={() => {}}
                />
              </div>
            </div>
            <MediaInput name="media" />

            <InputWithAISuggestion name="description" label="Caption" />
            <InputWithAISuggestion name="hashtags" label="Hashtags" />
            <div className="mt-[10px] flex gap-2 justify-center">
              <div className="flex-1">
                <FormInputMultiSelect name="tags" options={tags} label="Tag" />
              </div>
              <div className="flex-1">
                <FormSelect
                  label="Post Visibility"
                  name="postVisibility"
                  options={postVisibility}
                  rules={{ required: "Please select Post Visibility type" }}
                  className=""
                />
              </div>
            </div>

            <ScheduleComponent
              scheduleText="Schedule as Public"
              privateMessage="Video will be private before publishing"
            />
            <div className="flex justify-between max-w-[47.5rem] mt-[14px]">
              <button className="px-[16px] py-[8px] ml-[20px] rounded-[6px] border-[1px] border-[#0317C6] text-[#0317C6] text-sm font-semibold">
                Cancel
              </button>
              <ScheduleButton />
            </div>
          </form>
        </div>
        <div className="">
          <p className=" py-[24px] px-[35px] text-base font-semibold border border-gray-200">
            Preview
          </p>
          {/* <Tooltip
            options={[
              { label: "List", value: "list"},
              { label: "Grid", value: "grid"}
            ]}
            onChange={() => {}}
          /> */}
          <PostPreview methods={methods} />
        </div>
      </div>
    </FormProvider>
  );
}
