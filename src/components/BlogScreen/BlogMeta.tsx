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
      <div className="flex sm:flex-row  justify-center items-center gap-1 sm:gap-2 text-base font-medium text-gray-900">
        <p>Home /</p>
        <p>Blog /</p>
        <p className="text-gray-600">{breadcrumb}</p>
      </div>
      <p className="mt-4 font-extrabold text-gray-900 text-5xl md:text-4xl sm:text-3xl leading-tight">
        {title}
      </p>

      <div className="flex sm:flex-row  justify-center items-center text-base font-medium mt-4 text-gray-900 sm:space-x-2">
        <p>{tags}</p>
        <Dot size={24} className="text-gray-600 " />
        <p className="text-gray-600">{date}</p>
      </div>

      {image && (
        <div className="mt-6 flex justify-center w-full">
          <div className="max-w-7xl w-full flex-shrink-0">
            <Image
              src={image}
              alt={title || "Blog Image"}
              width={1348}
              height={1078}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
