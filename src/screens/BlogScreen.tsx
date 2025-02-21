"use client";
import { Cards, FooterWithCTA, ResponsiveContainer, UpperBlogs } from "@/components";
import { NewsLetter } from "@/components/BlogScreen/NewsLetter";
import { Header } from "@/components/Common/Header";
import { ArrowUpRight } from "lucide-react";

export function BlogScreen() {
  return (
    <div className="flex flex-col justify-center items-center">
      <ResponsiveContainer>
        <Header className="h-[10.625rem] " />
        <NewsLetter />
        <div className="flex justify-center items-center w-full mt-20">
          <div className="w-full max-w-screen-xl px-4">
            <div className=" sm:px-6 lg:px-1">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900 mb-8">
                Recent blog posts
              </p>
            </div>
            <UpperBlogs />
            <div className=" lg:mt-24 sm:mt-8">
              <Cards title={"All blog posts "} Icon={ArrowUpRight} />
            </div>
            <div className="lg:mt-32 sm: mt-8">
              <FooterWithCTA />
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  );
}
