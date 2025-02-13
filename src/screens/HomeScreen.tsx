import {Articles} from "@/components";
import {DataColumn} from "@/components/LandingPage/DataColumn";
import {FooterWithCTA} from "@/components/LandingPage/FooterWithCTA";
import {Navbar} from "@/components/LandingPage/Navbar";
import {QuestionAnswer} from "@/components/LandingPage/QuestionAnswer";
import {StrengthNumber} from "@/components/LandingPage/StrengthNumber";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute">
        <Image
          src="/images/HomeScreenImages/GradiantImage.png"
          alt="Gradient background"
          height={500}
          width={1960}
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
      <Navbar />
      <div className="z-10  relative" >
        <main className="">
          <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20 gap-12">
            <div className="lg:w-1/2 space-y-6 ml-10">
              <span className="text-primaryBlue font-semibold text-lg ">
                EXTREMELY FAST
              </span>

              <p className="text-6xl font-bold text-secondaryGray mt-10 mb-20">
                A powerful solution for social media management
              </p>

              <p className="text-gray-600 text-xl">
                Our all-in-one social media management platform unlocks the full
                potential of social to transform not just your marketing
                strategy—but every area of your organization.
              </p>

              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-120 h-53 rounded-full border-2 border-white overflow-hidden">
                    <Image
                      src="/images/HomeScreenImages/Image1.png"
                      alt="User avatar"
                      width={120}
                      height={53}
                    />
                  </div>
                </div>
                <p className="text-lg text-gray-600">
                  Join{" "}
                  <span className="font-bold text-gray-900">
                    4600+ Creators
                  </span>{" "}
                  and start getting going viral right now
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 px-4 py-3 rounded-lg borde border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-[#6670858C]"
                />
                <button className="px-6 py-3 bg-primaryBlue text-white transition-colors border border-[#F7BE00]">
                  Get Started
                </button>
              </div>

              <Link
                href="#learn-more"
                className="text-sm text-gray-800 underline"
              >
                Learn More
              </Link>
            </div>

            <div className="lg:w-1/2 hidden lg:block ">
              <Image
                src="/images/HomeScreenImages/Mac.png"
                alt="User avatar"
                width={1221}
                height={707}
              />
            </div>
          </div>
        </main>
      </div>
      <DataColumn />
      <StrengthNumber/>
      <QuestionAnswer/>
      <Articles/>
      <FooterWithCTA/>
    </div>
  );
}
