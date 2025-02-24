import { Articles } from "@/components/LandingPage/Articles";
import { DataColumn } from "@/components/LandingPage/DataColumn";
import { FooterWithCTA } from "@/components/Common/FooterWithCTA";
import { QuestionAnswer } from "@/components/LandingPage/QuestionAnswer";
import { StrengthNumber } from "@/components/LandingPage/StrengthNumber";
import { Subscription } from "@/components/Common/Subscription";
import Image from "next/image";
import Link from "next/link";
import {
  Header,
  LeftImageSection,
  ResponsiveContainer,
  RightImageSection,
  Testimonials,
} from "@/components";

export function AboutUs() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Header className="h-[53rem] md:h-auto" />
      <ResponsiveContainer>
        <div className="z-10 relative">
          <main>
            <div className="flex flex-col lg:flex-row items-center justify-between py-8 md:py-12 lg:py-20 gap-8 md:gap-12">
              <div className="lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left flex-grow sm: p-6 xl:pl-[7rem] ">
                <span className="text-primaryBlue font-semibold text-lg">
                  EXTREMELY FAST
                </span>

                <p className="text-3xl md:text-6xl font-bold text-secondaryGray mt-6 md:mt-10 mb-6 md:mb-20">
                  Empowering Seamless Social Media Automation
                </p>

                <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                  At LuftSocial, we are committed to revolutionizing the way
                  businesses and creators manage their social media. Our
                  automation tools simplify engagement, scheduling, and audience
                  interaction, allowing you to focus on growth while we handle
                  the rest.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-3">
                  <div className="overflow-hidden">
                    <Image
                      src="/images/HomeScreenImages/Image1.png"
                      alt="User avatar"
                      width={120}
                      height={53}
                    />
                  </div>
                  <p className="text-lg text-gray-600">
                    Join
                    <span className="font-bold text-gray-900 mx-1">
                      4600+ Creators
                    </span>
                    and start going viral right now
                  </p>
                </div>

                <div className="gap-4 flex flex-col items-center lg:items-start">
                  <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="p-3 rounded-md border border-gray-300 text-gray-600 w-full"
                    />
                    <button className="w-[auto] min-w-[150px] px-6 py-3 bg-primaryBlue text-white border border-[#F7BE00] sm:w-auto rounded-md">
                      Get Started
                    </button>
                  </div>
                  <Link
                    href="#learn-more"
                    className="text-base text-gray-800 underline font-normal"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/2 hidden lg:block">
                <Image
                  src="/images/HomeScreenImages/Mac.png"
                  alt="User avatar"
                  width={1221}
                  height={707}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </main>
        </div>
        <RightImageSection
          badge="OUR MISSION"
          title="Simplifying Social, Amplifying Success"
          description="We believe that managing social media should be effortless. Our mission is to provide smart automation solutions that enhance user engagement, streamline workflows, and maximize digital presence. Whether you're a brand, influencer, or content creator, our platform helps you stay connected with your audience efficiently."
          imageSrc="/images/about-us/friends.png"
          cta="Get Started"
          ctaLink="/login"
        />
        <LeftImageSection
          heading="Effortless Publishing"
          subheading="Plan, schedule, and publish content across all your social media platforms from one dashboard."
          pointers={[
            "Automate your posting schedule for consistent engagement.",
            "Customize content for each platform to maximize reach.",
            "Collaborate with your team and approve posts with ease.",
          ]}
          ctaUrl="/"
          ctaText="Explore our publishing features"
          imageSrc="/images/BlogScreenImages/BlogCard1.png"
        />

        <Testimonials />
        <DataColumn />
        <StrengthNumber />

        <Articles />
        <FooterWithCTA />
      </ResponsiveContainer>
    </div>
  );
}
