import Image from "next/image";
import React from "react";

export function Contact() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-[2.972rem]">
      <div className="relative w-full md:w-[60%] h-48 md:h-auto">
        <Image
          src="/images/ContactScreenImages/Contact.png"
          alt="Gradient background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="w-full md:w-[40%] px-6 md:px-20 py-[6rem] flex flex-col justify-center ">
        <h1 className="text-2xl md:text-[30px] leading-[30px] md:leading-[38px] font-semibold text-gray-900 text-center md:text-left">
          Let&apos;s level up your <br className="hidden md:block" />
          brand, together
        </h1>

        <div className="mt-4 mb-6 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-600">
            You can reach us anytime via{" "}
            <span className="text-secondaryPurple">hi@untitledui.com</span>
          </p>
        </div>

        <form className="flex flex-col gap-4 md:gap-5">
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
              className="w-full max-w-[32rem] px-[1rem] py-[0.75rem] border border-gray-300 rounded-lg text-sm md:text-base  text-gray-900 placeholder:text-base placeholder-gray-500 placeholder-opacity-75 focus:outline-none"
            />
          </div>
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
              className="w-full max-w-[32rem] px-[1rem] py-[0.75rem] border border-gray-300 rounded-lg text-sm md:text-base placeholder:text-base placeholder-gray-500 focus:outline-none text-gray-900"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Phone number
            </label>

            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden xl:max-w-[32rem]">
              <div className="relative flex items-center border-r-0 border-gray-300 bg-white">
                <select className="appearance-none px-4 py-3  pr-8 bg-transparent focus:outline-none text-gray-900">
                  <option className="text-base font-normal text-gray-900">
                    US
                  </option>
                  <option className="text-base font-normal text-gray-900">
                    IND
                  </option>
                </select>
                <Image
                  src="/images/ContactScreenImages/downArrow.png"
                  width={20}
                  height={20}
                  alt="downArrow"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                />
              </div>
              <input
                type="tel"
                id="phone"
                placeholder="+1 (555) 000-0000"
                className="w-full max-w-[28rem] px-4 py-3 text-sm md:text-base placeholder:text-base placeholder-gray-500 placeholder-opacity-75 focus:outline-none border-l-0 text-gray-900"
              />
            </div>
          </div>
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
              className="w-full max-w-[32rem]  px-[1rem] py-[0.75rem] border border-gray-300 rounded-lg text-sm md:text-base resize-none placeholder:text-base placeholder-gray-500 focus:outline-none text-gray-900"
            />
          </div>
          <button
            type="submit"
            className="w-full max-w-[32rem]  bg-secondaryPurple text-white  px-[1.25rem] py-[0.75rem] rounded-lg font-semibold text-sm md:text-base hover:bg-purple-700 transition-colors mt-6"
          >
            Get started
          </button>
        </form>
      </div>
    </div>
  );
}
