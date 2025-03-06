import * as React from "react";

export function UpDownArrow(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        stroke="#09090B"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.667 10 8 13.334 11.333 10M4.667 6 8 2.667 11.333 6"
      ></path>
    </svg>
  );
}
