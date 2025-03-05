import React from "react";

interface ViewTypeProps {
  activeView: "List" | "Grid";
  onViewChange: (view: "List" | "Grid") => void;
}

export function ViewType({ activeView, onViewChange }: ViewTypeProps) {
  return (
    <div className="flex border rounded-[4px] text-xs font-semibold  bg-white mr-[2.5rem] w-[146px]">
      <button
        className={`flex-1 px-[20px] border-r py-[5px] ${
          activeView === "List"
            ? " bg-secondaryBlue text-white rounded-l-[4px]"
            : "text-black"
        }`}
        onClick={() => onViewChange("List")}
      >
        List
      </button>
      <button
        className={`flex-1 px-[20px] py-[5px] text-xs font-semibold ${
          activeView === "Grid"
            ? "bg-secondaryBlue text-white rounded-r-[4px]"
            : "text-black"
        }`}
        onClick={() => onViewChange("Grid")}
      >
        Grid
      </button>
    </div>
  );
}