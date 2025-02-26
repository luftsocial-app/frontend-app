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
    <div className="bg-primaryPurple p-6 sm:p-8 rounded-lg flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto mb-16">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src={imageSrc}
          alt="Dashboard Preview"
          width={600}
          height={400}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 lg:pl-12">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl font-bold mb-2">
              {heading}
            </h1>
            <p className="text-white mt-4 sm:mt-8">{subheading}</p>
          </div>

          <div className="space-y-4">
            {pointers.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <CheckCheck className="w-5 h-5 flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <Link
            href={ctaUrl}
            className="inline-block rounded border border-[#F7BE00] px-6 py-3 sm:px-[2.25rem] sm:py-[1.125rem] text-white font-bold"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}
