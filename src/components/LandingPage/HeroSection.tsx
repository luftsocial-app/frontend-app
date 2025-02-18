import React from 'react';
import {Button} from './Button';

export function HeroSection () {

  return (
    <div className='flex justify-center items-center w-full' >
    <div className="relative min-h-[19.875rem]  w-full max-w-[81rem] bg-gradient-to-br from-primaryPurple to-primaryBlue overflow-hidden rounded-[20px]">
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/4 translate-y-1/4" />

      {/* Main content container */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-white mb-12 leading-tight">
            Drive smarter, faster business
            <br />
            impact from social media.
          </h1>

          {/* Sign up form */}
          <form  className="flex flex-col md:flex-row gap-4 max-w-3xl mx-auto">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-6 py-4  text-base  bg-primaryPurple  text-white placeholder-primaryWhite rounded-[9px]"
                required
              />
            </div>
            <div className="flex-1">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-4 bg-primaryPurple text-white placeholder-primaryWhite rounded-[9px]"
                required
              />
            </div>
            <Button href="/start-your-trial" className="bg-primaryWhite text-primaryBlue px-12 rounded-[9px] "> Start Your Trial</Button>
            </form>

        </div>
      </div>
    </div>
    </div>
  );
};