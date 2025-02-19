import React from "react";

export function NewsLetter() {
  return (
    <div className="mt-20 flex justify-center items-center px-4">
      <div className="text-center w-full max-w-3xl">
        <p className="text-base font-semibold text-secondaryPurple3 mb-3">
          Our blog
        </p>
        <p className="text-3xl sm:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6">
          Stories and interviews
        </p>
        <p className="text-lg sm:text-xl font-normal text-secondaryGray3 mb-6 sm:mb-10">
          Subscribe to learn about new product features, the latest in
          technology,
          <br className="hidden sm:block" /> solutions, and updates.
        </p>
        <div className="flex flex-col justify-center items-center px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-6 py-3 flex-1 rounded-lg border border-[#D0D5DD] text-[#6670858C] w-full sm:max-w-[22.5rem] focus:outline-none focus:ring-2 focus:ring-secondaryPurple3"
            />
            <button className="px-6 py-3 bg-secondaryPurple3 text-white rounded-lg w-full sm:w-auto hover:bg-purple-700 transition">
              Subscribe
            </button>
          </div>

          <div className="w-full max-w-lg text-center mt-3 sm:mt-4">
            <p className="text-sm font-normal text-secondaryGray3 text-left sm:text-center">
              We care about your data in our
              <a
                href="/privacy-policy"
                className="underline underline-offset-4 ml-1 text-secondaryPurple3 hover:text-secondaryPurple2"
              >
                privacy policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
