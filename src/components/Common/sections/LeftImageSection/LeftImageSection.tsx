import React from "react";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface LeftImageSectionProps {
  heading: string;
  subheading: string;
  imageSrc: string;
  ctaText: string;
  ctaUrl: string;
  pointers: string[];
}

export function LeftImageSection({
  heading,
  subheading,
  imageSrc,
  ctaText,
  ctaUrl,
  pointers,
}: LeftImageSectionProps) {
  return (
    <div className="bg-primaryPurple p-8 rounded-lg flex items-center justify-between max-w-6xl mx-auto">
      {/* Left side - Dashboard Preview */}
      <div className="w-1/2 relative">
        <Image
          src={imageSrc}
          alt="Dashboard Preview"
          width={200}
          height={200}
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Right side - Content */}
      <div className="w-1/2 pl-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-white text-4xl font-bold mb-2 flex items-center gap-2">
              {heading}
            </h1>
            <div className=" text-white mt-8">{subheading}</div>
          </div>

          {/* Feature List */}
          <div className="space-y-8">
            {pointers.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <CheckCheck className="w-5 h-5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href={ctaUrl}
            className=" max-w-fit rounded border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center gap-2 px-9 py-[18px] border-solid border-[#F7BE00]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
