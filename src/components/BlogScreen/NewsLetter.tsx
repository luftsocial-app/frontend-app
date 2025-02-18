import React from "react";

export function NewsLetter() {
  return (
    <div className="mt-20 flex justify-center items-center px-4">
      <div className="text-center w-full max-w-3xl">
        <p className="text-base font-semibold text-secondaryPurple3 mb-2">
          Our blog
        </p>
        <p className="text-5xl font-semibold text-secondaryBlack3 mb-2">
          Stories and interviews
        </p>
        <p className="text-xl font-normal text-secondaryGray3 mb-2">
          Subscribe to learn about new product features, the latest in technology,
          <br className="hidden sm:block" /> solutions, and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center sm:items-stretch w-full max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-6 py-3 rounded-lg border border-[#D0D5DD] text-[#6670858C] w-full sm:w-auto"
          />
          <button className="px-6 py-3 bg-secondaryPurple3 text-white rounded-lg w-full sm:w-auto">
            Subscribe
          </button>
        </div>
        <p className="text-sm font-normal text-secondaryGray3 mt-2">
          We care about your data in our
          <a
            href="/privacy-policy"
            className="underline underline-offset-4 ml-1"
          >
            privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}
