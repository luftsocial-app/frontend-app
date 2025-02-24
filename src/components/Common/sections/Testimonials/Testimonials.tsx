"use client";
import React from "react";
import Image from "next/image";

export function Testimonials() {
  const testimonial = {
    quote:
      "LuftSocial has completely transformed the way I manage our clients' social media. The ability to schedule, publish, and engage across multiple platforms from one place has saved me hours each week. The interface is user-friendly, and the analytics are invaluable for measuring our success. It's become an essential tool in our daily operations.",
    author: "Hikmet Atceken",
    title: "Social Media Manager at Creatify",
    image: "/images/about-us/testimonials.png",
  };

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base sm:text-[18px] font-bold text-[#6610EA] mb-2 sm:mb-4 uppercase">
          TESTIMONIALS
        </h2>
        <p className="text-2xl sm:text-4xl font-bold text-[#18181B] mb-6 sm:mb-12">
          What Our Users Say
        </p>

        <div className="relative bg-white p-6 sm:p-8 rounded-lg max-w-4xl mx-auto ">
          <div className="text-gray-600 text-base sm:text-[24px] font-normal mb-4 sm:mb-[1.5rem] relative text-left">
            <Image
              src="/images/about-us/quoteIcon.png"
              height={20}
              width={20}
              alt="vector"
              className="inline-block mr-2"
            />
            {testimonial.quote}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
            <div className="flex items-center gap-4 border-l-4 border-[#D9DAFF] pl-4">
              <div className="rounded-full overflow-hidden w-14 sm:w-16 h-14 sm:h-16">
                <Image
                  src={testimonial.image}
                  alt={testimonial.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  {testimonial.author}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {testimonial.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <Image
                src="/images/about-us/leftArrow.png"
                alt="Previous"
                width={32}
                height={32}
                className="cursor-pointer"
              />
              <Image
                src="/images/about-us/arrowRight.png"
                alt="Next"
                width={32}
                height={32}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
