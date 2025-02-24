import Image from "next/image";
import React from "react";

export function Footer() {
  return (
    <footer className="w-full mt-[4.625rem] bg-white">
      <div className="container mx-auto block lg:flex gap-12 ">
        <div className="space-y-4 flex flex-col overflow-hidden max-w-[21.75rem]">
          <div className="flex items-center mb-[1.625rem]">
            <Image
              src="/images/HomeScreenImages/frame.png"
              width={256}
              height={51}
              alt="luft logo"
            />
          </div>

          <p className="text-secondaryLightGray text-sm md:text-base leading-relaxed max-w-xs">
            Our all-in-one social media management platform unlocks the full
            potential of social to transform not just your marketing
            strategy—but every area of your organization.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { name: "X", src: "/images/HomeScreenImages/x.png" },
              {
                name: "Facebook",
                src: "/images/HomeScreenImages/facebook2.png",
              },
              {
                name: "Instagram",
                src: "/images/HomeScreenImages/instagram2.png",
              },
              { name: "Music", src: "/images/HomeScreenImages/tiktok.png" },
              {
                name: "Linkedin",
                src: "/images/HomeScreenImages/linkedin.png",
              },
              { name: "Github", src: "/images/HomeScreenImages/github2.png" },
            ].map(({ name, src }) => (
              <a
                key={name}
                href="#"
                className="transition hover:opacity-75 "
                aria-label={name}
              >
                <Image
                  src={src}
                  alt={`${name} icon`}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className=" flex-1 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="space-y-4 mt-[4.063rem]">
            <h3 className="text-lg font-bold text-primaryBlue">LuftSocial</h3>
            <ul className="space-y-2">
              {["Home", "Pricing", "About", "Blogs", "Integration"].map(
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
          <div className="space-y-4  mt-[4.063rem]">
            <h3 className="text-lg font-bold text-primaryBlue">Tools</h3>
            <ul className="space-y-2">
              {[
                "Create / Publish",
                "Schedule",
                "Live stream",
                "Engage",
                "Analyze",
                "Collaborate",
              ].map((link) => (
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

          <div className="space-y-4 mt-[4.063rem]">
            <h3 className="text-lg font-bold text-primaryBlue">Support</h3>
            <ul className="space-y-2">
              {[
                "Privacy Policy",
                "Terms & Conditions",
                "Help Center",
                "Request a Feature",
                "Social Media Terms",
                "Live Chat",
              ].map((link) => (
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

          <div className="space-y-4 mt-[4.063rem]">
            <h3 className="text-lg font-bold text-primaryBlue">Contact Us</h3>
            <ul className="space-y-2">
              {[
                "info@luftsocial.com",
                "Careers",
                "Help Center",
                "Press",
                "Legal",
                "Community",
              ].map((link) => (
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
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-secondaryLightGray/20 text-center">
        <p className="text-secondaryLightGray text-sm md:text-base">
          © Copyright 2025, LuftSocial - All rights reserved.
        </p>
      </div>
    </footer>
  );
}
