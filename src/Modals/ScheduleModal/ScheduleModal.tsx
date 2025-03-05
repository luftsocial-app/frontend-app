import React, { useState } from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DialogBox } from "@/components/DialogBox";

export function ScheduleModal() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const postData = {
    image: "/images/create-post/ai-fill.png",
    sound: "Original Sound - APT - Rose & Bruno Mars",
    location: "New York, United States",
    collaborate: "@JohnDoe",
    tag: "@JohnDoe",
    title: "APT Dance",
    description:
      "Okay last time, We promise! 😆🥲🤪, Sped up version of the APT Dance! If you win, you live. If you lose, you die. If you don’t fight, you can’t win. If someone is willing to take my freedom,💗",
    hashtags:
      "#fyp #foryoupage #foryou #apt #aptdancechallenge #dance #dancechallenge",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden">
      <div className="w-full max-w-sm max-h-screen bg-white rounded-2xl overflow-auto shadow-lg">
        <div className="relative w-full max-h-[442px]">
          <img
            src={postData.image}
            alt="Dance Video"
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm shadow-md">
            {postData.sound}
          </div>
        </div>

        <CardContent className="px-[6px] py-[20px]">
          <p className="text-sm">
            <strong>Location:</strong> {postData.location}
          </p>
          <p className="text-sm my-[10px]">
            <strong>Collaborate:</strong> {postData.collaborate}
          </p>
          <p className="text-sm mb-[20px]">
            <strong>Tag:</strong> {postData.tag}
          </p>
          <div className="border border-l-0 border-r-0 border-b-0" />
          <p className="text-sm mt-[20px]">
            <strong>Title:</strong> {postData.title}
          </p>
          <p className="text-sm my-[10px]">
            <strong>Description:</strong> {postData.description}
          </p>
          <p className="text-sm mb-[20px]">
            <strong>Hashtags:</strong> {postData.hashtags}
          </p>

          <div className="flex flex-col">
            <Button className="w-full bg-[#1E31D7] text-white py-[6px] px-[16px] rounded-[6px]"
            // onClick={}
            >
              Edit Post
            </Button>
            <Button
              className="w-full text-[#1E31D7] py-[6px] px-[16px]"
              onClick={() => {
                setIsDialogOpen(true);
                console.log("Button clicked");
                console.log('Check===>', isDialogOpen)
              }}
            >
              Delete Post
            </Button>
          </div>
        </CardContent>
      </div>

      {isDialogOpen && (
        <DialogBox
          open={isDialogOpen}
          title="Confirm Post Deletion"
          subHeading="Are you sure you want to delete this post?"
          onClose={() => setIsDialogOpen(false)}
          buttonText1="Continue"
          buttonText2="Review Post"
        />
      )}
    </div>
  );
}
