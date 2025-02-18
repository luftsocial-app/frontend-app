import Image from "next/image";
import React from "react";

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="relative w-full md:w-[60%] h-48 md:h-auto">
        <Image
          src="/images/ContactScreenImages/Contact.png"
          alt="Gradient background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full md:w-[40%] px-6 md:px-20 py-6 flex flex-col justify-center">
        <h1 className="text-2xl md:text-[30px] leading-[30px] md:leading-[38px] font-semibold text-gray-900 text-center md:text-left">
          Let's level up your <br className="hidden md:block" />
          brand, together
        </h1>

        <div className="mt-4 mb-6 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-600">
            You can reach us anytime via{" "}
            <span className="text-secondaryPurple">hi@untitledui.com</span>
          </p>
        </div>

        <form className="flex flex-col gap-4 md:gap-5">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:ring focus:ring-secondaryPurple/30"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@company.com"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base focus:ring focus:ring-secondaryPurple/30"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Phone number
            </label>
            <div className="flex">
              <select className="px-3 py-2 border border-gray-300 rounded-l-lg border-r-0 text-sm md:text-base min-w-[70px] bg-white">
                <option>US</option>
                <option>IND</option>
              </select>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full px-3 py-2 border border-gray-300 rounded-r-lg text-sm md:text-base focus:ring focus:ring-secondaryPurple/30"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us a little about the project..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm md:text-base resize-none focus:ring focus:ring-secondaryPurple/30"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-secondaryPurple text-white py-2 px-4 rounded-lg font-semibold text-sm md:text-base hover:bg-purple-700 transition-colors mt-6"
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
}
