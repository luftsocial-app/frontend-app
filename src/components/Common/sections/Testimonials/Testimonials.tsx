"use client";
import React, { useState } from "react";
import Image from "next/image";
import { testimonials } from "@/fixtures/testimonials";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base sm:text-[18px] font-bold text-[#6610EA] mb-2 sm:mb-4 uppercase">
          TESTIMONIALS
        </h2>
        <p className="text-2xl sm:text-4xl font-bold text-[#18181B] mb-6 sm:mb-12">
          What Our Users Say
        </p>

        <div className="relative bg-white p-6 sm:p-8 rounded-lg max-w-4xl mx-auto text-left">
          <Image
            src="/images/about-us/quoteIcon.png"
            height={20}
            width={20}
            alt="quote icon"
            className="inline-block mb-4"
          />
          <div className="text-gray-600 text-base sm:text-[24px] font-normal sm:mb-[2rem] relative text-left">
            {currentTestimonial.quote}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
            <div className="flex items-center gap-4 border-l-4 border-[#D9DAFF] pl-4">
              <div className="rounded-full overflow-hidden w-14 sm:w-16 h-14 sm:h-16">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.author}
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 text-left">
                  {currentTestimonial.author}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {currentTestimonial.title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`cursor-pointer ${
                  currentIndex === 0
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-80"
                }`}
              >
                <Image
                  src={
                    currentIndex === 0
                      ? "/images/about-us/leftArrow.png"
                      : "/images/about-us/leftArrowEnabled.png"
                  }
                  alt="Previous"
                  width={32}
                  height={32}
                />
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex === testimonials.length - 1}
                className={`cursor-pointer ${
                  currentIndex === testimonials.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:opacity-80"
                }`}
              >
                <Image
                  src={
                    currentIndex === testimonials.length - 1
                      ? "/images/about-us/arrowRightDisabled.png"
                      : "/images/about-us/arrowRight.png"
                  }
                  alt="Next Disabled"
                  width={32}
                  height={32}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
