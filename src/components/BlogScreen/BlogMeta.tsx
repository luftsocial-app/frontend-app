import Image from "next/image";
import React from "react";
import { Dot } from "lucide-react";

interface BlogData {
  title?: string;
  breadcrumb?: string;
  date?: string;
  image?: string;
  tags?: string;
}

export function BlogMeta({ title, breadcrumb, date, image, tags }: BlogData) {
  return (
    <div className="flex flex-col justify-center items-center text-center px-4">
      <div className="flex flex-row justify-center items-center">
        <p className="text-base font-medium text-gray-900">Home /</p>
        <p className="ml-2 text-base font-medium text-gray-900">Blog /</p>
        <p className="text-base font-medium text-gray-600 ml-2">{breadcrumb}</p>
      </div>
      <p className="text-5xl font-extrabold text-gray-900 mt-4">{title}</p>
      <div className="flex flex-row justify-center items-center">
        <p className="text-base font-medium text-gray-900">{tags}</p>
        <Dot size={24} className="text-gray-600" />
        <p className="text-base font-medium text-gray-600 my-4">{date}</p>
      </div>

      {image && (
        <div className="mt-4 flex justify-center">
          <div className="max-w-[84.25rem] max-h-[67.375rem] flex-shrink-0">
            <Image
              src={image}
              alt={title || "Blog Image"}
              width={1348}
              height={1078}
              className="w-full h-auto"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
