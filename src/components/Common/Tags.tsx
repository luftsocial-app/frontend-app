import React from "react";
import { getRandomColor } from "@/utils";

interface TagsProps {
  tags: { tags: string }[];
}

export function Tags({ tags }: TagsProps) {
  return (
    <div className="">
      {tags.map((tags, id) => {
        const { backgroundColor, textColor } = getRandomColor();
        return (
          <span
            key={id}
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
