import * as React from "react";

export function XIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <g clipPath="url(#clip0_122_2799)">
        <mask
          id="mask0_122_2799"
          width="16"
          height="16"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "luminance" }}
        >
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </mask>
        <g mask="url(#mask0_122_2799)">
          <path
            fill="#000"
            d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.87-5.069-4.423 5.069H.314l5.733-6.572L0 .751h5.063l3.492 4.632zm-.863 13.029h1.36L4.32 2.145H2.862z"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_122_2799">
          <path fill="#fff" d="M0 0h16v16H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}
