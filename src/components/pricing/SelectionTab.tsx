import Image from "next/image";
import { ReactNode } from "react";

interface SelectionTabProps {
  icon: ReactNode;
  title?: string;
  isActive: boolean;
  onClick: () => void;
}
export function SelectionTab({
  icon,
  title,
  isActive,
  onClick,
}: SelectionTabProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center py-[0.574rem] px-[0.983rem] rounded-[20px] transition-all ${
        isActive
          ? "bg-[#6610EA] text-white"
          : "bg-white text-gray-900 border-blue-800"
      }`}
    >
      {icon && (
        <span
          className={`mr-2 hover:fill-white ${
            isActive ? "fill-white" : "text-[#6610EA]"
          }`}
        >
          {icon}
        </span>
      )}
      {title && (
        <p
          className={`text-[15.467px] ${
            isActive ? "font-extrabold" : 'font - normal'
          }`}
        >
          {title}
        </p>
      )}
    </button>
  );
}

