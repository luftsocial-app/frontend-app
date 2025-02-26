import React from "react";
import { Button } from "./Button";

export function HeroSection() {
  return (
    <div className=" flex justify-center items-center w-full">
      <div className="relative w-full  min-h-[20rem] bg-gradient-to-br from-primaryPurple to-primaryBlue overflow-hidden rounded-[20px] xl:max-w-[100%] lg:max-w-[80rem] md:max-w-[80rem]">
        <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" />
        <div className="container mx-auto px-6 py-12 md:py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 leading-snug">
              Drive smarter, faster business
              <br />
              impact from social media.
            </h1>
            <form className="flex flex-wrap gap-4 justify-center">
              <div className="w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full max-w-sm md:max-w-lg px-6 py-4 text-base bg-primaryPurple text-white placeholder-primaryWhite rounded-[9px]"
                  required
                />
              </div>
              <div className="w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full max-w-sm md:max-w-lg px-6 py-4 bg-primaryPurple text-white placeholder-primaryWhite rounded-[9px]"
                  required
                />
              </div>
              <div className="w-full sm:w-auto flex justify-center">
                <Button
                  href="/start-your-trial"
                  className="bg-primaryWhite text-primaryBlue border rounded-[9px]"
                >
                  Start Your Trial
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
