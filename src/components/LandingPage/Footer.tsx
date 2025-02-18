import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-primaryBlue text-2xl font-bold">LS</span>
              <span className="text-primaryPurple text-xs font-normal leading-[15px]">
                LuftSocial
              </span>
            </div>

            <p className="text-secondaryLightGray text-base font-normal leading-[27px]">
              Our all-in-one social media management platform unlocks the full
              potential of social to transform not just your marketing
              strategy—but every area of your organization.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {["Twitter", "Facebook", "Instagram", "Github"].map((platform) => (
                <a key={platform} href="#" className="">
                  <Image
                    src={`/images/HomeScreenImages/${platform}.png`}
                    alt={`${platform} Logo`}
                    width={34}
                    height={34}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* LuftSocial Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">LuftSocial</h3>
            <ul className="space-y-2">
              {["Home", "Pricing", "About", "Blogs"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-secondaryLightGray hover:text-primaryPurple transition-colors text-base font-normal"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">Support</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Help Center"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-secondaryLightGray hover:text-primaryPurple transition-colors text-base font-normal"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primaryBlue">Contact Us</h3>
            <p className="text-secondaryLightGray text-base font-normal">
              Hello@luftsocial.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-secondaryLightGray/20">
          <p className="text-center text-secondaryLightGray">
            © Copyright 2025, LuftSocial - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
