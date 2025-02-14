import React from "react";

export function NewsLetter() {
  return (
    <div className="mt-20 flex justify-center items-center">
      <div className="text-center w-full max-w-lg">
        <p className="text-base font-semibold text-secondaryPurple3 mb-2">
          Our blog
        </p>
        <p className="text-5xl font-semibold text-secondaryBlack3 mb-2">
          Stories and interviews
        </p>
        <p className="text-xl font-normal text-secondaryGray3 mb-2">
          Subscribe to learn about new product features, the latest in
          technology,
          <br /> solutions, and updates.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto justify-center">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#D0D5DD] text-[#6670858C]"
          />
          <button className="px-6 py-3 bg-secondaryPurple3 text-white rounded-lg">
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

export default NewsLetter;
