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
  onContinue?: () => void;
  onCancel?: () => void;
  icon?: string | StaticImageData;
  buttonText1: string;
  buttonText2: string;
}

export function DialogBox({
  title,
  subHeading,
  open,
  onCancel,
  onContinue,
  icon,
  buttonText1,
  buttonText2,
}: DialogBoxProps) {
  return (
    <Dialog open={open}>
      <DialogContent
        onInteractOutside={onCancel}
        className="sm:max-w-[425px] items-center justify-center"
       >
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
        <DialogFooter className="flex flex-row my-[24px] overflow-hidden">
          {buttonText1 && (
            <Button
              onClick={onContinue}
              className="w-full border flex-1 px-[16px] py-[6px] bg-secondaryBlue text-white text-sm font-semibold rounded-[6px] mb-[10px]"
            >
              {buttonText1}
            </Button>
          )}
          {buttonText2 && (
            <Button
              className="w-full border flex-1 px-[16px] py-[6px] }border-secondaryBlue text-secondaryBlue rounded-[6px]  text-sm font-semibold "
              onClick={onCancel}
            >
              {buttonText2}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
