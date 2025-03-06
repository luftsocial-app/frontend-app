import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogBox } from "@/components/DialogBox";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function ScheduleModal({
  data,
  onContinue,
  open,
  onClose,
}: {
  data: any;
  onContinue?: () => void;
  onClose?: () => void;
  open: boolean;
}) {
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={() => {
          onClose && onClose();
        }}
        className="fixed border-none flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-hidden"
      >
        <VisuallyHidden>
          <DialogHeader className="border-none ">
            <DialogTitle className="text-center">{"title"}</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        <div className="w-full max-w-sm max-h-screen bg-white rounded-2xl overflow-auto shadow-lg">
          <div className="relative w-full max-h-[442px]">
            <img
              src={data.modalimage}
              alt="Dance Video"
              className="object-cover w-full h-full"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm shadow-md">
              {data.sound}
            </div>
          </div>

          <div className="px-[6px] py-[20px]">
            <p className="text-sm">
              <strong>Location:</strong> {data.location}
            </p>
            <p className="text-sm my-[10px]">
              <strong>Collaborate:</strong> {data.collaborate}
            </p>
            <p className="text-sm mb-[20px]">
              <strong>Tag:</strong> {data.tag}
            </p>
            <div className="border border-l-0 border-r-0 border-b-0" />
            <p className="text-sm mt-[20px]">
              <strong>Title:</strong> {data.modaltitle}
            </p>
            <p className="text-sm my-[10px]">
              <strong>Description:</strong> {data.description}
            </p>
            <p className="text-sm mb-[20px]">
              <strong>Hashtags:</strong> {data.hashtags}
            </p>

            <div className="flex flex-col">
              <Button
                className="w-full bg-[#1E31D7] text-white py-[6px] px-[16px] rounded-[6px]"
                onClick={() => router.push(`/dashboard/post/${data.id}`)}
              >
                Edit Post
              </Button>
              <Button
                className="w-full text-[#1E31D7] py-[6px] px-[16px]"
                onClick={() => {
                  setIsDialogOpen(true);
                }}
              >
                Delete Post
              </Button>
            </div>
          </div>
        </div>

        {isDialogOpen && (
          <DialogBox
            open={isDialogOpen}
            title="Confirm Post Deletion"
            subHeading="Are you sure you want to delete this post?"
            onContinue={onContinue}
            onCancel={() => {
              setIsDialogOpen(false);
            }}
            buttonText1="Confirm"
            buttonText2="Cancel"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
