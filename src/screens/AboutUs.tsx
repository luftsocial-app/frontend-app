"use client";

import { Articles } from "@/components/LandingPage/Articles";
import { FooterWithCTA } from "@/components/Common/FooterWithCTA";
import { StrengthNumber } from "@/components/LandingPage/StrengthNumber";
import Image from "next/image";
import {
  Header,
  LeftImageSection,
  ResponsiveContainer,
  RightImageSection,
  Testimonials,
} from "@/components";
import SocialMedia from "@/components/LandingPage/SocialMedia";
import { SelectionTab } from "@/components/pricing/SelectionTab";
import { useState } from "react";
import { leftImageData } from "@/fixtures/leftImageData";
import { ServicesOffered, TeamSize } from "@/components/Common/sections";

export function AboutUs() {
  const [active, setActive] = useState(1);
  const activeData = leftImageData.find((item) => item.id === active);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <ResponsiveContainer>
        <Header className="h-auto" />

        <div className="z-10 relative">
          <main>
            <div className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 lg:py-20 gap-8 md:gap-12">
              <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left p-4 sm:p-6 xl:pl-[7rem]">
                <span className="text-primaryBlue font-semibold text-lg">
                  EXTREMELY FAST
                </span>

                <p className="text-2xl sm:text-4xl md:text-6xl font-bold text-secondaryGray mt-4 md:mt-10 mb-4 md:mb-10">
                  Empowering Seamless Social Media Automation
                </p>

                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                  At LuftSocial, we are committed to revolutionizing the way
                  businesses and creators manage their social media. Our
                  automation tools simplify engagement, scheduling, and audience
                  interaction, allowing you to focus on growth while we handle
                  the rest.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto lg:mx-0">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="p-3 rounded-md border border-gray-300 text-gray-600 w-full"
                  />
                  <button className="min-w-[150px] px-6 py-3 bg-primaryBlue text-white border border-[#F7BE00] rounded-md">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 w-full flex justify-center">
                <Image
                  src="/images/HomeScreenImages/Mac.png"
                  alt="User avatar"
                  width={1221}
                  height={707}
                  className="w-full h-auto rounded-lg "
                  priority
                />
              </div>
            </div>
          </main>
        </div>

        <div className="my-16 sm:my-[8rem]">
          <RightImageSection
            badge="OUR MISSION"
            title="Simplifying Social, Amplifying Success"
            description="We believe that managing social media should be effortless. Our mission is to provide smart automation solutions that enhance user engagement, streamline workflows, and maximize digital presence. Whether you're a brand, influencer, or content creator, our platform helps you stay connected with your audience efficiently."
            imageSrc="/images/about-us/friends.png"
            cta="Get Started"
            ctaLink="/login"
          />
        </div>

        <ServicesOffered />

        {activeData && (
          <div className="bg-[#FCF8FB] p-4 rounded-lg">
            <div className="flex flex-wrap gap-4 items-center justify-center my-10">
              {leftImageData.map((tab) => (
                <SelectionTab
                  key={tab.id}
                  title={tab.heading}
                  icon={tab.icon}
                  className={`cursor-pointer p-3 rounded-md ${
                    active === tab.id
                      ? "bg-primaryBlue text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => setActive(tab.id)}
                  isActive={active === tab.id}
                />
              ))}
            </div>

            <LeftImageSection
              heading={activeData.heading}
              subheading={activeData.subheading}
              pointers={activeData.pointers}
              ctaText={activeData.ctaText}
              ctaUrl={activeData.ctaUrl}
              imageSrc={activeData.imageSrc}
            />
          </div>
        )}

        <div className="my-10 sm:my-[6.25rem]">
          <TeamSize />
        </div>

        <StrengthNumber />
        <Testimonials />
        <SocialMedia />
        <Articles />

        <FooterWithCTA />
      </ResponsiveContainer>
    </div>
  );
}
