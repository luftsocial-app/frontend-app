import Image from "next/image";
import Link from "next/link";
import React from "react";

interface RightImageSectionProps {
  title: string;
  description: string;
  badge?: string;
  cta?: string;
  ctaLink?: string;
  imageSrc: string;
}

export function RightImageSection({
  title,
  description,
  badge,
  cta,
  ctaLink = "",
  imageSrc,
}: RightImageSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-primaryPurple font-semibold mb-4">{badge}</h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          <Link
            href={ctaLink}
            className="bg-primaryPurple w-fit rounded border shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] border-solid border-[#F7BE00] flex justify-center items-center gap-2 px-9 py-[18px]"
          >
            {cta}
          </Link>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Friends taking selfie and having fun"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
