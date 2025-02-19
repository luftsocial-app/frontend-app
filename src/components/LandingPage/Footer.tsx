import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <div>
              <span className="text-primaryBlue text-4xl font-bold">LS</span>
              <span className="block text-primaryPurple text-xs font-normal leading-[15px]">
                LuftSocial
              </span>
            </div>

            <p className="text-secondaryLightGray text-sm md:text-base leading-relaxed max-w-xs">
              Our all-in-one social media management platform unlocks the full
              potential of social to transform not just your marketing
              strategy—but every area of your organization.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              {["Twitter", "Facebook", "Instagram", "Github"].map(
                (platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="transition hover:opacity-75"
                  >
                    <Image
                      src={`/images/HomeScreenImages/${platform}.png`}
                      alt={`${platform} Logo`}
                      width={28}
                      height={28}
                    />
                  </a>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">LuftSocial</h3>
            <ul className="space-y-2">
              {["Home", "Pricing", "About", "Blogs"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-secondaryLightGray hover:text-primaryPurple transition-colors text-sm md:text-base"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">Support</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Help Center"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-secondaryLightGray hover:text-primaryPurple transition-colors text-sm md:text-base"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">Contact Us</h3>
            <p className="text-secondaryLightGray text-sm md:text-base">
              Hello@luftsocial.com
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-secondaryLightGray/20 text-center">
          <p className="text-secondaryLightGray text-sm md:text-base">
            © Copyright 2025, LuftSocial - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
