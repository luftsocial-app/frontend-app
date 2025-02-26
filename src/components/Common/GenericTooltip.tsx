import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "@/components/ui/tooltip";

interface GenericTooltipProps {
  children: React.ReactNode;
  tooltipText?: string;
}

export function GenericTooltip({ children, tooltipText }: GenericTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent className="bg-white text-black border shadow-sm rounded-lg p-2 text-[8px] py-[8px] px-[12px]">
          {/* <TooltipArrow className="" fill="white" color="red" style={{}} /> */}
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
