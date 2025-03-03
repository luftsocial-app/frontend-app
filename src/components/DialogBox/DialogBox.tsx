import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image, { StaticImageData } from "next/image";

interface DialogBoxProps {
  title: string;
  subHeading?: string;
  open: boolean;
  onClose: () => void;
  icon?: string | StaticImageData;
  buttonText1: string;
  buttonText2: string;
}

export function DialogBox({
  title,
  subHeading,
  open,
  onClose,
  icon,
  buttonText1,
  buttonText2,
}: DialogBoxProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center">{title}</DialogTitle>
        </DialogHeader>
        {subHeading && (
          <p className="text-center text-xs font-semibold">{subHeading}</p>
        )}
        {icon && (
          <div className="flex justify-center">
            <Image src={icon} alt="dialogImg" height={203} width={203} />
          </div>
        )}
        <DialogFooter className="">
          <div className="my-[24px] gap-4 items-center justify-center">
            {buttonText1 && (
              <Button
                type="submit"
                onClick={onClose}
                className="w-full border flex-1 min-w-[19.25rem] px-[16px] py-[6px] bg-secondaryBlue text-white text-sm font-semibold rounded-[6px] mb-[10px]"
              >
                {buttonText1}
              </Button>
            )}
            {buttonText2 && (
              <Button className="w-full border flex-1 min-w-[19.25rem] px-[16px] py-[6px] }border-secondaryBlue text-secondaryBlue rounded-[6px]  text-sm font-semibold ">
                {buttonText2}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
