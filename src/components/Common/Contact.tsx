import Image from "next/image";
import React from "react";

export function Contact() {
  return (
    <div className="flex h-screen">
      <div className="flex-1 relative w-[60%]">
        <Image
          src="/images/ContactScreenImages/Contact.png"
          alt="Gradient background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Side - Content */}
      <div className="w-[40%] px-20 py-6">
      <div className="">
          <h1 className="text-[30px] leading-[38px] font-semibold text-gray-900">
            Let's level up your
            <br />
            brand, together
          </h1>
          
          <div className="mt-4 mb-8">
            <p className="text-base text-gray-600">
              You can reach us anytime via{" "}
              <span className="text-secondaryPurple">
                hi@untitledui.com
              </span>
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            {/* Name Field */}
            <div className="">
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
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-base"
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
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-base"
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
                <select
                  className="px-3 py-2.5 bg-white border border-gray-300 rounded-l-lg border-r-0 text-base min-w-[80px]"
                >
                  <option>US</option>
                  <option>IND</option>
                </select>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-r-lg text-base"
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
                className="w-full px-3.5 py-2.5 bg-white border border-gray-300 rounded-lg text-base resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-secondaryPurple text-white py-2.5 px-4 rounded-lg font-semibold text-base hover:bg-purple-700"
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}