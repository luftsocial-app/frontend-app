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
    <section className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          {badge && (
            <h2 className="text-primaryPurple font-semibold mb-2">{badge}</h2>
          )}
          {title && (
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
          )}
          {description && (
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed ">
              {description}
            </p>
          )}

          {cta && (
            <Link
              href={ctaLink}
              className="px-8 py-3 bg-primaryBlue text-white rounded-[4px] border border-[#F7BE00] w-fit mx-auto md:mx-0 flex font-bold"
            >
              {cta}
            </Link>
          )}
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt="Friends taking selfie and having fun"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
