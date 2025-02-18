import React from 'react';
import { GB_COLORS } from "@/fixtures";

interface TagsProps {
  tags: string[];
}


function getRandomColor() {
  const colorKeys = Object.keys(GB_COLORS) as (keyof typeof GB_COLORS)[];
  const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
  return GB_COLORS[randomKey];
}


export function Tags({ tags }: TagsProps) {
  return (
    <div className="">
      {tags.map((tags, index) => {
        const { backgroundColor, textColor } = getRandomColor();
        return (
          <span
            key={index}
            className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            style={{
              backgroundColor: backgroundColor,
              color: textColor,
              border: `1px solid ${textColor}`,
            }}
          >
            {tags?.tags}
          </span>
        );
      })}
    </div>
  );
}
