"use client";
import { FormInputSelect, FormSelect } from "@/components";
import { AudioSelect } from "@/components/AudioSelect";
import { LocationSelect } from "@/components/Common/LocationSelect";
import { MediaInput } from "@/components/Common/MediaInput";
import { MultiSelect } from "@/components/Common/MultipleSelect";
import { PostThumbnail } from "@/components/Common/PostThumbnail";
import ScheduleComponent from "@/components/Common/Schedule";
import { ScheduleButton } from "@/components/Common/ScheduleButton";
import { Tooltip } from "@/components/Common/Tooltip/Tooltip";
import { FormInput } from "@/components/form/FormInput";
import { InputWithAISuggestion } from "@/components/form/FormInputAISuggestion/FormInputAISuggestion";
import { FormInputMultiSelect } from "@/components/form/FormInputMultiSelect";
import { PostPreview } from "@/components/PostPreview/PostPreview";
import { Facebook } from "@/icons";
import { AudioIcon } from "@/icons/AudioIcon";
import {
  FacebookIcon,
  InstagramIcon,
  TikTockIcon,
  YoutubeIcon,
} from "@/icons/authIcons";
import { Ticktok } from "@/icons/Tiktok";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

interface FormFields {
  postType: any;
  location: any;
  collaborators: any;
  description: any;
  hashtags: any;
  postVisibility: any;
  media: any;
  title: any;
  tags: any;
  time_zone: any;
}

export default function CreatePost() {
  const methods = useForm<FormFields>({
    defaultValues: {
      location: "New York, United States",
      postType: "reel",
      collaborators: "@johndoe",
      description:
        "Okay last time. We promise! 🥹🥺😘, Sped up version of the APT. Dance!  If you win, you live. If you lose, you die. If you don't fight, you can't win. If someone is willing to take my freedom,💗",
      hashtags:
        "#fyp #foryoupage #foryou #apt #aptdancechallenge #dance #dancechallenge",
      postVisibility: "public",
      title: "APT Dance",
      tags: ["@johndoe"],
      time_zone: ["Time zone"],
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
  const audioOptions = [
    {
      label: "Orginal Sound - APT - Rose & Bruno Mars",
      value: "audio1",
      icon: <AudioIcon />,
    },
    {
      label: "Orginal Sound - APT - Rose & Bruno Mars",
      value: "audio2",
      icon: <AudioIcon />,
    },
  ];
  const collab = [
    { value: "@johndoe", label: "@johndoe" },
    { value: "@abc", label: "@abc" },
  ];

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <FormProvider {...methods}>
      <div className="flex">
        <div className="flex-1 h-full ">
          <p className=" py-[24px] px-[35px] text-base font-semibold border border-gray-200 border-r-0">
            Create Post
          </p>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="py-[27px] px-[35px] bg-[#F9F9F9]"
          >
            <MultiSelect
              options={frameworksList}
              onValueChange={() => {}}
              className="my-4"
            />
            <div className="flex items-center justify-between w-full mb-[12px]">
              <div className="w-full max-w-[23.594rem]">
                <FormSelect
                  label="Post Type"
                  name="postType"
                  options={postType}
                  rules={{ required: "Please select Post Type" }}
                  className="py-[12px] px-[14px] bg-white h-[48px] rounded-[13px]"
                />
              </div>
              <div className=" w-full max-w-[23.594rem]">
                <FormInput
                  label="Post Title"
                  placeholder=""
                  name="title"
                  rules={{ required: "Please enter text" }}
                />
              </div>
            </div>
            <div className="flex justify-between mb-[12px]">
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
            <div className="flex mb-[12px]">
              <div className=" w-full max-w-[23.594rem] mr-[2rem]">
                <MediaInput name="postMedia" label="Media" />
              </div>
              <PostThumbnail
                name="thumbnail"
                sourceRefFieldName="postMedia"
                label="Thumbnail"
              />
            </div>
            <div className="mb-[12px]">
              <AudioSelect
                options={audioOptions}
                onChange={() => {}}
                label={"Audio"}
              />
            </div>
            <div className="mb-[12px]">
              <InputWithAISuggestion
                name="description"
                label="Caption"
                className="min-h-[4.5rem]"
              />
            </div>
            <div className="mb-[12px]">
              <InputWithAISuggestion
                name="hashtags"
                label="Hashtags"
                className="min-h-[4rem]"
              />
            </div>
            <div className="flex gap-2 justify-center mb-[12px]">
              <div className="flex-1">
                <FormInputMultiSelect name="tags" options={tags} label="Tag" />
              </div>
              <div className="flex-1">
                <FormSelect
                  label="Post Visibility"
                  name="postVisibility"
                  options={postVisibility}
                  rules={{ required: "Please select Post Visibility type" }}
                  className="py-[12px] px-[14px] bg-white min-h-[3.5rem] rounded-[13px]"
                />
              </div>
            </div>
            <div className="">
              <ScheduleComponent
                label="Schedule"
                scheduleText="Schedule as Public"
                privateMessage="Video will be private before publishing"
              />
              <div className="flex w-full mt-[12px]">
                <button className="px-[16px] py-[8px] rounded-[6px] border-[1px] border-primaryBlue2 text-primaryBlue2 text-sm font-semibold">
                  Cancel
                </button>
                <ScheduleButton />
              </div>
            </div>
          </form>
        </div>
        <div className="max-w-[30rem]">
          <p className=" py-[24px] px-[35px] text-base font-semibold border border-gray-200">
            Preview
          </p>
          <Tooltip
            tooltipStyles="grid w-full grid-cols-3 border-none rounded-none"
            options={[
              {
                label: "Facebook",
                value: "facebook",
                icon: <Facebook height={16} width={16} />,
              },
              {
                label: "Tiktok",
                value: "tiktok",
                icon: <Ticktok height={16} width={16} />,
              },
              {
                label: "YouTube",
                value: "youTube",
                icon: <YoutubeIcon height={16} width={16} />,
              },
            ]}
            onChange={() => {}}
          />
          <PostPreview methods={methods} />
        </div>
      </div>
    </FormProvider>
  );
}
